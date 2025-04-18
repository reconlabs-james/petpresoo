"use server";

import { formatDate } from "@/lib/format";
import { appendToSheet } from "@/lib/google-sheets";
import { uploadFileToDrive } from "@/lib/google-drive";
import { formEmail, sendEmail } from "@/lib/email";

const FORM_SHEET_NAME = "application";
const NEWSLETTER_SHEET_NAME = "subscribeNewsletter";

export async function submitPetForm(formData: FormData) {
  try {
    // Extract form data
    const petName = formData.get("petName")?.toString();
    const petType = formData.get("petType")?.toString();
    const email = formData.get("email")?.toString();
    const features = formData.get("features")?.toString();
    const petStyle = formData.get("petStyle")?.toString();
    const petPhoto = formData.get("petPhoto") as File;
    const timestamp = new Date().toISOString();

    // Upload file to Google Drive if it exists
    if (!petPhoto || petPhoto.size <= 0) {
      return {
        success: false,
        message: "반려동물 사진이 없거나 유효하지 않습니다. 다시 시도해주세요.",
      };
    }
    
    const fileName = `${petName}_${petType}_${petStyle}`;
    const { fileUrl, folderUrl } = await uploadFileToDrive(petPhoto, fileName);

    const values = [
      [
        petName,
        petType,
        features || "N/A",
        email,
        petStyle || "N/A",
        fileName,
        fileUrl,
        formatDate(timestamp),
        folderUrl,
      ],
    ];

    // Append data to the "PetSubmissions" sheet
    await appendToSheet(FORM_SHEET_NAME, values);

    const { emailSubject, emailHtml } = formEmail(timestamp, email, petName, petType, petStyle, features); 
    await sendEmail(email, emailSubject, emailHtml);

    // Return success response
    return {
      success: true,
      message: "신청이 완료되었습니다! 이메일로 결과를 보내드리겠습니다.",
    };
  } catch (error) {
    console.error("Error submitting pet form:", error);
    return {
      success: false,
      message: "제출 중 오류가 발생했습니다. 나중에 다시 시도해주세요.",
    };
  }
}

export async function subscribeNewsletter(formData: FormData) {
  try {
    // Get the email from the form data
    const email = formData.get("email");

    // Validate the email
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return {
        success: false,
        message: "유효한 이메일 주소를 입력해주세요.",
      };
    }

    // Create a timestamp
    const timestamp = new Date().toISOString();
    const formatedTime = formatDate(timestamp);

    // Prepare data for Google Sheets
    const values = [[email, formatedTime]];

    // Append data to the newsletter sheet
    await appendToSheet(NEWSLETTER_SHEET_NAME, values);

    // Return success response
    return {
      success: true,
      message: "구독해 주셔서 감사합니다! 곧 특별한 소식을 보내드릴게요.",
    };
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return {
      success: false,
      message: "구독 중 오류가 발생했습니다. 나중에 다시 시도해주세요.",
    };
  }
}

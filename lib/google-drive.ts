import { google } from "googleapis";
import { Readable } from "node:stream";

const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY || "";
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL || "";
const GOOGLE_DRIVE_FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID || "";

// Google Drive 초기화
export const initGoogleDrive = async () => {
  try {
    const auth = new google.auth.JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const drive = google.drive({ version: "v3", auth });
    return drive;
  } catch (error) {
    console.error("Error initializing Google Drive:", error);
    throw new Error("Failed to initialize Google Drive");
  }
};

// 파일 업로드
export const uploadFileToDrive = async (file: File, fileName: string): Promise<{ fileUrl: string, folderUrl: string }> => {
  const drive = await initGoogleDrive();

  // Convert File to Buffer
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Generate a unique file name with timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const uniqueFileName = `${fileName}_${timestamp}`;

  const subfolderId = await createSubfolder(GOOGLE_DRIVE_FOLDER_ID, fileName);

  // Upload file to Google Drive
  const response = await drive.files.create({
    requestBody: {
      name: uniqueFileName,
      mimeType: file.type,
      parents: [subfolderId!],
    },
    media: {
      mimeType: file.type,
      body: Readable.from(buffer),
    },
  });

  // Make the file publicly accessible
  await drive.permissions.create({
    fileId: response.data.id!,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });

  // Get the file's web view link
  const fileData = await drive.files.get({
    fileId: response.data.id!,
    fields: "webViewLink",
  });

  return {
    fileUrl: fileData.data.webViewLink || `https://drive.google.com/file/d/${response.data.id}/view`,
    folderUrl: `https://drive.google.com/drive/u/0/folders/${subfolderId}`,
  }
};

// 하위 폴더 생성
export const createSubfolder = async (parentFolderId: string, folderName: string) => {
  const drive = await initGoogleDrive();

  const response = await drive.files.create({
    requestBody: {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
      parents: [parentFolderId],
    },
  });

  return response.data.id;
};

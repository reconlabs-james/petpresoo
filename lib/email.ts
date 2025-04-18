import nodemailer from "nodemailer";
import { formatDate } from "./format";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.GMAIL_OAUTH_USER,
    clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
    clientSecret: process.env.GAMIL_OAUTH_CLIENT_SECRET,
    refreshToken: process.env.GAMIL_OAUTH_REFRESH_TOKEN,
  },
});

export const sendEmail = async (to: string | undefined, subject: string, html: string) => {
  try {
    await transporter.sendMail({
      from: `"MoveMoji" <${process.env.GMAIL_OAUTH_USER}>`,
      to,
      subject,
      html,
    });

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export function formEmail(timestamp: string, email: string | undefined, petName: string | undefined, petType: string | undefined, petStyle: string | undefined, features: string | undefined) {
  const emailSubject = `🐾 [Movemoji] 반려동물 이모티콘 생성 신청이 완료되었습니다!`;
  const emailHtml = `
    <h1>안녕하세요, 무브모지(Movemoji)입니다! 🌟</h1>
    <br>
    <p>반려동물 이모티콘 생성 서비스 신청이 정상적으로 완료되었습니다!</p>
    <p>현재 본 서비스는 정식 오픈 전 테스트 단계에 있으며, 결과물을 자체적으로 검수 후 1~2일 정도 내 회신드리고 있습니다.</p>
    <p>작업이 완료되는 즉시, 신청해주신 이메일로 결과물을 보내드릴 예정입니다. 조금만 기다려 주시면 귀여운 이모티콘을 만나보실 수 있어요! 💕</p>
    <br> 
    <h2>신청 정보</h2>
    <p>신청일: ${formatDate(timestamp)}</p>
    <p>이메일: ${email}</p>
    <p>반려동물 이름: ${petName}</p>
    <p>종류: ${petType}</p>
    <p>스타일: ${petStyle}</p>
    <p>특징: ${features || "N/A"}</p>
    <br>
    <p>신청 해주셔서 진심으로 감사드립니다.</p>
    <p>궁금한 점이 있으시면 언제든지 이 이메일로 답장해 주세요.</p>
    <br> 
    <p><a href="https://movemoji.reconlabs.ai/">Movemoji 팀 드림</a></p>
    <br>
  `;
  return { emailSubject, emailHtml };
}

import { google } from "googleapis";

const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY || "";
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL || "";
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || "";

// Google Sheets 초기화
export const initGoogleSheets = async () => {
  try {
    const auth = new google.auth.JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    console.log(auth)

    const sheets = google.sheets({ version: "v4", auth });
    return sheets;
  } catch (error) {
    console.error("Error initializing Google Sheets:", error);
    throw new Error("Failed to initialize Google Sheets");
  }
};

// 데이터 시트에 추가
export const appendToSheet = async (sheetName: string, values: (string | undefined | File)[][]) => {
  const sheets = await initGoogleSheets();

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: `${sheetName}!A:Z`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values,
    },
  });

  return response.data;
};

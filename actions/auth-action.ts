"use server";

import axios from "axios";

interface LoginResponse {
  accessToken: string
  refreshToken: string
}

export interface KakaoUserInfo {
  id: number
  connected_at: string
  properties?: {
    nickname?: string
    profile_image?: string
    thumbnail_image?: string
  }
  kakao_account?: {
    profile_nickname_needs_agreement?: boolean
    profile_image_needs_agreement?: boolean
    profile?: {
      nickname?: string
      thumbnail_image_url?: string
      profile_image_url?: string
      is_default_image?: boolean
    }
    email_needs_agreement?: boolean
    is_email_valid?: boolean
    is_email_verified?: boolean
    email?: string
    age_range_needs_agreement?: boolean
    age_range?: string
    birthday_needs_agreement?: boolean
    birthday?: string
    gender_needs_agreement?: boolean
    gender?: string
  }
}

/**
 * Kakao OAuth API를 사용하여 로그인을 처리합니다.
 * @param payload 인증 요청에 필요한 파라미터(grant_type, client_id, redirect_uri, code, client_secret)
 * @returns 액세스 토큰과 리프레시 토큰을 포함한 응답 객체
 */
export const login = async (payload: string): Promise<LoginResponse> => {
  const res = await axios.post('https://kauth.kakao.com/oauth/token', payload, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });

  console.log(res)

  return {
    accessToken: res.data.access_token,
    refreshToken: res.data.refresh_token,
  }
}

/**
 * Kakao API를 사용하여 사용자 정보를 가져옵니다.
 * @param accessToken Kakao 액세스 토큰
 * @returns 사용자 정보 객체
 */
export const getUserInfo = async (accessToken: string): Promise<KakaoUserInfo> => {
  const res = await axios.get('https://kapi.kakao.com/v2/user/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });

  return res.data;
}

'use client'

import { useEffect, useState } from "react";

import { getUserInfo, KakaoUserInfo } from "@/actions/auth-action";
import { getToken } from "@/store/AuthStore";

export const useKakaoUser = () => {
  const accessToken = getToken() || ''
  const [user, setUser] = useState<KakaoUserInfo>();

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    getUserInfo(accessToken)
      .then((res) => {
        setUser(res)
      })
  }, [accessToken])

  return { user }
}

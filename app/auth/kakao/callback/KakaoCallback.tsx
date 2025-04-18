"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import { useEffect } from "react";

import { login } from "@/actions/auth-action";
import { CLIENT_SECRET, REDIRECT_URI, REST_API_KEY } from "@/constants";
import { useAuthStore } from "@/store/AuthStore";

const KakaoCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const { storeLogin } = useAuthStore();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    try {
      login(payload).then(
        (res) => {
          storeLogin(res.accessToken, res.refreshToken);
          router.push("/");
        },
        (error) => {
          console.error(error);
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (code) {
      getToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return <div>로그인 처리 중...</div>;
};

export default KakaoCallback;

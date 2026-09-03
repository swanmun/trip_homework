"use client";

import { useMutation } from "@apollo/client/react";
import { useEffect, useRef } from "react";
import { RESTORE_ACCESS_TOKEN } from "@/graphql/mutations";
import { useAuthStore } from "@/stores/auth-store";

type RestoreResult = {
  restoreAccessToken: {
    accessToken: string;
  };
};

export default function AuthRestore() {
  const [restoreAccessToken] = useMutation<RestoreResult>(RESTORE_ACCESS_TOKEN);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const finishAuth = useAuthStore((state) => state.finishAuth);
  const didRestore = useRef(false);

  useEffect(() => {
    // 개발 모드에서 effect가 두 번 실행되어도 API는 한 번만 요청해요.
    if (didRestore.current) return;
    didRestore.current = true;

    const restoreLogin = async () => {
      try {
        // 브라우저가 refresh token 쿠키를 자동으로 함께 보내요.
        const result = await restoreAccessToken();
        const newAccessToken = result.data?.restoreAccessToken.accessToken;

        if (newAccessToken) setAccessToken(newAccessToken);
      } catch {
        // 쿠키가 없거나 만료되었다면 로그아웃 상태로 시작해요.
      } finally {
        // 복구 성공 여부와 관계없이 인증 확인이 끝났음을 알려요.
        finishAuth();
      }
    };

    void restoreLogin();
  }, [finishAuth, restoreAccessToken, setAccessToken]);

  return null;
}

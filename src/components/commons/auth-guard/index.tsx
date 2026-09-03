"use client";

import { useApolloClient, useQuery } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { FETCH_USER_LOGGED_IN } from "@/graphql/queries";
import { useAuthStore } from "@/stores/auth-store";
import styles from "./styles.module.css";

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const client = useApolloClient();
  const accessToken = useAuthStore((state) => state.accessToken);
  const isAuthReady = useAuthStore((state) => state.isAuthReady);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const { data, error } = useQuery(FETCH_USER_LOGGED_IN, {
    skip: !isAuthReady || !accessToken,
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    // 토큰이 없거나 서버 검증에 실패하면 로그인 화면으로 이동해요.
    if (isAuthReady && (accessToken === "" || error)) {
      clearAuth();
      void client.clearStore();
      router.replace("/login");
    }
  }, [accessToken, clearAuth, client, error, isAuthReady, router]);

  if (!isAuthReady || !accessToken || !data) {
    return <main className={styles.loading}>로그인 정보를 확인하고 있어요.</main>;
  }

  return children;
}

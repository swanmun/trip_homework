import { useAuthStore } from "@/stores/auth-store";

export function getAccessToken() {
  return useAuthStore.getState().accessToken;
}

export function saveAccessToken(token: string) {
  useAuthStore.getState().setAccessToken(token);
}

export function removeAccessToken() {
  useAuthStore.getState().clearAuth();
}

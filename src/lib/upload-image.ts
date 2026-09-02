import { getAccessToken } from "@/lib/auth";

type UploadFileResponse = {
  data?: { uploadFile: { url: string } };
  errors?: Array<{ message: string }>;
};

// GraphQL의 Upload 타입은 일반 JSON 대신 FormData로 전송해요.
export async function uploadImage(file: File) {
  if (!file.type.startsWith("image/")) {
    throw new Error("이미지 파일만 업로드할 수 있어요.");
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error("이미지는 5MB 이하만 업로드할 수 있어요.");
  }

  const formData = new FormData();
  formData.append(
    "operations",
    JSON.stringify({
      query: `
        mutation uploadFile($file: Upload!) {
          uploadFile(file: $file) {
            url
          }
        }
      `,
      variables: { file: null },
    }),
  );
  formData.append("map", JSON.stringify({ 0: ["variables.file"] }));
  formData.append("0", file);

  const headers = new Headers({ "apollo-require-preflight": "true" });
  const accessToken = getAccessToken();
  if (accessToken) headers.set("authorization", `Bearer ${accessToken}`);

  const response = await fetch("/api/graphql", {
    method: "POST",
    headers,
    body: formData,
  });
  const result = (await response.json()) as UploadFileResponse;

  if (!result.data?.uploadFile.url) {
    throw new Error(result.errors?.[0]?.message ?? "이미지 업로드에 실패했어요.");
  }

  return result.data.uploadFile.url;
}

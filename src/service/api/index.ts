import http from "../../utils/http";

export function getPostsApi(payload: any) {
  return http.post("/posts", payload);
}

export function getCommentsApi(payload: any) {
  return http.post("/comments", payload);
}

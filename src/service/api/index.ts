import http from "../../utils/http";

export function getDataApi(payload: any) {
  return http.get("/todos/1", payload);
}

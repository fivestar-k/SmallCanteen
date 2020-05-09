import { request } from "./request";

export function getCategory(appkey) {
  return request({
    url: '/recipe_class',
    params: {
      appkey
    }
  })
}
import { request } from "./request";

export function getId(id, appkey) {
  return request({
    url: '/detail',
    params: {
      id,
      appkey
    }
  })
}
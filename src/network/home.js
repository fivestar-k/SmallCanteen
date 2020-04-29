import { request } from "./request";

export function getClass(appkey) {
  return request({
    url: '/recipe_class',
    params: {
      appkey
    }
  })
}

export function getSearch(keyword, num, appkey) {
  return request({
    url: '/Search',
    params: {
      keyword,
      num,
      appkey
    }
  })
}
import { GET,POST } from './request'
/*
  登录 相关接口
 */

export const userLogin = (data) => {
  return POST('/login/cellphone', data)
}
/*
  首页 相关接口
 */

// 获取 banner
export const getBannerList = (data) => {
  return GET('/banner?type=2', data)
}
// 获取热门标签
export const getHotMusicTagList = (data) => {
  return GET('/playlist/hot', data)
}
// 获取每日推荐歌单
export const getRecommendMusicList = (data) => {
  return GET('/recommend/resource', data)
}
/*
  首页 每日推荐 相关接口
 */
//每日推荐歌曲
export const getDayRecommendSong = (data) => {
  return GET('/recommend/songs', data)
}
// 每日推荐中 历史日推可用日期 404中
export const getHistoryRecommendList = (data) => {
  return GET('/history/recommend/songs', data)
}
/*
  首页 排行榜 相关接口
 */
export const getTopList = (data) => {
  return GET('/toplist', data)
}

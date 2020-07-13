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
};
// 获取热门标签
export const getHotMusicTagList = (data) => {
  return GET('/playlist/hot', data)
};
// 获取每日推荐歌单
export const getRecommendMusicList = (data) => {
  return GET('/recommend/resource', data)
};
/*
  首页 每日推荐 相关接口
 */
//每日推荐歌曲
export const getDayRecommendSong = (data) => {
  return GET('/recommend/songs', data)
};

// 每日推荐中 历史日推可用日期 404中
export const getHistoryRecommendList = (data) => {
  return GET('/history/recommend/songs', data)
};
/*
  首页 排行榜 相关接口
 */
export const getTopList = (data) => {
  return GET('/toplist', data)
};
/*
     云村 相关接口
 */
export const getHotWallList = (data) => {
  return GET('/comment/hotwall/list', data)
};
export const getHotTopicList = (data) => {
  return GET('/hot/topic', data)
};

/* ************* 我的 相关接口 ******************* */

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const getUserSubcount = (data) => {
  return GET('/user/subcount', data)
};
// 获取用户歌单
export const getUserPlayList = (data) => {
  return GET('/user/playlist', data)
};
/* ************* 歌曲 相关接口 ******************* */
// 获取歌曲url
export const getSongUrl = (data) => {
  return GET('/song/url', data)
};
// 获取歌曲歌词
export const getSonglylic = (data) => {
  return GET('/lyric', data)
}
// 获取歌曲评论
export const getSongComment = (data) => {
  return GET('/comment/music', data)
}

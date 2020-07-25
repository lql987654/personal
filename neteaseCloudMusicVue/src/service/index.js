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
// 发现列表
export const getHomePageFind = (data) => {
  return GET('/homepage/block/page', data)
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
// 获取用户详情
export const getUserDetail = (data) => {
  return GET('/user/detail', data)
};
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
// 获取歌曲详情
export const getSongDetail = (data) => {
  return GET('/song/detail', data)
}
// 修改喜欢该歌曲
export const getSongLikeStatus = (data) => {
  return GET('/like', data)
}
/* ************* 搜索 相关接口 ******************* */
// 搜索
export const getSearch = (data) => {
  return GET('/search', data)
}
// 默认搜索关键词
export const getSearchDefault = (data) => {
  return GET('/search/default', data)
}
// 热搜列表 简略
export const getSearchHot = (data) => {
  return GET('/search/hot', data)
}
// 热搜列表 详细
export const getSearchHotDetail = (data) => {
  return GET('/search/hot/detail', data)
}
/* ************* 视频 相关接口 ******************* */
// 获取全部视频
export const getAllVideo = (data) => {
  return GET('/video/timeline/all', data)
}
// 获取视频标签列表
export const getGroupVideoTag = (data) => {
  return GET('/video/group/list', data)
}
// 获取视频分类列表
export const getCategoryVideoTag = (data) => {
  return GET('/video/category/list', data)
}
// 获取视频分类列表下的视频
export const getCategoryVideo = (data) => {
  return GET('/video/group', data)
}
// 获取视频详情
export const getVideoDetail = (data) => {
  return GET('/video/detail', data)
}
// 获取视频播放地址
export const getVideoUrl = (data) => {
  return GET('/video/url', data)
}
// 获取视频相关信息
export const getVideoInfo = (data) => {
  return GET('/video/detail/info', data)
}
/* ************* 歌单 相关接口 ******************* */
export const getPlayListDetail = (data) => {
  return GET('/playlist/detail', data)
}

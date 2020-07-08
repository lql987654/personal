//公共状态
export default {
  namespaced: true,
  state: {
    history_url: '/',
    user: "",//用户信息
  },
  mutations: {
    login(state, user_data) {
      let data = JSON.parse(user_data);
      state.user = data.id;
      console.log(state.user)
    },
  },
  actions: {
  },
  getters: {
    userId: state => {
      return state.user
    }
  }
};

//公共状态
export default {
  namespaced: true,
  state: {
    history_url: '/',
    user: {
      id: ''
    },//用户信息
  },
  mutations: {
    login(state, user_data) {
      let data = JSON.parse(user_data);
      state.user.id = data.id;
      localStorage.setItem("user", JSON.stringify(data));
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

const userInfo = {
  state: {
    username: '',
    token: '',
    role: ''
  },
  mutations: {
    SET_USERNAME (state, val) {
      state.username = val
    },
    SET_TOKEN (state, val) {
      state.token = val
    },
    SET_ROLE (state, val) {
      state.role = val
    }
  }
};
export default userInfo;

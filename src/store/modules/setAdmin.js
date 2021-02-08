const state = {
  admin: false,
};

const getters = {
  admin: (state) => state.admin,
};

const actions = {};

const mutations = {
  setAdmin(state) {
    state.admin = !state.admin;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

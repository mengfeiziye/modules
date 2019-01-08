import * as types from './mutations_types';

const mutations = {
  [types.CREATE_USER_INFO](state, userInfo) {
    state.userInfo = userInfo;
  }
};

export default mutations;

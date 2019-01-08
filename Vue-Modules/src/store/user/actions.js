import * as types from './mutations_types';

const actions = {
  create_user_info: ({
    commit
  }, userInfo) => {
    commit(types.CREATE_USER_INFO, userInfo);
  }
};

export default actions;

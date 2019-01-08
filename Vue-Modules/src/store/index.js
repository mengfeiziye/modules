import Vue from 'vue';
import Vuex from 'vuex';
import user from './user/';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  }
});

// 使用说明 this.$store.state.user.userInfo.ID; 需要指定模块 user 内的具体某一个 state

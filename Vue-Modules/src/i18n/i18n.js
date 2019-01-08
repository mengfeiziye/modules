import Vue from 'vue';
import VueI18n from 'vue-i18n';
// import { setCookie } from './cookie.js';
Vue.use(VueI18n);

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
const messages = {
  'zh_CN': require('./lang/zh'), // 中文语言包
  'en_US': require('./lang/en') // 英文语言包
};

// 最后 export default，这一步肯定要写的。
export default new VueI18n({
  locale: 'zh_CN', // set locale 默认显示中文
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: messages
});

/**
 * Created by admin on 2017/12/14.
 * 适配不同屏幕
 */
exports.install = function (Vue, options) {
  Vue.prototype.resetRem = function () {
    addEvent();
  };
};

/**
 * 添加监听以实现rem的实时更新
 */
function addEvent() {
  setRem();
  if (window.addEventListener) {
    document.addEventListener('DOMContentLoaded', function () {
      setRem();
    });
    window.addEventListener('load', function () {
      setTimeout(setRem, 300);
    });
    window.addEventListener('resize', function () {
      setTimeout(setRem, 300);
    });
  }
}

/**
 * 根据当前屏幕分辨率设置rem
 * 屏宽750px(1920px)及以上 1rem=100px
 * 屏宽750px(1920px)以下 1rem=当前屏宽/750(1920)*100px
 */
function setRem() {
  if (isMobileDevice()) {
    document.documentElement.style.fontSize = (document.documentElement.clientWidth > 375 ? 100 : document.documentElement.clientWidth * 100 / 375) + 'px';
  } else {
    if (document.body.clientWidth > 768) {
      document.documentElement.style.fontSize = (document.documentElement.clientWidth > 1920 ? 100 : document.documentElement.clientWidth * 100 / 1920) + 'px';
    } else {
      document.documentElement.style.fontSize = (document.documentElement.clientWidth > 375 ? 100 : document.documentElement.clientWidth * 100 / 375) + 'px';
    }
  }
}

/**
 * 判断当前是否为移动设备
 * 返回：true为移动设备 false不是移动设备
 * @returns {boolean}
 */
function isMobileDevice() {
  let ConcertUtilBrowser = {
    versions: (function () {
      let u = navigator.userAgent;
      return { // 移动终端浏览器版本信息
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
        iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1 // 是否iPad
      };
    })()
  };
  if (((ConcertUtilBrowser.versions.ios && !ConcertUtilBrowser.versions.iPad) || ConcertUtilBrowser.versions.android)) {
    return true;
  } else {
    return false;
  }
}

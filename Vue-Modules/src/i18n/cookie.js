// 获取cookie
export function getCookie(name) {
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(name) !== -1) return c.substring(name.length + 1, c.length);
  }
  return '';
};

// 设置cookie,增加到vue实例方便全局调用
export function setCookie(cName, value, expiredays) {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = cName + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};

// 删除cookie
export function delCookie(name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval !== null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};

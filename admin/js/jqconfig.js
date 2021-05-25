$.ajaxPrefilter(function (option, originalOptions, jqXHR) {
  option.headers = {
    Authorization: localStorage.getItem("usertoken"), //从本地存储中获取到用户登录后的token携带给服务器
  };
  option.url = option.url.indexOf("http") !== -1 ? option.url : "http://localhost:8080/api/v1" + option.url;
  //   console.log(option);
});

$.ajaxPrefilter(function(options) {
    options.url= 'http://api-breakingnews-web.itheima.net' + options.url
    // 统一为有权限的姐后设置headers请求头
    if(options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    
    //全局同意挂载complete 回调函数
    options.complete = function(res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            //1. 强制清空 token
            localStorage.removeItem('token')
            //2. 强制跳转到登录页面
             location.href = 'file:///F:/myz/%E5%89%8D%E7%AB%AF-Learning/%E9%98%B6%E6%AE%B5%E5%9B%9B/%E5%A4%A7%E4%BA%8B%E4%BB%B6%E9%A1%B9%E7%9B%AE%E8%AF%BE%E7%A8%8B%E8%B5%84%E6%96%99/login.html'
            }
    }
})

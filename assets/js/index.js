$(function() {
    var layer = layui.layer
    getUserinfo()  

    $('#btnLogout').on('click',function() {
        layer.confirm('确定退出登录?', {icon: 3, title:'提示'}, function(index){
            //do something
            // 清空本地存储的 token
            localStorage.removeItem('token')
            // 重新跳转到登陆页面
            location.href = 'file:///F:/myz/%E5%89%8D%E7%AB%AF-Learning/%E9%98%B6%E6%AE%B5%E5%9B%9B/%E5%A4%A7%E4%BA%8B%E4%BB%B6%E9%A1%B9%E7%9B%AE%E8%AF%BE%E7%A8%8B%E8%B5%84%E6%96%99/login.html'
            layer.close(index);
          })
    })
})

// 获取用户基本信息
function getUserinfo() {
    $.ajax({
        methods: 'GET',
        url: '/my/userinfo',
        success: function(res) {
            if(res.status !== 0) {
                return layer.msg('获取用户信息失败！')
            }
            renderAvatar(res.data)
        }
        // 不论成功还是失败 最终都会调用complete函数
            /* complete: function(res) {
                //console.log('执行了 complete 回调：')
                //console.log(res)
                //在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
                if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
                //1. 强制清空 token
                localStorage.removeItem('token')
                //2. 强制跳转到登录页面
                 location.href = 'file:///F:/myz/%E5%89%8D%E7%AB%AF-Learning/%E9%98%B6%E6%AE%B5%E5%9B%9B/%E5%A4%A7%E4%BA%8B%E4%BB%B6%E9%A1%B9%E7%9B%AE%E8%AF%BE%E7%A8%8B%E8%B5%84%E6%96%99/login.html'
                }
            } */
        
    })
}

function renderAvatar(user) {
    // 1. 获取用户的名称
    var name = user.nickname || user.username
    // 2. 设置欢迎的文本
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    // 3. 按需渲染用户的头像
    if (user.user_pic !== null) {
      // 3.1 渲染图片头像
      $('.layui-nav-img')
        .attr('src', user.user_pic)
        .show()
      $('.text-avatar').hide()
    } else {
      // 3.2 渲染文本头像
      $('.layui-nav-img').hide()
      var first = name[0].toUpperCase()
      $('.text-avatar')
        .html(first)
        .show()
    }
  }
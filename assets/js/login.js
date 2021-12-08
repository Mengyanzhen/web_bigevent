$(function() {
    // 点击去注册账号的链接
    $('#link_reg').on('click',function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    // 点击去登录的链接
    $('#link_login').on('click',function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    // 从 layui 中获取form 对象
    var form = layui.form
    var layer = layui.layer
    form.verify({
        pwd: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ],
        repwd: function(value) {
            var pwd = $('.reg-box [name=password]').val()//属性选择器来查找
            if(value !== pwd) {
                return ('两次密码不一致');
            }
        }
    })
    // 监听注册表单的提交事件
  $('#form_reg').on('submit', function(e) {
    // 1. 阻止默认的提交行为
    e.preventDefault()
    // 2. 发起Ajax的POST请求
    var data = {
      username: $('#form_reg [name=username]').val(),
      password: $('#form_reg [name=password]').val()
    }
    $.post('/api/reguser', data, function(res) {
      if (res.status !== 0) {
        return layer.msg(res.message)
      }
      layer.msg('注册成功，请登录！')
      // 模拟人的点击行为
      $('#link_login').click()
    })
  })
    $('#form_login').on('submit',function(e) {
        // 1. 阻止默认的提交行为
        e.preventDefault()
        $.ajax({
            url:'/api/login',
            method: 'POST',
            // 快速获取表单中的所有数据
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                return layer.msg('登录失败！')
                }
                layer.msg('登录成功！')
                // 将登录成功得到的 token 字符串，保存到 localStorage 中
                localStorage.setItem('token', res.token)
                // 跳转到后台主页
                location.href = 'file:///F:/myz/%E5%89%8D%E7%AB%AF-Learning/%E9%98%B6%E6%AE%B5%E5%9B%9B/%E5%A4%A7%E4%BA%8B%E4%BB%B6%E9%A1%B9%E7%9B%AE%E8%AF%BE%E7%A8%8B%E8%B5%84%E6%96%99/index.html'
                
            }
        })
    })

})
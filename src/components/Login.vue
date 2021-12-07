<template>
  <div class="hello">
    <!-- 头部logo区域 -->
    <div class="main">
        <img src="../assets/images/logo.png" alt=""/>
    </div>
    <!-- 登录注册区域 -->
    <div class="loginAndRegBox ">
        <div class="title-box"></div>
        <!-- 登陆的div -->
        <div class="login-box" v-show="loginIsShow">
            <div class="login-input">
                <input type="text" placeholder="请输入用户名" id="username" class="list-input">
            </div>
            <div class="login-input">
                <input type="password" placeholder="请输入密码" id="password" class="list-input">
            </div>
            <div id="loginBtn" class="login-button"><a href="javascript:void(0);" id="login-button-submit">登录</a></div>

            <a href="javascript:;" v-on:click="goReg" class="links">去注册账号</a>
        </div>
        <!-- 注册的div -->
        <div class="reg-box" v-show="regIsShow">
            <div class="login-input">
                <input type="text" placeholder="请输入用户名" id="username" class="list-input">
            </div>
            <div class="login-input">
                <input type="password" placeholder="请输入密码" id="password" class="list-input">
            </div>
            <div class="login-input">
                <input type="password" placeholder="再次确认密码" id="repassword" class="list-input">
            </div>
            <div id="loginBtn" class="login-button"><a href="javascript:void(0);" id="login-button-submit">注册</a></div>
            <a href="javascript:;" v-on:click="goLogin" class="links">去登录</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: () => {
    return {
    loginIsShow: true,
    regIsShow: false,
  };
},
  methods: {
    goReg: function () {
      this.loginIsShow = false;
      this.regIsShow = true;
    },
    goLogin: function () {
      this.loginIsShow = true;
      this.regIsShow = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: url('../assets/images/login_bg.jpg')
    no-repeat center;
    background-size: cover;
}

.loginAndRegBox {
    width: 400px;
    height: 310px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

}
.title-box {
    height: 60px;
    background: url('../assets/images/login_title.png') no-repeat center;
}
.reg-box {
    margin-top: 10px;
    padding: 0 20px;
}
.login-box {
    margin-top: 10px;
    padding: 0 20px;
}

.login-button {
    width: 350px;  
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    border: #ebebeb 1px solid;
    text-align: center;
    background-color: aqua;
    margin-bottom: 10px;

}

a {
    text-decoration: none;
    color: #000000;
}

.login-button a {
    display: block;
}

.list-input {
    float: left;
    height: 35px;
    width: 350px;
    line-height: 35px;
    border: #ebebeb 1px solid;
    text-indent: 5px;
    outline: none;
    margin-bottom: 10px;
}

.login-input {
    overflow: hidden;
}
.links {
    display: flex;
    justify-content: flex-end;
}

</style>

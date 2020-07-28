<template>
  <div class="login-box">
    <h2>登录</h2>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="formData.phone" :attr="{ maxlength: 11 }"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="formData.password"></mt-field>
    <mt-button type="primary" @click="submitFormInfo()" @keyup.enter="submitFormInfo">确定</mt-button>

    <p class="login-tip">请用个人手机号登录 因直接掉用网易云接口 所以没有存任何个人信息记录 下为登录部分代码</p>
    <img src="../../assets/bg/login-img.png" class="tip-img">
    <p class="login-tip">后台接口部分代码 取自https://github.com/Binaryify/NeteaseCloudMusicApi</p>
    <p class="login-tip">或者使用以下账号进行测试</p>
    <p class="login-tip">账号：15601096885</p>
    <p class="login-tip">密码： 1111qqqq</p>
    <p class="login-tip">请勿随意修改。。。</p>
  </div>
</template>

<script>
  import {
    userLogin
  } from '@/service'

  export default {
    name: "Login",
    data() {
      return {
        formData: {
          phone: '',
          password: ''
        }
      }
    },
    methods: {
      submitFormInfo() {
        let valid = true;
        if(valid) {
          if(this.formData.phone === '') {
            this.toast('手机号不能为空');
            valid = false;
            return false;
          } else if(!this.regular.phone.test(this.formData.phone)) {
            this.toast('手机号输入错误');
            valid = false;
            return false;
          }
        }

        if(valid) {
          if(this.formData.password === '') {
            this.toast('密码为空');
            valid = false;
            return false;
          }
        }
        if(valid) {
          userLogin(this.formData).then(res => {
            if(res.code === 200) {
              this.toast('登录成功');
              this.$router.push({ path: '/' });
              this.$store.commit('publicStatus/login', JSON.stringify(res.account))
            } else {
              this.toast(res.message);
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .login-box {
    width: 7.5rem;
    background: url("../../assets/bg/login-bg.jpg") top center;
    background-size: 100%;
    overflow: hidden;
  }
  .login-box h2 {
    font-size: .34rem;
    text-align: center;
    font-weight: bold;
    color: #fff;
    padding: .24rem 0;
  }
  .mint-cell {
    background: transparent;
  }
  .mint-cell-wrapper .mint-cell-text {
    font-size: .28rem;
    color: #fff;
  }
  .mint-cell-value input {
    background: transparent;
    padding-left: .2rem;
  }
  .mint-button--primary {
    width: 6rem;
    display: block;
    margin: .2rem auto;
  }
  .login-tip {
    font-size: .34rem;
    color: #fff;
    font-weight: bold;
    margin: .12rem 0;
    white-space:normal;
    word-break:keep-all;
    word-wrap: break-word;
  }
  .tip-img {
    width: 7.5rem;
  }
</style>

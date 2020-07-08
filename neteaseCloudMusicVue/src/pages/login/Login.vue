<template>
  <div class="login-box">
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="formData.phone" :attr="{ maxlength: 11 }"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="formData.password"></mt-field>
    <mt-button type="primary" @click="submitFormInfo()">primary</mt-button>
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

</style>

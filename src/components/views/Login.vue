<template>
  <div class="login">
    <el-form :model="loginForm" ref="loginForm" :rules="rules" status-icon class="login-form">
        <el-form-item prop="username">
            <el-input type="text" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" @keydown.13.native="submitForm"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm" class="btn" :loading="loading">登陆</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {loginAPI} from '../../mock/user.js';
import storage from '../../utils/storage.js';

export default {
  name: 'Login',
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {validator: validateUser, triggle: 'blur'}
        ],
        password: [
          {validator: validatePass, triggle: 'blur'}
        ]
      },
      loading: false
    }
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
            this.$http.post('/api/login', {
              username: this.loginForm.username,
              password: this.loginForm.password
            }).then((res) => {
              if (res.data.message === 'ok') {
                storage.set('userInfo', res.data.data);
                this.$router.push({path: '/home'})
                this.loading = false
              } else {
                this.$message.error('用户或者密码错误');
                this.loading = false
              }
            }).catch(() => {
              this.$message.error('请求失败，请重试');
              this.loading = false
            })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .login{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #f4f4f4;
        .login-form{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 340px;
            padding: 20px 20px 0 20px;
            margin-left: -170px;
            margin-top: -113px;
            background-color: #fff;
            .btn{
                width: 100%;
            }
        }
    }
</style>
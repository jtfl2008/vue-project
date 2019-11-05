<template>
  <div class="login">
    <div class="login-form">
      <el-form ref="loginForm" :model="loginForm" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="loginForm.verification"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="button-submit" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        userName: '',
        password: '',
        verification: ''
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    // async login() {
    //   let data = this.$api.common.login()
    //   console.log(data)
    // }
  }
}
</script>
<style lang="less">
.login-form {
  margin: 200px auto;
  width: 400px;
  .button-submit {
    width: 100%;
  }
}
</style>

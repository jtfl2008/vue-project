<template>
  <div class="home">
    <el-container>
      <el-header height="70px">
        <div class="logo">
          logo
        </div>
        <div class="user-info">
          <el-button type="text" @click="loginOut">退出登录</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <side-menu></side-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>
<style lang="less">
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2f3644;
  .user-info {
    color: #fff;
    .el-button--text {
      margin-left: 20px;
      color: currentColor;
    }
  }
}
</style>

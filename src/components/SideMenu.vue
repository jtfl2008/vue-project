<template>
  <el-scrollbar>
    菜单
    <!-- <el-menu
      class="side-nav"
      :default-active="selectedMenu"
      :collapse="isCollapse"
      :collapse-transition="false"
      :unique-opened="false"
      router
      text-color="#ffffff"
    >

    </el-menu> -->
  </el-scrollbar>
</template>

<script>
export default {
  name: 'SideMenu',
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
.el-scrollbar {
  height: calc(100vh - 70px);
}
</style>

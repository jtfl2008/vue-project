<template>
  <div class="initial">
    <el-scrollbar style="height: calc(100vh - 70px)">
      默认
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: 'Initial',
  data() {
    return {
      frameSrc: ''
    }
  },
  computed: {},
  watch: {
    $route(to) {
      this.frameSrc = `${to.query.redirect}&code=${to.query.code}`
    }
  },
  created() {
    this.getFrameSrc()
  },
  methods: {
    getFrameSrc() {
      let redirect = this.$route.query.redirect
      let code = this.$route.query.code
      this.frameSrc = `${redirect}&code=${code}`
    }
  }
}
</script>
<style lang="less">
.initial-frame {
  position: absolute;
}
</style>

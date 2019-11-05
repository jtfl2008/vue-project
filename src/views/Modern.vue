<template>
  <div class="modern">
    modern-page
  </div>
</template>
<script>
export default {
  name: 'Modern',
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    getRedirect() {
      this.frameSrc = this.$route.query.redirect
    }
  }
}
</script>
<style lang="less">
.initial-frame {
  position: absolute;
}
</style>

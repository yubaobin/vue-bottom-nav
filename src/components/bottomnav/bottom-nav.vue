<template>
  <div class="bottom-nav" >
  	<slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bottom-nav',
  componentName: 'bottom-nav',
  props: {
    active: {
      type:String,
      default: "1"
    }
  },
  mounted () {
    this.$on('itemClick', this.handleItemClick)
    this.handleItemClick({ index: this.active});
  },
  methods: {
    handleItemClick (child) {
      for (const item of this.$children) {
        item.$data.activeIndex = child.index
      }
    }
  }
}
</script>
<style scoped lang="scss">
.bottom-nav {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: nowrap;
  padding: 15px 0;
}
</style>

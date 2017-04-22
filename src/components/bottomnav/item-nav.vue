<template>
  <div 
    @click="handleClick" 
    class="item-nav" 
    :class="{'is-active': active }">
  	<slot></slot>
  </div>
</template>
<script>
export default {
  name: 'item-nav',
  componentName: 'item-nav',
  data () {
    return {
      activeIndex: 0
    }
  },
  props: {
    label: {
      type: String,
      default: '未命名按钮'
    },
    index: {
      type: String,
      default: 0
    }
  },
  methods: {
    handleClick (e) {
      this.$parent.$emit('itemClick', this)
      this.$emit('click', e)
    }
  },
  computed: {
    active () {
      return this.activeIndex === this.index
    }
  }
}
</script>
<style scoped lang="scss">
.item-nav {
  text-align: center;
  &.is-active {
  	color: rgb(32, 160, 255);
  }
}
</style>


<script setup lang='ts'>
const props = defineProps({
  title: {
    type: String,
    default: '贴吧'
  },
  leftText: {
    type: String,
    default: null
  },
  rightText: {
    type: String,
    default: null
  },
  leftArrow: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <van-nav-bar
      :title="title"
      :leftArrow="leftArrow"
      :left-text="leftText"
      :left-arrow="leftArrow"
      @click-left="onClickLeft"
      :right-text="rightText"
    />
</template>
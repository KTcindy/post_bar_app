<template>
  <lazy-component>
    <div class="container">
      <div class="container_flex">
        <van-image
          round
          width="50px"
          height="50px"
          :src="profileUlr"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
        <slot name="name">
          <strong>{{name}}</strong>
        </slot>
        <slot name="right"> </slot>
      </div>
      <div class="container_title"><strong>{{title}}</strong></div>
      <div class="container_text">{{content}}</div>
      <div class="container_navigation">
        <van-image
          width="10rem"
          height="10rem"
          radius="10px"
          fit="cover"
          :src="contentUrl"
        />
      </div>
      <div>
        <van-button round icon="fire" type="default" size="mini">{{barName}}</van-button>
      </div>
      <div class="container_operation">
        <span><van-icon name="share-o" /> 分享</span>
        <span><van-icon name="comment-circle-o" /> 160</span>
        <span><van-icon name="thumb-circle-o" /> 123</span>
      </div>
    </div>
  </lazy-component>
</template>

<script setup lang="ts">
const props = defineProps({
  profileUlr: {
    type: String,
    default: ''
  },
  name:{
     type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  contentUrl: {
    type: String,
    default: ''
  },
  barName: {
    type: String,
    default: ''  
  },
  title:{
     type: String,
    default: ''
  }
})
</script>

<style lang="less" scoped>
.container {
  background-color: #fff;
  border-radius: 15px;
  margin: 10px 10px 0px 10px;
  padding: 10px;
  .container_flex {
    display: grid;
    grid-template-columns: 1fr 150px 2fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    align-items: center;
  }
  .container_text,.container_title {
    padding: 5px 0px;
  }
  .container_navigation {
    // border-radius: 15px;
    overflow: hidden;
  }
  .container_operation{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    grid-column-gap: 20px;
    margin: 10px 0px;
  }
}
</style>

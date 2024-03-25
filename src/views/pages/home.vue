<script setup lang="ts">
import NavBar from '@/components/navBar.vue'
import PullRefresh from '@/components/pullRefresh.vue'
import Content from '@/components/contents.vue'
import Search from '@/components/search.vue'
import Tab from '@/components/tab.vue'
import Modules from '@/components/modules.vue'
import { ref } from 'vue'
const isLoading = ref(false)
const active = ref(1)
const list = ref([])
const loading = ref(false)
const finished = ref(false)
const contents = ref([
  {
    profileUlr: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    name: 'ktcindy',
    title: '还有没有像这样的搞笑短篇漫画啊',
    content: '康康吊图吧的老哥们有没有存货',
    contentUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    barName: '动漫吧'
  },
  {
    profileUlr: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    name: 'ktcindy',
    title: '还有没有像这样的搞笑短篇漫画啊',
    content: '康康吊图吧的老哥们有没有存货',
    contentUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    barName: '动漫吧'
  }
])
const pullRefresh = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}
const handelClick = (e) => { 
  active.value = e
}
</script>
<template>
  <NavBar />
  <!-- <PullRefresh @pullRefresh="pullRefresh" :isLoading="isLoading"> -->
    <Content>
      <Search />
      <Tab v-bind:active="active" @item-check="handelClick" />
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <template v-for="(item, index) in contents" :key="index">
          <Modules v-bind="{ ...item }" />
        </template>
      </van-list>
    </Content>
  <!-- </PullRefresh> -->
</template>
<style scoped>
.content {
  height: calc(100vh - 100px);
  overflow: auto;
}
</style>

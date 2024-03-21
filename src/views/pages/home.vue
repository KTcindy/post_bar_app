<script setup lang="ts">
import NavBar from '@/components/navBar.vue'
import PullRefresh from '@/components/pullRefresh.vue'
import Content from '@/components/contents.vue'
import Search from '@/components/search.vue'
import Tab from '@/components/tab.vue'
import { ref } from 'vue'
const isLoading = ref(false)
const active = ref<Number>(1)
const pullRefresh = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}
const handelClick = (e: Number) => {
  active.value = e
}
</script>
<template>
  <NavBar />
  <PullRefresh @pullRefresh="pullRefresh" :isLoading="isLoading">
    <Content>
      <Search />
      <Tab :active="active" @item-check="handelClick" />
    </Content>
  </PullRefresh>
</template>
<style scoped>
.content {
  height: calc(100vh - 100px);
}
</style>

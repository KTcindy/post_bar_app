<script setup lang='ts'>
import NavBar from '@/components/navBar.vue'
import PullRefresh from '@/components/pullRefresh.vue'
import Content from '@/components/contents.vue'
import Search from '@/components/search.vue'
import { ref } from 'vue'
const isLoading = ref(false)
const pullRefresh = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}
</script>
<template>
  <NavBar />
  <PullRefresh @pullRefresh="pullRefresh" :isLoading="isLoading">
    <Content>
      <Search/>
    </Content>
  </PullRefresh>
</template>
<style scoped>
.content {
  height: calc(100vh - 100px);
}
</style>

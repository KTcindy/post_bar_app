<script setup lang="ts">
interface Item {
  name: string
  icon: string
  path: string
}
import { defineEmits } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'
const emit = defineEmits(['item-check'])
defineProps({
  route: {
    type: Boolean,
    default: true
  },
  active: {
    type: Number,
    default: () => 0
  },
  activeColor:{
    type: String,
    default: () => '#1989fa'
  },
  items: {
    type: Array as () => Item[],
    default: () => [
      { name: '首页', icon: 'home-o', path: '/pages/home' },
      { name: '进吧', icon: 'search', path: '/pages/come' },
      { name: '消息', icon: 'friends-o', path: '/pages/message' },
      { name: '我的', icon: 'setting-o', path: '/pages/mine' }
    ]
  }
})
const onChange = (vlaue) => emit('item-check', vlaue)
</script>
<template>
    <van-tabbar :route='route' :active-color='activeColor' :model-value="active" @change="onChange">
      <template v-for="(item, index) in items" :key="index">
        <van-tabbar-item replace  :to="item.path" :icon="item.icon">
          {{ item.name }}
        </van-tabbar-item>
      </template>
    </van-tabbar>
</template>

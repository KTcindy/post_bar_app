<script setup lang="ts">
interface Item {
  name: string;
  icon: string;
}
import {defineEmits } from 'vue';
const emit=defineEmits(['item-check'])
defineProps({
  active: {
    type: Number,
    default: () => 0
  },
  items: {
    type: Array as () => Item[],
    default: () => [
      { name: '首页', icon: 'home-o' },
      { name: '进吧', icon: 'search' },
      { name: '消息', icon: 'friends-o' },
      { name: '我的', icon: 'setting-o' }
    ]
  },
})
const onChange = (vlaue) => {
  emit('item-check',vlaue)
}
</script>
<template>
  <div>
    <van-tabbar :model-value="active" @change="onChange">
      <van-tabbar-item v-for="(item, index) in items" :key="index" :icon="item.icon">
        {{item.name}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

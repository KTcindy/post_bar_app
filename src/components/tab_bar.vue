<script setup lang="ts">
interface Item {
  name: string;
  icon: string;
  path:string
}
import { defineEmits } from 'vue';
import { RouterLink } from 'vue-router'
const emit=defineEmits(['item-check'])
defineProps({
  active: {
    type: Number,
    default: () => 0
  },
  items: {
    type: Array as () => Item[],
    default: () => [
      { name: '首页', icon: 'home-o',path:'/pages/home' },
      { name: '进吧', icon: 'search' ,path:'/pages/come'},
      { name: '消息', icon: 'friends-o',path:'/pages/message' },
      { name: '我的', icon: 'setting-o',path:'/pages/mine' }
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
        <router-link :to="item.path">{{item.name}} </router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

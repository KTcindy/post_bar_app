<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import tabBar from '@/components/tab_bar.vue'
const active = ref(0);
const itemClick = (value) =>{
  active.value = value;
} 
</script>
<template>
  <div class="about">
    <router-view></router-view>
    <tabBar :active="active" @item-check="itemClick" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

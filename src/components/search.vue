<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: '请输入搜索关键词'
  },
  label: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  clearable: {
    type: String,
    default: true
  },
  showAction:{
    type: Boolean,
    default: false
  },
  inputAlign:{
    type:String as () => 'left' | 'center' | 'right',
    default: 'left'
  }
})
</script>
<template>
  <van-search
    :model-value="value"
    show-action
    shape="round"
    :show-action="showAction"
    :input-align="inputAlign"
    :clearable="clearable"
    :label="label"
    :placeholder="placeholder"
    @search="onSearch"
  >
    <template #action>
      <slot />
    </template>
  </van-search>
</template>

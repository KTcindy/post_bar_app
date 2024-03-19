<script setup>
const emit = defineEmits(['item-check'])
defineProps({
  isLoading: {
    type: Boolean,
    default: false
  },
  successText: {
    type: String,
    default: '刷新成功'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const onRefresh = () => {
  emit('pullRefresh')
}
</script>
<template>
  <van-pull-refresh
    :model-value="isLoading"
    :success-text="successText"
    :disabled="disabled"
    @refresh="onRefresh"
  >
    <slot></slot>
    <slot name="pulling"></slot>
    <slot name="normal"></slot>
    <slot name="loosing"></slot>
    <slot name="loading"></slot>
    <slot name="success"></slot>
  </van-pull-refresh>
</template>

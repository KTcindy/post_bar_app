<script setup>
import { ref } from 'vue'
import Content from '@/components/contents.vue'
const showPopover = ref(false)

// 通过 actions 属性来定义菜单选项
const actions = [{ text: '编辑' }, { text: '清空' }, { text: '隐藏' }]
const onSelect = (action) => showToast(action.text)
</script>
<template>
  <div>
    <Content>
      <Search />
      <div class="history_content">
        <strong>最近逛的吧</strong>
        <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect" placement="bottom-end">
          <template #reference>
            <van-icon name="ellipsis" size="30" />
          </template>
        </van-popover>
      </div>
      <div class="history_bar">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </Content>
  </div>
</template>
<style lang="less" scoped>
.history_content {
  display: flex;
  justify-content: space-between;
  margin: var(--padding-1);
}
.history_bar{
    display: flex;
}
</style>

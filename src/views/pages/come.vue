<script setup>
import { ref } from 'vue'
import Content from '@/components/contents.vue'
const showPopover = ref(false)

// 通过 actions 属性来定义菜单选项
const actions = [{ text: '编辑' }, { text: '清空' }, { text: '隐藏' }]
const onSelect = (action) => showToast(action.text)
const historyItem=ref([
  {
    url:'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    name:'口袋海贼王',
    title:'2013最热海贼手机游戏，口袋海贼王',
    count:'关注 3.9万'
  }
])
</script>
<template>
  <div>
    <Content>
      <Search />
      <div class="history_content">
        <strong>最近逛的吧</strong>
        <van-popover
          v-model:show="showPopover"
          :actions="actions"
          @select="onSelect"
          placement="bottom-end"
        >
          <template #reference>
            <van-icon name="ellipsis" size="30" />
          </template>
        </van-popover>
      </div>
      <div class="history_bar">
        <div class="history_bar_item" v-for="(item,index) in historyItem" :key="index">
          <van-image
            round
            width="3rem"
            height="3rem"
            :src="item.url"
          />
          <div>{{item.name}}</div>
          <div>{{item.title}}</div>
          <div>{{item.count}}</div>
        </div>
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
.history_bar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  .history_bar_item {
    padding: var(--padding-1);
    font-size: var(--size-1);
    text-align: center;
  }
}
</style>

<script setup>
import { ref } from 'vue'
import Content from '@/components/contents.vue'
const showPopover = ref(false)

// 通过 actions 属性来定义菜单选项
const actions = [{ text: '编辑' }, { text: '清空' }, { text: '隐藏' }]
const onSelect = (action) => showToast(action.text)
const historyItem = ref([
  {
    url: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    name: '口袋海贼王',
    title: '2013最热海贼手机游戏，口袋海贼王',
    count: '关注 3.9万'
  },
  {
    url: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    name: '口袋海贼王',
    title: '2013最热海贼手机游戏，口袋海贼王',
    count: '关注 3.9万'
  },
  {
    url: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    name: '口袋海贼王',
    title: '2013最热海贼手机游戏，口袋海贼王',
    count: '关注 3.9万'
  },
  {
    url: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    name: '口袋海贼王',
    title: '2013最热海贼手机游戏，口袋海贼王',
    count: '关注 3.9万'
  },
  {
    url: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
    name: '口袋海贼王',
    title: '2013最热海贼手机游戏，口袋海贼王',
    count: '关注 3.9万'
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
      <div class="history_bar_container">
        <div class="history_bar">
          <div class="history_bar_item" v-for="(item, index) in historyItem" :key="index">
            <van-image round width="3rem" height="3rem" :src="item.url" />
            <div class="history_bar_item_name">{{ item.name }}</div>
            <div class="history_bar_item_title">{{ item.title }}</div>
            <div class="history_bar_item_count">{{ item.count }}</div>
          </div>
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
.history_bar_container {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;
}

.history_bar {
  display: inline-block;
}

.history_bar_item {
  display: inline-block;
//   margin-right: 20px; /* 添加间距，使项目之间有一定距离 */
  padding: var(--padding-1);
  font-size: var(--size-1);
  text-align: center;
  background-color: var(--color-0);
  width: 80px;
  margin:0px 10px;
//   scroll-margin-top: 20px;
  .history_bar_item_name {
    font-size: 14px;
    padding-bottom: 10px;
  }
  .history_bar_item_title {
    font-size: 10px;
    padding-bottom: 10px;
    width: 100%;
    overflow: hidden;
    /*文本不会换行*/
    // white-space: nowrap;
    /*当文本溢出包含元素时，以省略号表示超出的文本*/
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
  }
  .history_bar_item_count {
    font-size: 12px;
  }
}
</style>

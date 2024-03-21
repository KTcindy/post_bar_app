<template>
  <div class="tab" ref="overlay">
    <div class="tab-item">
      <span
        v-on:click="itemCheck(item.id)"
        :class="[active == item.id ? 'active' : 'on_active']"
        v-for="item in items"
        :key="item.id"
        >{{ item.name }}</span
      >
    </div>
    <div class="tab-icon" v-on:click="onClickIcon">
      <span v-if="!iconShow"><van-icon name="arrow-down" /></span>
      <span v-else><van-icon name="arrow-up" /></span>
    </div>
  </div>
  <Transition>
    <van-overlay class-name="overlay" :show="iconShow" v-stop:click="isShowClick">
      <div class="tab-content" v-show="iconShow">
        <van-grid :gutter="10">
          <van-grid-item
          class="grid_active"
            v-on:click="itemCheck(item.id)"
            v-for="item in items"
            :key="item.id"
            :text="item.name"
          />
        </van-grid>
      </div>
    </van-overlay>
  </Transition>
</template>

<script setup lang="ts">
interface Item {
  name: string
  id: Number
}
import { ref, onMounted, onUnmounted,h } from 'vue'
const emit = defineEmits(['item-check'])
const iconShow = ref<Boolean>(false)
const overlay = ref(null)
const overlay_top = ref(null);
const props = defineProps({
  items: {
    type: Array as () => Item[],
    default: () => [
      { name: '推荐', id: 1 },
      { name: '游戏', id: 2 },
      { name: '动漫', id: 3 },
      { name: '体育', id: 4 },
      { name: '情感', id: 5 },
      { name: '文学', id: 6 },
      { name: '娱乐', id: 7 },
      { name: '娱乐', id: 8 },
      { name: '娱乐', id: 9 }
    ]
  },
  active: {
    type: Number,
    default: 1
  }
})
const itemCheck = (id: Number) => emit('item-check', id)
const onClickIcon = () =>{
 overlay_top.value=overlay.value.getBoundingClientRect().bottom+'px';
   iconShow.value = !iconShow.value
}
const isShowClick = (e) => iconShow.value = false

</script>

<style lang="less" scoped>
.active {
  color: var(--color-1);
}
.on_active {
  color: var(--color-4);
}
[class~='overlay'] {
  top: v-bind(overlay_top);
}

.tab {
  position: relative;
  display: flex;
  background-color: #fff;
  .tab-item {
    &::hover {
      width: auto; /* 或者去掉固定宽度 */
      height: auto; /* 或者去掉固定高度 */
      overflow: scroll; /* 显示滚动条 */
    }
    flex: 90%;
    display: flex;
    justify-content: space-between;
    overflow: auto;
    margin: 0px var(--padding-1);
    padding-bottom: var(--padding-1);

    span {
      flex: 1;
      text-align: left;
      white-space: nowrap;
      font-size: var(--van-tab-size);
      padding-right: var(--van-tab-padding-right);
    }
  }
  .tab-icon {
    flex: 10%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: var(--padding-1);
    box-shadow:
      0px 0px rgb(253, 252, 252),
      -1px 1px rgb(248, 248, 248);
  }
}
.tab-content {
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: var(--color-0);
  padding: var(--padding-1) 0px;
  [class~='van-grid-item__content']{
    color: var(--van-blue);
   border: 1px solid var(--van-blue);
  }
   
}
</style>


<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import {getUser} from '@/utils/request'

const users = reactive({
  username: '',
  password: ''
})
// const route = useRoute()
const router = useRouter()
const onSubmit = () => {
    getUser().then(res => {
      // console.log(res)
  router.push({ path: '/pages' })

    })
}

</script>

<template>
  <main>
    <div class="login">
      <van-image round width="10rem" height="10rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="users.username" name="用户名" label="用户名" placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="users.password" type="password" name="密码" label="密码" placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>

  </main>
</template>
<style lang="less">
@import '@/assets/theme.less';
</style>

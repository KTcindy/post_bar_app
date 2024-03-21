<template>
     <div class="content">
      <slot></slot>
     </div>
</template>
<style scoped>
.content {
  height: calc(100vh - 100px);
  /* padding:0 10px; */
  background-color: rgb(238, 242, 245);
}
</style>
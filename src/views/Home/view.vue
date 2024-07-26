<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu>
          <el-menu-item index="1-1" @click="skip('/switch')"
            >首页轮播图</el-menu-item
          >
          <el-menu-item index="1-2" @click="skip('/Tutorials')">教程</el-menu-item>
          <el-menu-item index="1-3" @click="skip('/goodsList')"
            >商品列表</el-menu-item
          >
          <el-menu-item index="1-4" @click="skip('/Goods')"
            >添加商品</el-menu-item
          >
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <div class="router_view">
      <RouterView />
    </div>
  </el-container>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

function skip(val: string) {
  router.push(val);
}
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>

<style lang="scss" scoped>
@import "./vue.scss";
</style>

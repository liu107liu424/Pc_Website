<template>
  <div class="info flex">
    <el-input v-model="name" style="width: 240px" placeholder="账号" />
    <el-input v-model="password" style="width: 240px" placeholder="密码" />
    <el-button @click="login" type="success" round>登录</el-button>
  </div>
</template>
<style lang="scss" scoped>
@import "./vue.scss";
</style>
<script lang="ts" setup>
import { ref } from "vue";
import Api from "@/Api/api";
import message from "@/utils/Message";
import { useRouter } from "vue-router";
const router = useRouter();

const name = ref("嘿哈");
const password = ref("123456");

function login() {
  const obj = {
    userName: name.value,
    password: password.value,
  };
  Api.login(obj).then((res: any) => {
    const data = res.data;
    if (res.code == 200) {
      message(1, "登陆成功");
      localStorage.setItem("token", data.token);
      router.push("/");
      return false;
    }
    message(0, "登陆失败，晒后在世");
  });
}
</script>

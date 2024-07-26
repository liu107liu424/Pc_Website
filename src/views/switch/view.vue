<template>
  <el-button type="primary" @click="dialog(0, '添加图片')"
    >添加首页轮播图</el-button
  >
  <el-dialog v-model="show" :title="title" width="400">
    <div class="from flex">
      <div class="item flex">
        <span>图片链接：</span>
        <el-input
          v-model="from.url"
          style="width: 240px"
          placeholder="图片链接"
        />
      </div>
      <div class="item flex">
        <span> 商品id：</span>
        <el-input
          v-model="from.goodsId"
          style="width: 240px"
          placeholder="商品id"
        />
      </div>
    </div>
    <el-button type="primary" class="btn" @click="submit">提交</el-button>
  </el-dialog>

  <div class="list flex">
    <div v-for="(item, index) in list" class="item">
      <div class="img_view">
        <img :src="item.url" alt="" class="img" />
        <div class="item_befor"></div>
        <svg class="icon l" aria-hidden="true" @click="setImgFun(index)">
          <use xlink:href="#icon-replace"></use>
        </svg>
        <svg class="icon r" aria-hidden="true" @click="operate(0, index)">
          <use xlink:href="#icon-delect"></use>
        </svg>
      </div>
      <span>对应的商品id：{{ item.goodsId ? item.goodsId : "无" }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./vue.scss";
</style>
<script lang="ts" setup>
import { ref } from "vue";
import Api from "@/Api/api";
import message from "@/utils/Message";
let title = ref("添加图片");
let show = ref(false);
let list = ref([{ url: "", goodsId: "", id: "" }]); //图片列表
let id = ref(""); //图片id
const from = ref({
  url: "",
  goodsId: "",
});

maxImg();

function dialog(index: number, text: string) {
  show.value = true;
  title.value = text;
}
function setImgFun(index: number) {
  show.value = true;
  id.value = list.value[index].id;
  title.value = `修改第${index + 1}图片`;
}

/**提交请求 */
function submit() {
  id.value ? setImg() : addMaxImg();
}
/**获取轮播图列表 */
function maxImg() {
  Api.maxImg().then((res: any) => {
    const code = res.code;
    list.value = res.data;
    if (code != 200) {
      message(0, "网络有问题，稍后再试");
    }
  });
}
/**改、删轮播图信息x */
function operate(val: number, index: number) {
  if (val) {
    //改
    id.value = list.value[index].id;

    dialog(2, `修改第${index + 1}张图片信息`);
    return false;
  }
  //删
}
function setImg() {
  if (from.value.goodsId && from.value.url)
    return message(0, "请填写需要更改的信息");
  Api.setMaxImg({ id: id.value, ...from.value }).then((res: any) => {
    if (res.code == 200) {
      message(1, "添加成功");
      maxImg();
      return (show.value = false);
    }
    return message(0, "添加失败，稍后再试");
  });
  id.value = "";
}
//增加图片
function addMaxImg() {
  if (!from.value.url) return message(0, "缺少图片链接");
  Api.addMaxImg(from.value).then((res: any) => {
    const code = res.code;
    if (code == 200) {
      message(1, "添加成功");
      maxImg();
      return (show.value = false);
    }
    return message(0, "添加失败，稍后再试");
  });
}
</script>

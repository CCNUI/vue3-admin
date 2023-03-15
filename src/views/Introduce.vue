<template>
  <el-card class="account-container">
    <h1>作业介绍</h1>
    <div style="line-height: 30px">
      计科商城 是一个电子商城的后台管理系统。其中采用了 Vue3.0,Vite,Spring Boot,Element-Plus 等技术开发。符合课程要求。
    </div>
    <img style="width: 70%;
      display: block;
      margin: 0 auto;" src="https://s.yezgea02.com/1616331765416/WechatIMG40038.png" alt="">
    <h1>我的Wiki</h1>
    <img src="https://s.yezgea02.com/1616938239101/419241616938196_.pic.jpg" style="width: 70%;
      display: block;
      margin: 0 auto;"/>
    <ul class="course" @click="techStar">
      <li>示例1</li>
    </ul>
    <ul class="course" @click="techStar">
      <li>示例2</li>
    </ul>
    <h1>涉及的技术：</h1>
    <ul style="font-weight: bold;">
      <li>axios</li>
      <li>Echarts 5.0</li>
      <li>Vite 2.x</li>
      <li>Vue-Router 4.x</li>
      <li>wangEditor</li>
      <li>Vue 3.x</li>
      <li>Element-Plus</li>
    </ul>
    <h1>组员</h1>
    <ul>
      <li>组长：郑博阳</li>
      <li>组员：</li>
    </ul>
  </el-card>
</template>

<script setup>
const techStar = () => {
  console.log('techStar')
  window.open('https://juejin.cn/book/6933939264455442444', 'target')
}
</script>
<style scoped>
  .course {
    font-weight: bold;
    display: inline-block;
  }
  .course li {
    line-height: 36px;
    color: #409eff;
    cursor: pointer;
  }
</style>
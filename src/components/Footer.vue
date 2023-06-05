<template>
  <div class="footer">
    <div class="left leader">组长：<br>郑博阳 </div>
    <div class="left members">组员：<br>夏思源、林俊毅、吴金松 </div>
    <div class="right">
      <a @click="handleClick">计科1班-晴川商城管理系统<br>基于ElementPlus UI库</a>
    </div>
  </div>
</template>

<script>
import { ElNotification } from 'element-plus';

export default {
  methods: {
    goToHomePage() {
      window.location.href = '/'; // 将页面重定向到首页
    },
    handleClick() {
      ElNotification.error({
        title: '提示',
        message: '点我干嘛😶‍',
        duration: 3000,
        position: 'bottom-right'
      });
    }
  }

};
</script>

<script setup>
</script>

<style scoped>
  .footer {
    height: 50px;
    border-top: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .leader{
    width:3rem;
    margin-right: 1px;
    color: deeppink;
  }

  .members{
    width:11rem;
    margin-left: min(2rem, 2%);
    color: rebeccapurple;
  }

  .right {
    margin-left: auto; /* 将右侧的 div 元素靠右对齐 */
  }
</style>
<template>
  <div id="app">
    <!-- 左侧导航栏 -->
    <NavMenu />

    <!-- 右侧内容区域 路由实现跳转 -->
    <div class="right-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
export default {
  components: { NavMenu },
  data() {
    return {};
  },
};
</script>

<style scoped>
#app {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.right-container {
  padding: 15px;
  flex-grow: 1;
  box-sizing: border-box;
}
</style>
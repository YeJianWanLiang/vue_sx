<template>
  <!-- 直接用div就行，占满所有宽高，为什么？ -->
  <!-- flex两块 直接弹性布局 -->
  <!-- 整体div 100%双，菜单栏 设置百分比，右边 百分比 -->

  <!-- 导航栏，用单独的一个div包裹，后续可优化//已经改完 -->
  <!-- 拆分出组件来 -->
  <div id="app">
    <NavMenu />

    <!-- 右侧内容区域 -->

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
  /* background: blue; */
  flex-grow: 1;
  box-sizing: border-box;
}
</style>
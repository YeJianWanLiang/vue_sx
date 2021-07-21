<template>
  <!-- 直接用div就行，占满所有宽高，为什么？ -->
  <!-- flex两块 直接弹性布局 -->
  <!-- 整体div 100%双，菜单栏 设置百分比，右边 百分比 -->

  <!-- 导航栏，用单独的一个div包裹，后续可优化//已经改完 -->
  <!-- 拆分出组件来 -->
  <div style="display: flex;  width: 100%; height: 100%">
    <div></div>
      <NavMenu />
    
    <!-- 右侧内容区域 -->

    <div style="margin-left: 2%; margin-right: 2%">
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
</style>
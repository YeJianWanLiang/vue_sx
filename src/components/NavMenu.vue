<template>
  <div class="nav-menu-wrapper">
    <el-menu
      default-active="1"
      class="nav-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#515A6E"
      text-color="#fff"
      active-text-color="#4A7EE4"
      unique-opened="true"
      router="true"
    >
    <!-- 设置default-openeds之后，其他页面无法打开 -->
      <!-- 数据采集 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span slot="title">数据采集</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/BasicData" route="/BasicData"
            >入学基础数据</el-menu-item
          >
          <el-menu-item index="/SignIn" route="/SignIn"
            >上课签到统计</el-menu-item
          >
          <el-menu-item index="/GradeData" @click="goto('/GradeData')"
            >成绩统计数据</el-menu-item
          >
          <el-menu-item index="/DailyActivity" @click="goto('/DailyActivity')"
            >日常活动</el-menu-item
          >
          <el-menu-item index="/QuestionSurvey" @click="goto('/QuestionSurvey')"
            >小问卷调查</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <!-- 学生跟踪管理 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-pie-chart"></i>
          <span slot="title">学生跟踪管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/ImageAnalysis" @click="goto('/ImageAnalysis')"
            >学生画像分析</el-menu-item
          >
          <el-menu-item index="/MentalWarning" @click="goto('/MentalWarning')"
            >学生心理预警</el-menu-item
          >
          <el-menu-item index="/Growth" @click="goto('/Growth')"
            >学生成长</el-menu-item
          >
          <el-menu-item index="/RecentCare" @click="goto('/RecentCare')"
            >学生近况与关怀</el-menu-item
          >
          <el-menu-item index="/Evaluation" @click="goto('/Evaluation')"
            >学生评价</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <!-- 用户管理 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            index="/CharacterManage"
            @click="goto('/CharacterManage')"
            >角色管理</el-menu-item
          >
          <el-menu-item index="/UserManage" @click="goto('/UserManage')"
            >用户管理</el-menu-item
          >
          <el-menu-item
            index="/StudentAndParent"
            @click="goto('/StudentAndParent')"
            >学生和家长管理</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <!-- 基础信息配置 -->
      <template slot="title">
        <i class="el-icon-tickets"></i>
        <span slot="title">基础信息配置</span>
      </template>
      <el-menu-item index="/BasicInformation" @click="goto('/BasicInformation')"
        ><i class="el-icon-s-order"></i>
        <span>基础信息配置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navmenu",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style>
.nav-menu-wrapper {
  width: 15%;
  height: 100%;
  min-width: 215px;
}
.nav-menu {
  height: 100%;
}
</style>
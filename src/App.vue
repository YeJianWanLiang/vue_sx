<template>
  <!-- 直接用div就行，占满所有宽高，为什么？ -->
  <!-- flex两块 直接弹性布局 -->
  <!-- 整体div 100%双，菜单栏 设置百分比，右边 百分比 -->

  <!-- 导航栏，用单独的一个div包裹，后续可优化 -->
  <!-- 拆分出组件来 -->
  <div  style="display: flex; flex-direction: row; max-width: 100%;">
    <div style="min-width: 15%;">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#515A6E"
        text-color="#fff"
        active-text-color="#4A7EE4"
        unique-opened="true"
        router="true"
        style=""
      >
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
            <el-menu-item
              index="/QuestionSurvey"
              @click="goto('/QuestionSurvey')"
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
        <el-menu-item
          index="/BasicInformation"
          @click="goto('/BasicInformation')"
          ><i class="el-icon-s-order"></i>
          <span>基础信息配置</span>
        </el-menu-item>
      </el-menu>
    </div>

    <!-- 右侧内容区域 -->
    <!-- todo:margin边距 -->
    
    <div style="margin-left: 2%; margin-right: 2%;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'App',
  // components: {NavMenu},
  data() {
    return {};
  },

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

<style scoped>

</style>
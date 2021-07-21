<template>
  <div>
      <div class="headerName">
      <i class="el-icon-user-solid"></i>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link"
          >Hello,张三
          <i class="el-icon-arrow-down"></i>
        </span>
        <el-dropdown-menu :hide-on-click="false" slot="dropdown">
          <el-dropdown-item>Hello,张三</el-dropdown-item>
          <el-dropdown-item>账号信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="headerText">
      <span style="font-weight: bold; color: #777777">学生画像分析</span>
    </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.headerName {
  display: flex;
  justify-content: flex-end;
}
</style>
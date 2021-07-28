<template>
  <div>
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">用户管理</span>
    </div>
    <div class="functionBar">
      <el-button type="primary">新增</el-button>
      <el-input
        class="UserManage-inputUserName"
        v-model="inputID"
        placeholder="用户名"
      ></el-input>
      <el-input
        class="UserManage-inputName"
        v-model="inputID"
        placeholder="姓名"
      ></el-input>
      <el-input
        class="UserManage-inputNum"
        v-model="inputID"
        placeholder="编号"
      ></el-input>
      <el-select class="UserManage-selectCharacter" placeholder="角色">
      </el-select>
      <el-select class="UserManage-selectOpen" placeholder="是否启用">
      </el-select>

      <el-button type="primary">搜索</el-button>
    </div>

    <div class="dataTable">
      <!-- 未完成 -->
      <el-table
        :data="calTableData"
        border
        style="width: 100%"
      >
        <el-table-column
          prop="UserName"
          label="用户名"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="userName" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="userTrueName" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="userNumber" label="编号" align="center">
        </el-table-column>
        <el-table-column prop="userRole" label="角色" align="center">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" align="center">
        </el-table-column>
        <el-table-column prop="userStatus" label="状态" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.userStatus"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="450" align="center">
          <template>
            <el-button type="primary">编辑</el-button>
            <el-button type="danger">删除</el-button>
            <el-button type="primary">重置密码</el-button>
            <!-- <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                 <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">重置密码</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="tableTag">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserManage",
  data() {
    return {
      currentPage: 1,
      pagesize: 20,
      tableData: [
        {
          userName: "hh",
          userTrueName: "张三",
          userNumber: "AA123",
          userRole: "老师",
          updateTime: "2020-01-04 11:00",
          userStatus: true,
        },
        {
          userName: "hh",
          userTrueName: "张三",
          userNumber: "AA123",
          userRole: "老师",
          updateTime: "2020-01-04 11:00",
          userStatus: true,
        },
      ],
    };
  },
  computed: {
    calTableData: function() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      );
    },
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style>
/* @import url("../assets/styles/base.css"); */
/* .UserManage-functionBar {
box-sizing: border-box;
  padding: 15px 0 0 0;
  display: flex;
}
.UserManage-dataTable {
  box-sizing: border-box;
  padding: 15px 0 0 0;
}
.UserManage-tableTag {
  box-sizing: border-box;
  padding: 15px 0 0 0;
} */
</style>

<template>
  <div>
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">日常活动</span>
    </div>

    <div class="functionBar">
      <div class="DailyActivity-buttonContainer">
        <el-button type="primary">新增</el-button>
      </div>

      <div class="DailyActivity-selectContainer">
        <el-input
          v-model="inputActivity"
          placeholder="活动名称"
          class="DailyActivity-inputActivity"
        ></el-input>
        <el-button type="primary" class="DailyActivity-searchButton"
          >搜索</el-button
        >
      </div>
    </div>

    <div class="dataTable" style="width: 100%">
      <el-table :data="calTableData" border>
        <el-table-column prop="actName" label="活动名称" align="center">
        </el-table-column>
        <el-table-column prop="actType" label="类型" align="center">
        </el-table-column>
        <el-table-column prop="actAddress" label="地点" align="center">
        </el-table-column>
        <el-table-column prop="actPicture" label="照片" align="center">
          <img src="" alt="" />
        </el-table-column>
        <el-table-column
          prop="absentNumber"
          label="缺席人数/报名人数"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" align="center">
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作"
          align="center"
          class="DailyActivity-tableButton"
          width="280px"
        >
          <div>
            <el-button type="primary">编辑</el-button>
            <el-button type="primary">报名人员</el-button>
            <el-button type="danger">删除</el-button>
          </div>
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
  name: "DailyActivity",
  data() {
    return {
      inputActivity: "",
      tableData: [
        {
          actName: "围棋友谊赛",
          actType: "艺术",
          actAddress: "教室1",
          absentNumber: "",
          updateTime: "2020-01-04 11:00",
        },
        {
          actName: "围棋友谊赛",
          actType: "艺术",
          actAddress: "教室1",
          absentNumber: "",
          updateTime: "2020-01-04 11:00",
        },
      ],
      currentPage: 1,
      pagesize: 20,
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
};
</script>

<style>
.DailyActivity-buttonContainer {
  flex: 3;
}
.DailyActivity-selectContainer {
  flex: 7;
  display: flex;
  justify-content: flex-end;
}
.DailyActivity-inputActivity {
  width: 150px;
  margin-right: 2%;
}
/* .DailyActivity-buttonContainer {
  min-width: 360px;
} */
</style>

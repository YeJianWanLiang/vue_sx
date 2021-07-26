<template>
  <div>
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">上课签到统计</span>
    </div>

    <div class="SignIn-functionBar">
      <div class="SignIn-buttonCotainer">
        <el-button type="primary">新增</el-button>
        <el-button plain>推送设置</el-button>
      </div>

      <div class="SignIn-selectCotainer">
        <el-select
          v-model="valueOfYear"
          placeholder="入学年份"
          class="SignIn-selectYear"
        >
          <el-option
            v-for="item in optionsOfYear"
            :key="item.valueOfYear"
            :label="item.label"
            :value="item.valueOfYear"
          >
          </el-option>
        </el-select>
        <el-select
          v-model="valueOfClass"
          placeholder="班级"
          class="SignIn-selectClass"
        >
          <el-option
            v-for="item in optionsOfClass"
            :key="item.valueOfClass"
            :label="item.label"
            :value="item.valueOfClass"
          >
          </el-option>
        </el-select>
      </div>
    </div>

    <div class="SignIn-dataTable">
      <el-table :data="calTableData" border>
        <el-table-column prop="class" label="班级" align="center">
        </el-table-column>
        <el-table-column prop="year" label="入学年份" align="center">
        </el-table-column>
        <el-table-column prop="className" label="课程名称" align="center">
        </el-table-column>
        <el-table-column prop="classTeacher" label="任课老师" align="center">
        </el-table-column>
        <el-table-column prop="classTime" label="上课时间" align="center">
        </el-table-column>
        <el-table-column prop="classNumber" label="班级人数" align="center">
        </el-table-column>
        <el-table-column prop="attendance" label="出勤" align="center">
        </el-table-column>
        <el-table-column prop="absence" label="缺勤" align="center">
        </el-table-column>
        <el-table-column prop="sthLeave" label="事假" align="center">
        </el-table-column>
        <el-table-column prop="sickLeave" label="病假" align="center">
        </el-table-column>
        <el-table-column prop="late" label="迟到" align="center">
        </el-table-column>
        <el-table-column prop="leaveEarly" label="早退" align="center">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" align="center">
        </el-table-column>
        <el-table-column prop="operation" label="操作" align="center">
          <el-button type="primary">编辑</el-button>
        </el-table-column>
      </el-table>
    </div>

    <div class="SignIn-tableTag">
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
  name: 'SignIn',
  data() {
    return {
      optionsOfYear: [
        {
          valueOfYear: "选项1",
          label: "2021",
        },
        {
          valueOfYear: "选项2",
          label: "2020",
        },
        {
          valueOfYear: "选项3",
          label: "2019",
        },
        {
          valueOfYear: "选项4",
          label: "2018",
        },
      ],
      valueOfYear: "",
      optionsOfClass: [
        {
          valueOfClass: "选项1",
          label: "班级1",
        },
        {
          valueOfClass: "选项2",
          label: "班级2",
        },
        {
          valueOfClass: "选项3",
          label: "班级3",
        },
      ],
      valueOfClass: "",
      currentPage: 1,
      pagesize: 20,
      tableData: [
        {
          class: "20计算机1班",
          year: "2020",
          className: "线性代数",
          classTeacher: "张老师",
          classTime: "2021-01-04",
          classNumber: "50",
          attendance: "45",
          absence: "1",
          sthLeave: "2",
          sickLeave: "0",
          late: "1",
          leaveEarly: "1",
          updateTime: "2020-01-04 11:00",
        },
        {
          class: "20计算机1班",
          year: "2020",
          className: "线性代数",
          classTeacher: "张老师",
          classTime: "2021-01-04",
          classNumber: "50",
          attendance: "45",
          absence: "1",
          sthLeave: "2",
          sickLeave: "0",
          late: "1",
          leaveEarly: "1",
          updateTime: "2020-01-04 11:00",
        },
      ],
    };
  },
  computed: {
    calTableData: function () {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      );
    },
  },
};
</script>

<style>
.SignIn-functionBar {
  box-sizing: border-box;
  padding: 15px 0 0 0;
  display: flex;
}
.SignIn-buttonCotainer {
  flex: 3;
}
.SignIn-selectCotainer {
  flex: 7;
  display: flex;
  justify-content: flex-end;
}
.SignIn-selectYear {
  width: 150px;
  margin-right: 2%;
}
.SignIn-selectClass {
  width: 150px;
}
.SignIn-dataTable {
  box-sizing: border-box;
  padding: 15px 0 0 0;
}
.SignIn-tableTag {
  box-sizing: border-box;
  padding: 15px 0 0 0;
}
</style>

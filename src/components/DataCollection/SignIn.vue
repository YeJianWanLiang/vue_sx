<template>
  <div>
    <div style="text-align: right">
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
    
    <div style="display: flex">
      <span style="font-weight: bold; color: #777777">上课签到统计</span>
    </div>

    <div style="margin-top: 2%; display: flex">
      <div style="display: flex">
        <el-button type="primary">新增</el-button>
        <el-button>推送设置</el-button>
      </div>

      <!-- todo:没有在行尾 -->
      <div style="display: flex; justify-content: flex-end">
        <el-select v-model="value" placeholder="入学年份" style="width: 30%">
          <el-option
            v-for="item in optionsOfYear"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="班级" style="width: 30%">
          <el-option
            v-for="item in optionsOfClass"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>

    <div style="margin-top: 2%; display: flex">
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
        "
        border
        style="width: 100%"
      >
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

    <div style="margin-top: 2%; display: flex">
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
  data() {
    return {
      optionsOfYear: [
        {
          value: "选项1",
          label: "2021",
        },
        {
          value: "选项2",
          label: "2020",
        },
        {
          value: "选项3",
          label: "2019",
        },
        {
          value: "选项4",
          label: "2018",
        },
      ],
      optionsOfClass: [
        {
          value: "选项1",
          label: "班级1",
        },
        {
          value: "选项2",
          label: "班级2",
        },
        {
          value: "选项3",
          label: "班级3",
        },
      ],
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
};
</script>

<style>
</style>

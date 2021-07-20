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
      <span style="font-weight: bold; color: #777777">入学基础数据</span>
    </div>

    <div style="margin-top: 2%; display: flex; justify-content: space-between">
      <el-button type="primary">导入</el-button>
      <el-button type="primary">新增</el-button>
      <el-button type="primary">删除</el-button>
      <el-button type="danger" style="margin-right: 10%">导出</el-button>

      <el-select v-model="value" placeholder="入学年份" style="width: 10%">
        <el-option
          v-for="item in optionsOfYear"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value" placeholder="班级" style="width: 10%">
        <el-option
          v-for="item in optionsOfClass"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input
        v-model="inputID"
        placeholder="学号"
        style="width: 10%"
      ></el-input>
      <el-input
        v-model="inputName"
        placeholder="姓名"
        style="width: 10%"
      ></el-input>
      <el-button type="primary">搜索</el-button>
    </div>

    <div style="flex-direction: column"></div>

    <div style="margin-top: 2%; display: flex">
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pagesize, currentPage * pagesize)
        "
        border
        style="width: 100%"
      >
        <el-table-column prop="stdSchoolID" label="学号" align="center">
        </el-table-column>
        <el-table-column prop="stdName" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="stdYear" label="年份" align="center">
        </el-table-column>
        <el-table-column prop="stdClass" label="班级" align="center">
        </el-table-column>
        <el-table-column prop="stdClassTeacher" label="班主任" align="center">
        </el-table-column>
        <el-table-column prop="stdID" label="身份证号码" align="center">
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
      inputID: "",
      inputName: "",
      currentPage: 1,
      pagesize: 20,
      tableData: [
        {
          stdSchoolID: "19251210xx",
          stdName: "xd",
          stdYear: "2019",
          stdClass: "2019级软件工程1班",
          stdClassTeacher: "hx",
          stdID: "xxxxxxxxxx",
          updateTime: "2021-7-19 17:20",
        },
        {
          stdSchoolID: "19251210xx",
          stdName: "xjc",
          stdYear: "2019",
          stdClass: "2019级软件工程1班",
          stdClassTeacher: "hx",
          stdID: "xxxxxxxxxx",
          updateTime: "2021-7-19 17:21",
        },
      ],
    };
  },
};
</script>

<style>
</style>
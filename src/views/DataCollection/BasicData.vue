<template>
  <div>
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">入学基础数据</span>
    </div>

    <div class="BasicData-functionBar">
      <el-button type="primary">导入</el-button>
      <el-button type="primary">新增</el-button>
      <el-button type="primary">导出</el-button>
      <el-button type="danger" class="BasicData-deleteButton">删除</el-button>

      <el-select
        class="BasicData-selectYear"
        v-model="valueOfYear"
        placeholder="入学年份"
        style="width: 10%"
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
        class="BasicData-selectClass"
        v-model="valueOfClass"
        placeholder="班级"
        style="width: 10%"
      >
        <el-option
          v-for="item in optionsOfClass"
          :key="item.valueOfClass"
          :label="item.label"
          :value="item.valueOfClass"
        >
        </el-option>
      </el-select>
      <el-input
        class="BasicData-inputID"
        v-model="inputID"
        placeholder="学号"
        style="width: 10%"
      ></el-input>
      <el-input
        class="BasicData-inputName"
        v-model="inputName"
        placeholder="姓名"
        style="width: 10%"
      ></el-input>
      <el-button type="primary">搜索</el-button>
    </div>

    <!-- todo:checkBox放进label里 -->
    <div class="BasicData-dataTable">
      <el-table :data="calTableData" border style="width: 100%">
        <el-table-column prop="checkBox" label="checkBox?" align="center"
          ><el-checkbox v-model="checked"></el-checkbox>
        </el-table-column>
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

    <div class="BasicData-tableTag">
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
  name: 'BasicData',
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
.BasicData-functionBar {
  box-sizing: border-box;
  padding: 15px 0 0 0;
  display: flex;
}

.BasicData-deleteButton {
  margin-right: 2%;
}
.BasicData-selectYear {
  flex: 1;
  margin-right: 2%;
  width: 160px;
}
.BasicData-selectClass {
  flex: 1;
  width: 160px;
  margin-right: 2%;
}
.BasicData-inputID {
  flex: 2;
  max-width: 10%;
  margin-right: 2%;
}
.BasicData-inputName {
  flex: 2;
  max-width: 10%;
  margin-right: 2%;
}
.BasicData-dataTable {
  box-sizing: border-box;
  padding: 15px 0 0 0;
}
.BasicData-tableTag {
  box-sizing: border-box;
  padding: 15px 0 0 0;
}
</style>
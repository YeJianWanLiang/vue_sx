<template>
  <div>
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">学生心理预警</span>
    </div>
    <div class="functionBar">
      <el-button type="primary">上报</el-button>

      <el-select
        class="Mental-selectYear"
        v-model="valueOfYear"
        placeholder="入学年份"

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
        class="Mental-selectClass"
        v-model="valueOfClass"
        placeholder="班级"

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
        class="Mental-inputID"
        v-model="inputID"
        placeholder="学号"

      ></el-input>
      <el-input
        class="Mental-inputName"
        v-model="inputName"
        placeholder="姓名"

      ></el-input>
      <el-select
        class="Mental-selectAffair"
        v-model="valueOfClass"
        placeholder="处理情况"
      >
        <el-option
          v-for="item in optionsOfAffair"
          :key="item.valueOfAffair"
          :label="item.label"
          :value="item.valueOfAffair"
        >
        </el-option>
      </el-select>
      <el-button type="primary">搜索</el-button>
    </div>
    <div class="dataTable">
      <el-table
        :data="calTableData"
        border
        style="width: 100%"
        ref="multipleTable"
      >
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column prop="stdName" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="stdSchoolID" label="学号" align="center">
        </el-table-column>
        <el-table-column prop="stdYear" label="入学年份" align="center">
        </el-table-column>
        <el-table-column prop="stdClass" label="班级" align="center">
        </el-table-column>
        <el-table-column prop="stdAction" label="表现行为" align="center">
        </el-table-column>
        <el-table-column prop="stdPeople" label="上报人" align="center">
        </el-table-column>
        <el-table-column prop="updateTime" label="处理人/处理时间" align="center">
        </el-table-column>
        <el-table-column prop="updateStituation" label="处理情况" align="center">
        </el-table-column>
        <el-table-column prop="operation" label="操作" align="center" width="200px">  
          <el-button type="primary" size='small'>处理</el-button>
          <el-button type="primary" size='small'>交流记录</el-button>
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
  name: "Mental",
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

      optionsOfAffair: [
        {
          valueOfAffair: "选项1",
          label: "待处理",
        },
        {
          valueOfAffair: "选项2",
          label: "正在处理",
        },
        {
          valueOfAffair: "选项3",
          label: "处理完成",
        },
      ],
      valueOfAffair: "",

      currentPage: 1,
      pagesize: 20,
      tableData: [
        {
          stdName: "xd",
          stdSchoolID: "19251210xx",
          stdYear: "2019",
          stdClass: "2019级软件工程1班",
          stdAction: "最近有异常行为",
          stdPeople: "匿名",
          updateTime: "-",
          updateStituation: "待处理",
        },
        {
          stdName: "xjc",
          stdSchoolID: "19251210xx",
          stdYear: "2019",
          stdClass: "2019级软件工程1班",
          stdAction: "最近有异常行为",
          stdPeople: "匿名",
          updateTime: "左老师/10086",
          updateStituation: "正在处理",
        },
      ],
      multipleSelection: [],
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
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style>
.Mental-selectYear {
  flex: 1;
  margin-right: 2%;
  width: 200px;
}
.Mental-selectClass {
  flex: 1;
  width: 200px;
  margin-right: 2%;
}
.Mental-inputID {
  flex: 2;
  max-width: 10%;
  margin-right: 2%;
}
.Mental-inputName {
  flex: 2;
  max-width: 10%;
  margin-right: 2%;
}
.Mental-selectAffair {
  flex: 1;
  width: 200px;
  margin-right: 2%;
}
</style>
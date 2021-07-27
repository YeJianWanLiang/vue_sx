<template>
  <div>
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">小问卷调查</span>
    </div>
    <div class="QuestionSurvey-functionBar">
      <el-button type="primary">新增</el-button>
      <el-input
        v-model="inputTitle"
        placeholder="问卷标题"
        class="QuestionSurvey-inputType"
      ></el-input>
      <el-select v-model="valueOfType" placeholder="类型">
        <el-option
          v-for="item in optionsOfType"
          :key="item.valueOfType"
          :label="item.label"
          :value="item.valueOfType"
        >
        </el-option> </el-select
      ><el-select v-model="valueOfObject" placeholder="发送对象">
        <el-option
          v-for="item in optionsOfObject"
          :key="item.valueOfObject"
          :label="item.label"
          :value="item.valueOfObject"
        >
        </el-option>
      </el-select>
      <el-button type="primary">搜索</el-button>
    </div>
    <div class="QuestionSurvey-dataTable">
      <el-table :data="calTableData" border style="width: 100%">
        <el-table-column prop="questionTitle" label="问卷标题" align="center">
        </el-table-column>
        <el-table-column prop="questionType" label="类型" align="center">
        </el-table-column>
        <el-table-column prop="questionObject" label="发送对象" align="center">
        </el-table-column>
        <el-table-column prop="questionNumber" label="提交数量" align="center">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" align="center">
        </el-table-column>
        <el-table-column prop="isPublish" label="是否发布" align="center">
          <el-switch
            v-model="valueOfSwitch"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作"
          align="center"
          width="320px"
        >
          <el-button type="primary">编辑</el-button>
          <el-button type="primary">问卷统计</el-button>
          <el-select v-model="valueOfMore" placeholder="更多" class="QuestionSurvey-selectMore">
            <el-option
              v-for="item in optionsOfMore"
              :key="item.valueOfMore"
              :label="item.label"
              :value="item.valueOfMore"
            >
            </el-option>
          </el-select>
        </el-table-column>
      </el-table>
    </div>
    <div class="QuestionSurvey-tableTag">
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
  name: "QuestionSurvey",
  data() {
    return {
      inputTitle: "",
      optionsOfType: [
        {
          valueOfType: "选项1",
          label: "家长问卷",
        },
        {
          valueOfType: "选项2",
          label: "学生问卷",
        },
        {
          valueOfType: "选项3",
          label: "企业问卷",
        },
      ],
      valueOfType: "",
      optionsOfObject: [
        {
          valueOfObject: "选项1",
          label: "家长",
        },
        {
          valueOfObject: "选项2",
          label: "学生",
        },
        {
          valueOfObject: "选项3",
          label: "企业",
        },
      ],
      valueOfObject: "",
      valueOfSwitch: true,
      currentPage: 1,
      pagesize: 20,
      tableData: [
        {
          questionTitle: "问卷1",
          questionType: "家长问卷",
          questionObject: "家长",
          questionNumber: "12",
          updateTime: "2021-01-04 11:30",
        },
        {
          questionTitle: "问卷1",
          questionType: "家长问卷",
          questionObject: "家长",
          questionNumber: "12",
          updateTime: "2021-01-04 11:30",
        },
      ],
      optionsOfMore: [
        {
          valueOfMore: "选项1",
          label: "更多",
        },
        {
          valueOfMore: "选项2",
          label: "预览",
        },
        {
          valueOfMore: "选项3",
          label: "复制链接",
        },
        {
          valueOfMore: "选项4",
          label: "发送问卷",
        },
        {
          valueOfMore: "选项5",
          label: "导出问卷",
        },
        {
          valueOfMore: "选项6",
          label: "删除",
        },
      ],
      valueOfMore: '',
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
.QuestionSurvey-functionBar {
  display: flex;
  box-sizing: border-box;
  padding: 15px 0 0 0;
}

.QuestionSurvey-inputType {
  width: 150px;
}
.QuestionSurvey-dataTable {
  box-sizing: border-box;
  padding: 15px 0 0 0;
}
.QuestionSurvey-tableTag {
  box-sizing: border-box;
  padding: 15px 0 0 0;
}
.QuestionSurvey-selectMore {
  width: 120px;
}
</style>

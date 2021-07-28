<template>
  <div>
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">基础信息配置</span>
    </div>
    <div class="tabBar">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="班级配置" name="classConfiguration">
          <div class="functionBarInTab">
            <div class="BasicInformation-buttonCotainer">
              <el-button type="primary">新增</el-button>
            </div>
            <div class="BasicInformation-selectCotainer">
              <el-select
                style=""
                class="BasicInformation-SelectYear"
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
              <el-button class="BasicInformation-SearchButton" type="primary"
                >搜索</el-button
              >
            </div>
          </div>
          <div class="dataTab">
            <el-table :data="calTableDataClass" border style="width: 100%">
              <el-table-column
                prop="class"
                label="班级"
                align="center"
              ></el-table-column>
              <el-table-column prop="year" label="入学年份" align="center">
              </el-table-column>
              <el-table-column
                prop="stdClassTeacher"
                label="班主任"
                align="center"
              >
              </el-table-column>
              <el-table-column prop="operation" label="操作" align="center">
                <el-button type="primary">编辑</el-button>
                <el-button type="primary">课程表</el-button>
                <el-button type="danger">删除</el-button>
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
              :total="classConfiguration.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>

        <el-tab-pane label="入学年份配置" name="entryYearConfiguration">
          <div class="functionBarInTab">
            <div class="BasicInformation-buttonCotainer">
              <el-button type="primary">新增</el-button>
            </div>
          </div>
          <div class="dataTab">
            <el-table :data="calTableDataEntryYear" border style="width: 40%">
              <el-table-column prop="year" label="入学年份" align="center">
              </el-table-column>
              <el-table-column prop="isPublish" label="是否启用" align="center">
                <el-switch
                  v-model="valueOfSwitch"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </el-table-column>
              <el-table-column prop="operation" label="操作" align="center">
                <el-button type="primary">编辑</el-button>
                <el-button type="danger">删除</el-button>
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
              :total="entryYearConfigurationTable.length"
            >
            </el-pagination></div
        ></el-tab-pane>

        <el-tab-pane label="日常表现配置" name="dailyPerformanceConfiguration">
          <div class="functionBarInTab">
            <div class="BasicInformation-buttonCotainer">
              <el-button type="primary">新增</el-button>
            </div>
          </div>
          <div class="dataTab">
            <el-table
              :data="dailyPerformanceConfiguration"
              border
              style="width: 30%"
            >
              <el-table-column
                prop="DailyPerformance"
                label="日常表现"
                align="center"
              >
              </el-table-column>
              <el-table-column prop="operation" label="操作" align="center">
                <el-button type="primary">编辑</el-button>
                <el-button type="danger">删除</el-button>
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
              :total="dailyPerformanceConfiguration.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>

        <el-tab-pane label="活动类型配置" name="activeTypeConfiguration">
          <div class="functionBarInTab">
            <div class="BasicInformation-buttonCotainer">
              <el-button type="primary">新增</el-button>
            </div>
          </div>
          <div class="dataTab">
            <el-table :data="activeTypeConfiguration" border style="width: 30%">
              <el-table-column
                prop="activityType"
                label="活动类型"
                align="center"
              >
              </el-table-column>
              <el-table-column prop="operation" label="操作" align="center">
                <el-button type="primary">编辑</el-button>
                <el-button type="danger">删除</el-button>
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
              :total="activeTypeConfiguration.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicInformation",
  data() {
    return {
      activeName: "classConfiguration",
      optionsOfYear: [
        {
          valueOfYear: "选项1",
          label: "2020",
        },
        {
          valueOfYear: "选项2",
          label: "2019",
        },
      ],
      valueOfYear: "",

      currentPageClass: 1,
      pagesizeClass: 20,
      classConfiguration: [
        {
          class: "19软1",
          year: "2019",
          stdClassTeacher: "hx",
        },
        {
          class: "19软2",
          year: "2019",
          stdClassTeacher: "lyx",
        },
      ],

      currentPageEntryYear: 1,
      pagesizeEntryYear: 20,
      entryYearConfigurationTable: [
        {
          year: "2019",
        },
        {
          year: "2019",
        },
      ],

      currentPageDailyPerformance: 1,
      pagesizeDailyPerformance: 20,
      dailyPerformanceConfiguration: [
        {
          DailyPerformance: "德育",
        },
        {
          DailyPerformance: "文体",
        },
      ],

      currentPageActiveType: 1,
      pagesizeActiveType: 20,
      activeTypeConfiguration: [
        {
          activityType: "艺术",
        },
        {
          activityType: "学习",
        },
      ],
    };
  },
  methods: {
    // handleClick() {},
  },
  computed: {
    calTableDataClass: function() {
      return this.classConfiguration.slice(
        (this.currentPageClass - 1) * this.pagesizeClass,
        this.currentPageClass * this.pagesizeClass
      );
    },
    calTableDataEntryYear: function() {
      return this.entryYearConfigurationTable.slice(
        (this.currentPageEntryYear - 1) * this.pagesizeEntryYear,
        this.currentPageEntryYear * this.pagesizeEntryYear
      );
    },
    calTableDataDailyPerformance: function() {
      return this.dailyPerformanceConfiguration.slice(
        (this.currentPageDailyPerformance - 1) * this.pagesizeDailyPerformance,
        this.currentPageDailyPerformance * this.pagesizeDailyPerformance
      );
    },
    calActiveTypeConfiguration: function() {
      return this.activeTypeConfiguration.slice(
        (this.currentPageActiveType - 1) * this.pagesizeActiveType,
        this.currentPageActiveType * this.pagesizeActiveType
      );
    },
  },
};
</script>

<style>
.BasicInformation-buttonCotainer {
  flex: 3;
  display: inline-block;
}
.BasicInformation-selectCotainer {
  justify-content: space-between;
}
.BasicInformation-SelectYear {
  padding: 0 15px 0 0;
  width: 130px;
}
</style>

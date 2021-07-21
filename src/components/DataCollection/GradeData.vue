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
      <span style="font-weight: bold; color: #777777">成绩统计数据</span>
    </div>

    <div class="tabBar">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="日常表现成绩" name="first">
          <div class="functionBar">
            <div class="buttonCotainer">
              <el-button type="primary">导入</el-button>
              <el-button type="primary">导出</el-button>
            </div>
            <div class="selectCotainer">
              <el-select v-model="valueOfTerm" placeholder="学期">
                <el-option
                  v-for="item in optionsOfTerm"
                  :key="item.valueOfTerm"
                  :label="item.label"
                  :value="item.valueOfTerm"
                >
                </el-option>
              </el-select>
              <el-select v-model="valueOfYear" placeholder="入学年份">
                <el-option
                  v-for="item in optionsOfYear"
                  :key="item.valueOfYear"
                  :label="item.label"
                  :value="item.valueOfYear"
                >
                </el-option>
              </el-select>
              <el-select v-model="valueOfClass" placeholder="班级">
                <el-option
                  v-for="item in optionsOfClass"
                  :key="item.valueOfClass"
                  :label="item.label"
                  :value="item.valueOfClass"
                >
                </el-option>
              </el-select>
              <el-input
                v-model="inputID"
                placeholder="学号"
                style="width: 15%"
              ></el-input>
              <el-input
                v-model="inputName"
                placeholder="姓名"
                style="width: 15%"
              ></el-input>
              <el-button type="primary">导出</el-button>
            </div>
          </div>
          <div class="dataTab">
            <el-table :data="calTableDataDaily" border style="width: 100%">
              <el-table-column prop="stdID" label="学号"> </el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="year" label="入学年份"> </el-table-column>
              <el-table-column prop="class" label="班级"></el-table-column>
              <el-table-column prop="workCheck" label="考勤"></el-table-column>
              <el-table-column prop="homeWork" label="作业"></el-table-column>
              <el-table-column
                prop="classBehavior"
                label="课堂表现"
              ></el-table-column>
              <el-table-column
                prop="updateTime"
                label="更新时间"
              ></el-table-column>
              <el-table-column prop="operation" label="操作" align="center">
                <el-button type="primary">编辑</el-button>
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
              :total="tableDataOfDaily.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="期中成绩" name="second"
          ><div class="functionBar">
            <div class="buttonCotainer">
              <el-button type="primary">导入</el-button>
              <el-button type="primary">导出</el-button>
            </div>
            <div class="selectCotainer">
              <el-select v-model="valueOfTerm" placeholder="学期">
                <el-option
                  v-for="item in optionsOfTerm"
                  :key="item.valueOfTerm"
                  :label="item.label"
                  :value="item.valueOfTerm"
                >
                </el-option>
              </el-select>
              <el-select v-model="valueOfYear" placeholder="入学年份">
                <el-option
                  v-for="item in optionsOfYear"
                  :key="item.valueOfYear"
                  :label="item.label"
                  :value="item.valueOfYear"
                >
                </el-option>
              </el-select>
              <el-select v-model="valueOfClass" placeholder="班级">
                <el-option
                  v-for="item in optionsOfClass"
                  :key="item.valueOfClass"
                  :label="item.label"
                  :value="item.valueOfClass"
                >
                </el-option>
              </el-select>
              <el-input
                v-model="inputID"
                placeholder="学号"
                style="width: 15%"
              ></el-input>
              <el-input
                v-model="inputName"
                placeholder="姓名"
                style="width: 15%"
              ></el-input>
              <el-button type="primary">导出</el-button>
            </div>
          </div>
          <div class="dataTab">
            <el-table :data="calTableDataMid" border style="width: 100%">
              <el-table-column prop="stdID" label="学号"> </el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="year" label="入学年份"> </el-table-column>
              <el-table-column prop="class" label="班级"></el-table-column>
              <el-table-column prop="GPA" label="绩点"></el-table-column>
              <el-table-column
                prop="updateTime"
                label="更新时间"
              ></el-table-column>
              <el-table-column prop="operation" label="操作" align="center">
                <el-button type="primary">编辑</el-button>
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
              :total="tableDataOfMid.length"
            >
            </el-pagination></div
        ></el-tab-pane>
        <el-tab-pane label="期末成绩" name="third"
          ><div class="functionBar">
            <div class="buttonCotainer">
              <el-button type="primary">导入</el-button>
              <el-button type="primary">导出</el-button>
            </div>
            <div class="selectCotainer">
              <el-select v-model="valueOfTerm" placeholder="学期">
                <el-option
                  v-for="item in optionsOfTerm"
                  :key="item.valueOfTerm"
                  :label="item.label"
                  :value="item.valueOfTerm"
                >
                </el-option>
              </el-select>
              <el-select v-model="valueOfYear" placeholder="入学年份">
                <el-option
                  v-for="item in optionsOfYear"
                  :key="item.valueOfYear"
                  :label="item.label"
                  :value="item.valueOfYear"
                >
                </el-option>
              </el-select>
              <el-select v-model="valueOfClass" placeholder="班级">
                <el-option
                  v-for="item in optionsOfClass"
                  :key="item.valueOfClass"
                  :label="item.label"
                  :value="item.valueOfClass"
                >
                </el-option>
              </el-select>
              <el-input
                v-model="inputID"
                placeholder="学号"
                style="width: 15%"
              ></el-input>
              <el-input
                v-model="inputName"
                placeholder="姓名"
                style="width: 15%"
              ></el-input>
              <el-button type="primary">导出</el-button>
            </div>
          </div>
          <div class="dataTab">
            <el-table :data="tableDataOfFinal" border style="width: 100%">
              <el-table-column prop="stdID" label="学号"> </el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="year" label="入学年份"> </el-table-column>
              <el-table-column prop="class" label="班级"></el-table-column>
              <el-table-column prop="GPA" label="绩点"></el-table-column>
              <el-table-column
                prop="updateTime"
                label="更新时间"
              ></el-table-column>
              <el-table-column prop="operation" label="操作" align="center">
                <el-button type="primary">编辑</el-button>
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
              :total="tableDataOfMid.length"
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
  data() {
    return {
      optionsOfTerm: [
        {
          valueOfTerm: "选项1",
          label: "2020-2021第一学期",
        },
        {
          valueOfTerm: "选项2",
          label: "2020-2021第二学期",
        },
        {
          valueOfTerm: "选项3",
          label: "2019-2020第一学期",
        },
        {
          valueOfTerm: "选项4",
          label: "2019-2020第二学期",
        },
      ],
      valueOfTerm: "",
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
      optionsOfClass: [
        {
          valueOfClass: "选项1",
          label: "20计算机1班",
        },
        {
          valueOfClass: "选项2",
          label: "20计算机2班",
        },
      ],
      valueOfClass: "",

      currentPageDaily: 1,
      pagesizeDaily: 20,
      tableDataOfDaily: [
        {
          stdID: "19251210xx",
          name: "xd",
          year: "2020",
          class: "19软1",
          workCheck: "4分",
          homeWork: "4分",
          classBehavior: "5分",
          updateTime: "2021-07-21 13:14",
        },
        {
          stdID: "19251210xx",
          name: "xjc",
          year: "2020",
          class: "19软1",
          workCheck: "4分",
          homeWork: "4分",
          classBehavior: "5分",
          updateTime: "2021-07-21 13:14",
        },
      ],

      currentPageMid: 1,
      pagesizeMid: 20,
      tableDataOfMid: [
        {
          stdID: "19251210xx",
          name: "xd",
          year: "2020",
          class: "19软1",
          GPA: "4分",
          updateTime: "2021-07-21 13:14",
        },
        {
          stdID: "19251210xx",
          name: "xd",
          year: "2020",
          class: "19软1",
          GPA: "4分",
          updateTime: "2021-07-21 13:14",
        },
      ],

      currentPageFinal: 1,
      pagesizeFinal: 20,
      tableDataOfFinal: [
        {
          stdID: "19251210xx",
          name: "xd",
          year: "2020",
          class: "19软1",
          GPA: "4分",
          updateTime: "2021-07-21 13:14",
        },
        {
          stdID: "19251210xx",
          name: "xd",
          year: "2020",
          class: "19软1",
          GPA: "4分",
          updateTime: "2021-07-21 13:14",
        },
      ],
      inputID: "",
      inputName: "",
    };
  },
  methods: {
    // handleClick() {},
  },
  computed: {
    calTableDataDaily: function () {
      return this.tableDataOfDaily.slice(
        (this.currentPageDaily - 1) * this.pagesizeDaily,
        this.currentPageDaily * this.pagesizeDaily
      );
    },
    calTableDataMid: function () {
      return this.tableDataOfMid.slice(
        (this.currentPageMid - 1) * this.pagesizeMid,
        this.currentPageMid * this.pagesizeMid
      );
    },
    calTableDataFinal: function () {
      return this.tableDataOfFinal.slice(
        (this.currentPageFinal - 1) * this.pagesizeFinal,
        this.currentPageFinal * this.pagesizeFinal
      );
    },
  },
};
</script>

<style>
.headerName {
  display: flex;
  justify-content: flex-end;
}
.tabBar {
  box-sizing: border-box;
  padding: 15px 0 0 0;
}
.functionBar {
  box-sizing: border-box;
  padding: 15px 0 0 0;
  display: flex;
}
.buttonCotainer {
  flex: 3;
}
.selectCotainer {
  flex: 7;
  display: flex;
  justify-content: flex-end;
}
.dataTab {
  box-sizing: border-box;
  padding: 15px 0 0 0;
}
</style>
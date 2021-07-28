<template>
  <div>
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">学生画像分析</span>
    </div>
    <div class="tabBar">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="表格" name="table">
          <div class="functionBarInTab">
            <div class="ImageAnalysis-buttonCotainer">
              <el-button type="primary">生成画像</el-button>
            </div>

            <div class="ImageAnalysis-selectCotainer">
              <el-select
                class="ImageAnalysis-SelectYear"
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
                class="ImageAnalysis-SelectClass"
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
                class="ImageAnalysis-InputID"
                v-model="inputID"
                placeholder="学号"
              ></el-input>
              <el-input
                class="ImageAnalysis-InputName"
                v-model="inputName"
                placeholder="姓名"
              ></el-input>
              <el-select
                class="ImageAnalysis-SelectMental"
                v-model="statusOfMental"
                placeholder="心理健康状况"
              >
                <el-option
                  v-for="item in optionsOfMentalHtlh"
                  :key="item.statusOfMental"
                  :label="item.label"
                  :value="item.statusOfMental"
                >
                </el-option>
              </el-select>
              <el-button class="ImageAnalysis-SearchButton" type="primary"
                >搜索</el-button
              >
            </div>
          </div>
          <div class="dataTable">
            <el-table :data="calTableData" border style="width: 100%">
              <el-table-column prop="stdID" label="学号"> </el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="year" label="入学年份"> </el-table-column>
              <el-table-column prop="class" label="班级"></el-table-column>
              <el-table-column
                prop="characterType"
                label="性格类型"
              ></el-table-column>
              <el-table-column
                prop="interests"
                label="兴趣爱好"
              ></el-table-column>
              <el-table-column prop="specialty" label="特长"></el-table-column>
              <el-table-column
                prop="futureTrend"
                label="未来走向"
              ></el-table-column>
              <el-table-column
                prop="rcmdCourse"
                label="推荐选课"
              ></el-table-column>
              <el-table-column
                prop="mentalHtlh"
                label="心理健康状况"
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
              :total="tableData.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="雷达" name="radar">
          <div class="ImageAnalysis-functionBar">
            <div class="ImageAnalysis-selectCotainer">
              <div class="ImageAnalysis-radarselect">
                <el-select
                  v-model="valueOfFeatures"
                  placeholder="按特征查看"
                  class="ImageAnalysis-SelectFeatures"
                >
                  <el-option
                    v-for="item in optionsOfFeatures"
                    :key="item.valueOfFeatures"
                    :label="item.label"
                    :value="item.valueOfFeatures"
                  >
                  </el-option>
                </el-select>
                <el-select
                  v-model="valueOfGrade"
                  placeholder="按年级查看"
                  class="ImageAnalysis-SelectGrade"
                >
                  <el-option
                    v-for="item in optionsOfGrade"
                    :key="item.valueOfGrade"
                    :label="item.label"
                    :value="item.valueOfGrade"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="ImageAnalysis-radarImage">
            <!-- 图 -->
            <img
              src="https://p1.ssl.qhimg.com/dr/270_500_/t018ed2600ec82f4433.jpg?size=600x600"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageAnalysis",
  data() {
    return {
      activeName: "table",
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
      optionsOfMentalHtlh: [
        {
          statusOfMental: "选项1",
          label: "正常",
        },
        {
          statusOfMental: "选项2",
          label: "预警",
        },
      ],
      statusOfMental: "",

      tableData: [
        {
          stdID: "19251210xx",
          name: "xd",
          year: "2020",
          class: "19软1",
          characterType: "内向",
          interests: "数学竞赛",
          specialty: "数学、英语",
          futureTrend: "网络工程师",
          rcmdCourse: "数据结构",
          mentalHtlh: "预警",
          updateTime: "2021-07-21 13:14",
        },
        {
          stdID: "19251210xx",
          name: "xjc",
          year: "2020",
          class: "19软1",
          characterType: "活泼、热情",
          interests: "篮球",
          specialty: "体育",
          futureTrend: "体育教练",
          rcmdCourse: "体育与健康",
          mentalHtlh: "正常",
          updateTime: "2021-08-21 7:23",
        },
      ],

      currentPage: 1,
      pagesize: 20,

      inputID: "",
      inputName: "",

      optionsOfGrade: [
        {
          valueOfGrade: "选项1",
          label: "按年级查看",
        },
        {
          valueOfGrade: "选项2",
          label: "按班级查看",
        },
      ],
      valueOfGrade: "选项1",

      optionsOfFeatures: [
        {
          valueOfFeatures: "选项1",
          label: "性格类型",
        },
        {
          valueOfFeatures: "选项2",
          label: "兴趣爱好",
        },
        {
          valueOfFeatures: "选项3",
          label: "特长",
        },
        {
          valueOfFeatures: "选项4",
          label: "推荐选课",
        },
        {
          valueOfFeatures: "选项5",
          label: "未来走向",
        },
      ],
      valueOfFeatures: "选项1",
    };
  },
  methods: {
    // handleClick() {},
    alignTable() {
      this.$refs.table.doLayout();
    },
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
.ImageAnalysis-buttonCotainer {
  flex: 3;
  display: inline-block;
}
.ImageAnalysis-selectCotainer {
  flex: 7;
  display: flex;
  justify-content: space-between;
}
.ImageAnalysis-SelectYear {
  width: 150px;
}
.ImageAnalysis-SelectClass {
  width: 150px;
}
.ImageAnalysis-InputID {
  width: 150px;
}
.ImageAnalysis-InputName {
  width: 150px;
}
.ImageAnalysis-SelectMental {
  width: 150px;
}
.ImageAnalysis-dataTab {
  box-sizing: border-box;
  padding: 15px 0 0 0;
}
.ImageAnalysis-SelectFeatures {
  padding: 0 30px 0 0;
}
.ImageAnalysis-radarImage {
  margin: 15px 0 0 0;
  width: 500px;
  height: 500px;
  border: 2px solid; /*显示边界*/
}

.el-table__header,
.el-table__body,
.el-table__footer {
  table-layout: auto;
}
</style>

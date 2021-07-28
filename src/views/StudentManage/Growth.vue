<template>
  <div>
    
    <!-- TODO -->
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">学生成长</span>
    </div>
    <div class="tabBar">
      <!-- 标签页 -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="培养建议" name="dailyBehaviorGrade">
          <!-- 第一行 -->
          <div class="Growth-functionBar">
            <div class="Growth-buttonCotainer">
              <el-button type="success">批量发送培养建议</el-button>
              <el-button type="primary">批量编辑培养建议</el-button>
            </div>

            <div class="Growth-selectCotainer">
              <el-select
                class="Growth-SelectYear"
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
                class="Growth-SelectClass"
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
                class="Growth-InputID"
                v-model="inputID"
                placeholder="学号"
              >
              </el-input>
              <el-input
                class="Growth-InputName"
                v-model="inputName"
                placeholder="姓名"
              >
              </el-input>
              <el-button class="Growth-SearchButton" type="primary"
                >搜索</el-button
              >
            </div>
          </div>

          <!-- 第二行 表格 -->
          <div class="Growth-dataTab">
            <el-table :data="calTableDataDaily" border style="width: 100%">
              <el-table-column
                type="selection"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                align="center"
              ></el-table-column>
              <el-table-column prop="stdID" label="学号" align="center">
              </el-table-column>
              <el-table-column prop="year" label="入学年份" align="center">
              </el-table-column>
              <el-table-column
                prop="class"
                label="班级"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="trainAdvice"
                label="培养建议"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="updateTime"
                label="更新时间"
                align="center"
              ></el-table-column>
              <el-table-column prop="operation" label="操作" align="center">
                <el-button type="primary">编辑</el-button>
              </el-table-column>
            </el-table>
          </div>

          <!-- 第三行 分页 -->
          <div class="Growth-tableTag">
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
        <el-tab-pane label="成长数据" name="midGrade">
          <!-- 第二行 -->
          <div class="Growth-functionBar">
            <div class="Growth-buttonCotainer">
              <el-button type="success">批量发送成长通知</el-button>
              <el-button type="primary">批量设置重点关注</el-button>
              <el-button type="primary">批量编辑成长通知</el-button>
            </div>

            <div class="Growth-selectCotainer">
              <el-input
                v-model="inputID"
                placeholder="学号"
                class="Growth-InputID"
              ></el-input>

              <el-input
                v-model="inputName"
                placeholder="姓名"
                class="Growth-InputName"
              ></el-input>

              <el-input
                v-model="inputClass"
                placeholder="班级"
                class="Growth-InputClass"
              ></el-input>

              <el-select
                v-model="valueOfAttention"
                placeholder="是否重点关注"
                class="Growth-SelectAttention"
              >
                <el-option
                  v-for="item in optionsOfAttention"
                  :key="item.valueOfAttention"
                  :label="item.label"
                  :value="item.valueOfAttention"
                >
                </el-option>
              </el-select>

              <el-button type="primary" class="Growth-SearchButton"
                >搜索</el-button
              >
            </div>
          </div>

          <!-- 第三行 -->
          <div class="Growth-tabBar">
            <el-button type="success">发送重点关注通知</el-button>
            <el-button type="primary">批量取消重点关注</el-button>
          </div>

          <!-- 第四行 表格 -->
          <div class="Growth-dataTab">
            <el-table :data="calTableDataMid" border style="width: 100%">
              <el-table-column
                type="selection"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                align="center"
              ></el-table-column>
              <el-table-column prop="stdID" label="学号" align="center">
              </el-table-column>
              <el-table-column prop="year" label="入学年份" align="center">
              </el-table-column>
              <el-table-column
                prop="class"
                label="班级"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="trainAdvice"
                label="培养建议"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="updateTime"
                label="更新时间"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="Attention"
                label="是否重点关注"
                align="center"
              ></el-table-column>
              <el-table-column prop="operation" label="操作" align="center">
                <el-button type="primary">编辑</el-button>
              </el-table-column>
            </el-table>
          </div>
          <!-- 第五行 分页 -->
          <div class="Growth-tableTag">
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

        <el-tab-pane label="获奖情况" name="finalGrade">
          <!-- 第一行 按钮 -->
          <div class="Growth-functionBar">
            <div class="Growth-buttonCotainer-award"></div>
            <div class="Growth-selectCotainer-award">
              <el-select
                v-model="valueOfYear"
                placeholder="入学年份"
                class="Growth-SelectYear"
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
                class="Growth-SelectClass"
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
                v-model="inputID"
                placeholder="学号"
                class="Growth-InputID"
              ></el-input>
              <el-input
                v-model="inputName"
                placeholder="姓名"
                class="Growth-InputName"
              ></el-input>
              <el-select
                v-model="valueOfAward"
                placeholder="获奖情况"
                class="Growth-SelectAward"
              >
                <el-option
                  v-for="item in optionsOfAward"
                  :key="item.valueOfAward"
                  :label="item.label"
                  :value="item.valueOfAward"
                >
                </el-option>
              </el-select>

              <el-button type="primary" class="Growth-SearchButton"
                >搜索</el-button
              >
            </div>
          </div>
          <!-- 第二行 表格 -->
          <div class="Growth-dataTab">
            <el-table :data="tableDataOfFinal" border style="width: 100%">
              <el-table-column
                type="selection"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                align="center"
              ></el-table-column>
              <el-table-column prop="stdID" label="学号" align="center">
              </el-table-column>
              <el-table-column prop="year" label="入学年份" align="center">
              </el-table-column>
              <el-table-column
                prop="class"
                label="班级"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="Award"
                label="获奖情况"
                align="center"
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
          <div class="Growth-tableTag">
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

<script>export default {
  data() {
    return {
      activeName: "dailyBehaviorGrade",
      optionsOfAward: [
        {
          valueOfAward: "选项1",
          label: "有获奖",
        },
        {
          valueOfAward: "选项2",
          label: "无获奖",
        },
      ],
      valueOfAward: "",
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
      optionsOfAttention: [
        {
          valueOfAttention: "选项1",
          label: "是",
        },
        {
          valueOfAttention: "选项2",
          label: "否",
        },
      ],
      valueOfAttention: "",
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
          trainAdvice: "创新和意识能力：xxx",
          updateTime: "2021-07-21 13:14",
        },
        {
          stdID: "19251210xx",
          name: "xjc",
          year: "2020",
          class: "19软1",
          trainAdvice: "创新和意识能力：xxx",
          updateTime: "2021-07-21 13:14",
        },
      ],

      currentPageMid: 1,
      pagesizeMid: 20,
      tableDataOfMid: [
        {
          name: "xd",
          stdID: "19251210xx",
          year: "2020",
          class: "19软1",
          trainAdvice: "创新和意识能力：xxx",
          updateTime: "2021-07-21 13:14",
          Attention: "是",
        },
        {
          name: "xd",
          stdID: "19251210xx",
          year: "2020",
          class: "19软1",
          trainAdvice: "创新和意识能力：xxx",
          updateTime: "2021-07-21 13:14",
          Attention: "否",
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
          Award: "有获奖",
          updateTime: "2021-07-21 13:14",
        },
        {
          stdID: "19251210xx",
          name: "xd",
          year: "2020",
          class: "19软1",
          Award: "无获奖",
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
.Growth-buttonCotainer {
  flex: 5;
}
.Growth-selectCotainer {
  flex: 5;
  display: flex;
  justify-content: space-between;
}

.Growth-buttonCotainer-award {
  flex: 4;
}
.Growth-selectCotainer-award {
  flex: 6;
  display: flex;
  justify-content: space-between;
}

.Growth-SelectTerm {
  width: 170px;
}
.Growth-SelectYear {
  width: 130px;
}
.Growth-SelectClass {
  width: 130px;
}
.Growth-SelectAttention {
  width: 130px;
}
.Growth-SelectAward {
  width: 110px;
}
.Growth-InputID {
  width: 110px;
}
.Growth-InputName {
  width: 110px;
}
.Growth-InputClass {
  width: 110px;
}
</style>
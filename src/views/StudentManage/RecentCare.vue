<template>
  <div>
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">学生近况与关怀</span>
    </div>
    <div class="tabBar">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="学生近况" name="studentRecent">
          <div class="functionBarInTab">
            <el-button type="success">批量发送学生近况</el-button>
            <el-button type="primary">批量生成学生近况</el-button>
            <el-select
              v-model="enrolYear"
              placeholder="入学年份"
              class="select"
            >
              <el-option
                v-for="item in optionsOfYear"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select v-model="studentClass" placeholder="班级" class="select">
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
              class="input"
            ></el-input>
            <el-input
              v-model="inputName"
              placeholder="姓名"
              class="input"
            ></el-input>
            <el-button type="primary">搜索</el-button>
          </div>
          <div class="dataTable">
            <el-table
              :data="calRecentTableData"
              border
              style="width: 100%"
              ref="multipleTable"
            >
              <el-table-column
                type="selection"
                align="center"
              ></el-table-column>
              <el-table-column prop="stdName" label="姓名" align="center">
              </el-table-column>
              <el-table-column prop="stdSchoolID" label="学号" align="center">
              </el-table-column>
              <el-table-column prop="stdYear" label="入学年份" align="center">
              </el-table-column>
              <el-table-column prop="stdClass" label="班级" align="center">
              </el-table-column>
              <el-table-column prop="stdRecent" label="学生近况" align="center">
              </el-table-column>
              <el-table-column
                prop="updateTime"
                label="更新时间"
                align="center"
              >
              </el-table-column>
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
              :total="tableRecentData.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="学生关怀" name="studentCare">
          <div class="functionBar">
            <el-button type="success">批量发送学生关怀</el-button>
            <el-button type="primary">批量生成学生关怀</el-button>
            <el-select
              v-model="enrolYear"
              placeholder="入学年份"
              class="select"
            >
              <el-option
                v-for="item in optionsOfYear"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select v-model="studentClass" placeholder="班级" class="select">
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
              class="input"
            ></el-input>
            <el-input
              v-model="inputName"
              placeholder="姓名"
              class="input"
            ></el-input>
            <el-button type="primary">搜索</el-button>
          </div>
          <div class="dataTable">
            <el-table
              :data="calCareTableData"
              border
              style="width: 100%"
              ref="multipleTable"
            >
              <el-table-column
                type="selection"
                align="center"
              ></el-table-column>
              <el-table-column prop="stdName" label="姓名" align="center">
              </el-table-column>
              <el-table-column prop="stdSchoolID" label="学号" align="center">
              </el-table-column>
              <el-table-column prop="stdYear" label="入学年份" align="center">
              </el-table-column>
              <el-table-column prop="stdClass" label="班级" align="center">
              </el-table-column>
              <el-table-column prop="stdRecent" label="学生近况" align="center">
              </el-table-column>
              <el-table-column
                prop="updateTime"
                label="更新时间"
                align="center"
              >
              </el-table-column>
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
              :total="tableCareData.length"
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
  name: "RecentCare",
  data() {
      return {
        activeName: 'studentRecent',
        inputID:'',
        inputName:'',
        enrolYear:'',
        studentClass:'',
        optionsOfYear: [{
          value: '选项1',
          label: '2020'
        }, {
          value: '选项2',
          label: '2019'
        }, {
          value: '选项3',
          label: '2018'
        }],
        optionsOfClass: [{
          value: '选项1',
          label: '2019级软件工程1班'
        }, {
          value: '选项2',
          label: '2019级软件工程2班'
        }, {
          value: '选项3',
          label: '2019级软件工程3班'
        }],
         currentPage: 1,
      pagesize: 20,
      tableRecentData: [
        {
          stdSchoolID: "19251210xx",
          stdName: "xd",
          stdYear: "2019",
          stdClass: "2019级软件工程1班",
          stdRecent: "1.创新意识和能力：xxx；2.专业意识和能力：xxxx",
          updateTime: "2021-7-19 17:20",
        },
        {
          stdSchoolID: "19251210xx",
          stdName: "xd",
          stdYear: "2019",
          stdClass: "2019级软件工程1班",
          stdRecent: "1.创新意识和能力：xxx；2.专业意识和能力：xxxx",
          updateTime: "2021-7-19 17:20",
        },
      ],
      tableCareData:[
        {
          stdSchoolID: "19251210xx",
          stdName: "xd",
          stdYear: "2019",
          stdClass: "2019级软件工程1班",
          stdRecent: "1.创新意识和能力：xxx；2.专业意识和能力：xxxx",
          updateTime: "2021-7-19 17:20",
        },
      ]
      };
    },
    computed: {
      calRecentTableData: function() {
        return this.tableRecentData.slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        );
      },
      calCareTableData: function() {
        return this.tableCareData.slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        );
      },
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
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
      handleSizeChange(){

      },
      handleCurrentChange(){

      }
    }
};
</script>

<style>
.StudentAndParent-functionBar {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
}
.StudentAndParent-selectCotainer {
  display: flex;
}
.StudentAndParent-SelectCommittee {
  width: 170px;
}
.StudentAndParent-SelectAbled {
  width: 130px;
}
.StudentAndParent-InputID {
  width: 110px;
}
.StudentAndParent-InputName {
  width: 110px;
}
</style>

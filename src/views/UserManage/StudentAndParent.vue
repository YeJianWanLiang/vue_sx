<template>
<!-- todo 缺了一条button -->
  <div>
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">学生和家长管理</span>
    </div>
    <div class="tabBar">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="学生" name="student">
          <div class="functionBarInTab">
            <el-input
              class="StudentAndParent-InputID"
              v-model="inputID"
              placeholder="用户名"
            ></el-input>
            <el-input
              class="StudentAndParent-InputName"
              v-model="inputName"
              placeholder="姓名"
            ></el-input>
            <div class="StudentAndParent-selectCotainer">
              <el-select
                class="StudentAndParent-SelectCommittee"
                v-model="valueOfCommittee"
                placeholder="是否担任班委"
              >
                <el-option
                  v-for="item in optionsOfCommittee"
                  :key="item.valueOfCommittee"
                  :label="item.label"
                  :value="item.valueOfCommittee"
                >
                </el-option>
              </el-select>
              <el-select
                class="StudentAndParent-SelectAbled"
                v-model="valueOfAbled"
                placeholder="是否启用"
              >
                <el-option
                  v-for="item in optionsOfAbled"
                  :key="item.valueOfAbled"
                  :label="item.label"
                  :value="item.valueOfAbled"
                >
                </el-option>
              </el-select>
              <el-button class="StudentAndParent-SearchButton" type="primary"
                >搜索</el-button
              >
            </div>
          </div>
          <div class="dataTable">
            <el-table :data="calTableDataStudent" border style="width: 100%">
              <el-table-column prop="id" label="用户名" align="center">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="isCommittee"
                label="是否担任班委"
                align="center"
              >
                <el-switch
                  v-model="valueOfSwitchCommittee"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </el-table-column>
              <el-table-column
                prop="updateTime"
                label="更新时间"
                align="center"
              ></el-table-column>
              <el-table-column prop="isAbled" label="是否启用" align="center">
                <el-switch
                  v-model="valueOfSwitchAbled"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </el-table-column>
              <el-table-column prop="operation" label="操作" align="center">
                <el-button type="primary">重置密码</el-button>
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
              :total="tableDataOfStudent.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="家长" name="parent">
          <div class="StudentAndParent-functionBar">
            <el-input
              class="StudentAndParent-InputID"
              v-model="inputID"
              placeholder="用户名"
            ></el-input>
            <el-input
              class="StudentAndParent-InputName"
              v-model="inputName"
              placeholder="孩子姓名"
            ></el-input>
            <div class="StudentAndParent-selectCotainer">
              <el-select
                class="StudentAndParent-SelectAbled"
                v-model="valueOfAbled"
                placeholder="是否启用"
              >
                <el-option
                  v-for="item in optionsOfAbled"
                  :key="item.valueOfAbled"
                  :label="item.label"
                  :value="item.valueOfAbled"
                >
                </el-option>
              </el-select>
              <el-button class="StudentAndParent-SearchButton" type="primary"
                >搜索</el-button
              >
            </div>
          </div>
          <div class="dataTable">
            <el-table :data="calTableDataParent" border style="width: 100%">
              <el-table-column prop="id" label="用户名" align="center">
              </el-table-column>
              <el-table-column
                prop="name"
                label="孩子姓名"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="CreateTime"
                label="创建时间"
                align="center"
              ></el-table-column>
              <el-table-column prop="isAbled" label="是否启用" align="center">
                <el-switch
                  v-model="valueOfSwitchAbled"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </el-table-column>
              <el-table-column prop="operation" label="操作" align="center">
                <el-button type="primary">重置密码</el-button>
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
              :total="tableDataOfStudent.length"
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
  name: "StudentAndParent",
  data() {
    return {
      activeName: "student",
      optionsOfCommittee: [
        {
          valueOfCommittee: "选项1",
          label: "是",
        },
        {
          valueOfCommittee: "选项2",
          label: "否",
        },
      ],
      valueOfCommittee: "",

      optionsOfAbled: [
        {
          valueOfAbled: "选项1",
          label: "是",
        },
        {
          valueOfAbled: "选项2",
          label: "否",
        },
      ],
      valueOfAbled: "",

      currentPageStudent: 1,
      pagesizeStudent: 20,
      tableDataOfStudent: [
        {
          id: "20001",
          name: "xd",
          updateTime: "2021-07-21 13:14",
        },
        {
          id: "20002",
          name: "xjc",
          updateTime: "2021-07-21 13:14",
        },
      ],

      currentPageParent: 1,
      pagesizeParent: 20,
      tableDataOfParent: [
        {
          id: "p20001",
          name: "xd",
          CreateTime: "2021-07-21 13:14",
        },
        {
          id: "p20002",
          name: "xjc",
          CreateTime: "2021-07-21 13:14",
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
    calTableDataStudent: function() {
      return this.tableDataOfStudent.slice(
        (this.currentPageStudent - 1) * this.pagesizeStudent,
        this.currentPageStudent * this.pagesizeStudent
      );
    },
    calTableDataParent: function() {
      return this.tableDataOfParent.slice(
        (this.currentPageParent - 1) * this.pagesizeParent,
        this.currentPageParent * this.pagesizeParent
      );
    },
  },
};
</script>

<style>

</style>

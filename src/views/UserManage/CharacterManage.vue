<template>
  <div>
    <div class="headerText">
      <span style="font-weight: bold; color: #777777">角色管理</span>
    </div>

    <div class="functionBar">
      <el-button type="primary" @click="addDialogVisible = true"
        >新增</el-button
      >

      <div class="CharacterManage-selectCotainer">
        <el-input
          class="CharacterManage-inputcharacterName"
          v-model="inputcharacterName"
          placeholder="角色名称"
          style="width: 10%"
        ></el-input>
        <el-select
          class="CharacterManage-selectEnabled"
          v-model="valueOfEnabled"
          placeholder="是否启用"
        >
          <el-option
            v-for="item in optionsOfEnabled"
            :key="item.valueOfEnabled"
            :label="item.label"
            :value="item.valueOfEnabled"
          >
          </el-option>
        </el-select>
        <el-button type="primary">搜索</el-button>
      </div>
    </div>

    <div class="dataTable">
      <el-table :data="calTableData" border style="width: 100%">
        <el-table-column prop="characterName" label="角色名称" align="center">
        </el-table-column>
        <el-table-column prop="builtIn" label="是否内置" align="center">
        </el-table-column>
        <el-table-column prop="description" label="描述" align="center">
        </el-table-column>
        <el-table-column prop="updateTime" label="更新时间" align="center">
        </el-table-column>
        <el-table-column prop="enabled" label="是否启用" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.switchEnabled"
              active-color="#13ce66"
              inactive-color="#CCCCCC"
              :active-value="1"
              :inactive-value="0"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.builtIn === '否'"
              >编辑</el-button
            >
            <el-button type="danger" v-if="scope.row.builtIn === '否'"
              >删除</el-button
            >
          </template>
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

    <!-- dialog -->
    <!-- todo内容主体区域 -->
    <el-dialog title="新增角色" :visible.sync="addDialogVisible" width="50%">
      <el-form
        :model="addForm"
        :rules="addFormRules"
        ref="addFormRef"
        label-width="100px"
      >
        <el-form-item label="角色名称" prop="characterName">
          <el-input
            v-model="addForm.characterName"
            label="请输入角色名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="description">
          <el-input type="textarea" v-model="addForm.desc"
            >请输入角色描述</el-input
          >
        </el-form-item>
        <el-form-item label="管辖范围" prop="jurisdiction">
          <div class="block">
            <span class="jurisdiction"></span>
            <el-cascader
              v-model="value"
              :options="options"
              :props="{ expandTrigger: 'hover' }"
              @change="handleChange"
            ></el-cascader>
          </div>
        </el-form-item>
        <el-form-item label="菜单权限" prop="menuPermissions">
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[1]"
            :default-checked-keys="[1, 2, 3, 4, 5, 6, 7]"
            :props="defaultProps"
          >
          </el-tree>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addDialogVisible = false"
          >提 交</el-button
        >
        <el-button @click="addDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "CharacterManage",
  data() {
    return {
      data: [
        {
          id: 1,
          label: "数据采集",
          children: [
            {
              id: 3,
              label: "入学基础数据",
            },
            {
              id: 4,
              label: "上课签到统计",
            },
            {
              id: 5,
              label: "成绩统计数据",
            },
            {
              id: 6,
              label: "社团活动追踪",
            },
            {
              id: 7,
              label: "小问卷调查",
            },
          ],
        },
        {
          id: 2,
          label: "学生画像分析",
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      value: [],
      options: [
        {
          value: "allStudents",
          label: "全校学生",
        },
        {
          value: "designatedGrade",
          label: "指定年级",
          children: [
            {
              value: "2018",
              label: "2018级",
            },
            {
              value: "2019",
              label: "2019级",
            },
            {
              value: "2020",
              label: "2020级",
            },
            {
              value: "2021",
              label: "2021级",
            },
          ],
        },
        {
          value: "designatedClass",
          label: "指定班级",
          children: [
            {
              value: "18Computer1",
              label: "18计算机1班",
            },
            {
              value: "18Computer2",
              label: "18计算机2班",
            },
            {
              value: "19Computer1",
              label: "19计算机1班",
            },
            {
              value: "19Computer2",
              label: "19计算机2班",
            },
          ],
        },
      ],

      inputcharacterName: "",
      optionsOfEnabled: [
        {
          valueOfEnabled: "选项1",
          label: "是",
        },
        {
          valueOfEnabled: "选项2",
          label: "否",
        },
      ],
      valueOfEnabled: "",

      currentPage: 1,
      pagesize: 20,
      tableData: [
        {
          characterName: "班委",
          builtIn: "否",
          description: "自定义权限",
          updateTime: "2020-01-04 11:00",
          switchEnabled: 0,
        },
        {
          characterName: "自定义角色1",
          builtIn: "否",
          description: "自定义权限",
          updateTime: "2020-01-04 11:00",
          switchEnabled: 0,
        },
        {
          characterName: "老师",
          builtIn: "是",
          description: "老师默认权限",
          updateTime: "2020-01-04 11:00",
          switchEnabled: 1,
        },
        {
          characterName: "超级管理员",
          builtIn: "是",
          description: "拥有全部权限",
          updateTime: "2020-01-04 11:00",
          switchEnabled: 1,
        },
      ],
      addDialogVisible: false,
      addForm: {
        CharacterName: "",
      },
      addFormRules: {
        characterName: [
          {
            required: true,
            message: "请输入角色名称",
            trigger: "blur",
          },
        ],
        description: [
          {
            required: true,
            message: "请输入角色描述",
            trigger: "blur",
          },
        ],
        menuPermissions: [
          {
            required: true,
            message: "请选择菜单权限",
            trigger: "blur",
          },
        ],
      },
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
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.CharacterManage-selectCotainer {
  flex: 7;
  display: flex;
  justify-content: flex-end;
}
.CharacterManage-selectEnabled {
  margin-right: 2%;
  width: 150px;
}
.CharacterManage-inputcharacterName {
  flex: 2;
  max-width: 10%;
  margin-right: 2%;
}
</style>

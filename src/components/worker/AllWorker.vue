<template>
  <div class="all-worker" v-loading="loading">
    <div class="formOpero">
      <v-search @getList="getList"></v-search>
      <div class="admin-btn">
          <el-button size="mini" type="success" @click="addWorker">添加</el-button>
        <el-button size="mini" v-show="remark.length" type="warning" @click="onDelete">删除</el-button>
      </div>
    </div>
    <el-table
    ref="multipleTable"
    border
    :data="tableList"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="avatar"
      label="头像"
      width="90">
      <template slot-scope="scope">
        <div class="img-wrap" v-show="scope.row.avatar">
          <img :src="scope.row.avatar" width="24" height="24" alt="avatar">
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄"
      width="90">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="90">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="电话"
      width="200">
    </el-table-column>
    <el-table-column
      prop="email"
      label="Email"
      width="200">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-dropdown placement="bottom-start">
          <span class="el-dropdown-link">
          <i class="el-icon-edit-outline"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="editWorker(scope.row.id)">编辑</el-dropdown-item>
          <el-dropdown-item @click.native="deleteWorker(scope.row.id)">删除</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>   
       </template>  
    </el-table-column>
  </el-table>
  <v-dialog ref="dialog" :workerInfo="workerInfo" @saveEditor="saveEditor"></v-dialog>      
  </div>
</template>

<script>
import { workerData } from "../../mock/data";
import dialog from "./Dialog";
import search from "./Search";
export default {
  data() {
    return {
      apiList: [],
      loading: true,
      tableList: [],
      workerInfo: {},
      remark: []
    };
  },
  components: {
    "v-dialog": dialog,
    "v-search": search
  },
  watch: {
    $route() {
      //发生后台处理结果
      //模拟
      let name = this.$route.query.name;
      let phone = this.$route.query.phone;
      let result = this.apiList.filter(item => {
        return (
          item.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
          item.phone.indexOf(phone) > -1
        );
      });
      this.tableList = [...result];
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$http.get("api/workerData").then(res => {
        this.apiList = res.data.data;
        this.tableList = [...this.apiList];
        this.loading = false;
      });
    },
    onDelete() {
      if (this.remark.length) {
        this.remark = this.remark.sort(function(a, b) {
          return a < b ? 1 : -1;
        });
        this.remark.map(item => {
          this.tableList.splice(item, 1);
        });
        this.$message({
          message: "删除成功",
          type: "success"
        });
      }
    },
    handleSelectionChange(sItem) {
      this.remark = [];
      let current = -1;
      sItem.map(item => {
        current = this.tableList.indexOf(item);
        this.remark.push(current);
      });
    },
    addWorker() {
      this.$refs.dialog.clearValidate();
      this.$refs.dialog.showDialog();
    },
    editWorker(id) {
      let worker = this.tableList.filter(item => item.id === id);
      this.workerInfo = { ...worker[0] };
      this.$refs.dialog.showDialog();
    },
    saveEditor(id) {
      if (id) {
        //修改用户信息
        let current = this.tableList.findIndex(item => {
          return item.id === id;
        });
        this.$set(this.tableList, current, this.workerInfo);
      } else {
        //添加新用户
        //后台请求
        //模拟添加
        if (name) {
          this.tableList.unshift(this.workerInfo);
        }
      }
      this.$refs.dialog.clearValidate();
      this.$refs.dialog.hideDialog();
      this.$message({
        message: "修改成功",
        type: "success"
      });
      this.workerInfo = {};
    },
    deleteWorker(id) {
      //上传后台并修改成功后
      //模拟刷新数据
      let current = this.tableList.findIndex(item => item.id === id);
      this.tableList.splice(current, 1);
      this.$message({
        message: "删除成功",
        type: "success"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.all-worker {
  padding: 20px;
  background: #fff;
  .admin-btn{
    display: inline-block;
    margin-bottom: 20px; 
  }
  .img-wrap {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
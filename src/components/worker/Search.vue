<template>
  <div class="search">
    <el-form :inline="true" size="mini" :model="searchForm" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="searchForm.user" @keydown.13.native="onSearch" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="号码">
        <el-input v-model.number="searchForm.phone" @keydown.13.native="onSearch"  placeholder="号码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        user: "",
        phone: ""
      }
    };
  },
  methods: {
    onSearch() {
      let user = this.searchForm.user;
      let phone = this.searchForm.phone;
      if (user || phone) {
        this.$router.push({
          path: "/home/worker/allWorker",
          query: {
            name: user,
            phone: phone
          }
        });
      }
    },
    onReset() {
      this.$emit("getList");
    }
  }
};
</script>

<style lang="scss">
.search {
  display: inline-block;
  vertical-align: top;
}
</style>


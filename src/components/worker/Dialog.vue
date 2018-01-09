<template>
   <el-dialog
    title="编辑"
    :visible.sync="dialogVisible"
    width="50%">
    <el-form :model="workerInfo" ref="workerInfoForm" label-width="60px" class="demo-dynamic">
      <el-form-item
        prop="name"
        label="姓名"
        :rules="[
          { required: true, message: '请输入姓名', trigger: 'blur change' }
        ]"
      >
        <el-input v-model="workerInfo.name"></el-input>
      </el-form-item>
      <el-form-item
        prop="sex"
        label="性别"
        :rules="[
          { required: true, message: '请选择性别', trigger: 'blur' }
        ]"
      >
        <el-radio v-model="workerInfo.sex" label="男">男</el-radio>
        <el-radio v-model="workerInfo.sex" label="女">女</el-radio>
      </el-form-item>
      <el-form-item
        prop="age"
        label="年龄"
        :rules="[
          { required: true, message: '请输入年龄', trigger: 'blur change' },
          { type: 'number', message: '年龄必须为数字值'}
        ]"
      >
        <el-input type="age" v-model.number="workerInfo.age"></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur change' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur change' }
        ]"
      >
        <el-input v-model="workerInfo.email"></el-input>
      </el-form-item>
      <el-form-item
        prop="phone"
        label="电话"
        :rules="[
          { required: true, message: '请输入号码', trigger: 'blur change' },
          { validator: validatePhone, trigger: 'blur change' }
        ]"
      >
        <el-input v-model="workerInfo.phone"></el-input>
      </el-form-item>
      <el-form-item
        prop="address"
        label="地址"
        :rules="[
          { required: true, message: '请输入地址', trigger: 'blur change' }
        ]"
      >
        <el-input v-model="workerInfo.address"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="hideDialog">取 消</el-button>
      <el-button type="primary" @click="handleSubmit(workerInfo.id)">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    workerInfo: {
      type: Object
    }
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleSubmit(id) {
      this.$refs.workerInfoForm.validate(valid => {
        if (valid) {
          this.$emit("saveEditor", id);
        } else {
          return false;
        }
      });
    },
    validatePhone(rule, value, callback) {
      var regdex = /^1[385][1-9]\d{8}/;
      if (!regdex.test(value)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    },
    clearValidate() {
      if (this.$refs.workerInfoForm) {
        this.$refs.workerInfoForm.clearValidate();
      }
    },
    resetFields() {
      if (this.$refs.workerInfoForm) {
        this.$refs.workerInfoForm.resetFields();
      }
    },
    hideDialog() {
      this.dialogVisible = false;
    },
    showDialog() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style  lang="scss">

</style>


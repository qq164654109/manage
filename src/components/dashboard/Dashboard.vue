<template>
    <div class="dashboard" v-loading="loading">
        <div class="card-group">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="6" class="card">
                    <card :num="cardData.trade" :text="'trade'"></card>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6" class="card">
                    <card :num="cardData.custormos" :text="'custormos'"></card>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6" class="card">
                    <card :num="cardData.comment" :text="'comment'"></card>
                </el-col>
                <el-col :xs="24" :sm="12" :md="6" class="card">
                    <card :num="cardData.referral" :text="'referral'"></card>
                </el-col>
            </el-row>
        </div>
        <section class="s1">
            <el-row :gutter="20" class="s2">
                <el-col :xs="24" :sm="24" :md="14">
                    <yearlySales :lineData="lineData"></yearlySales>
                </el-col>
                <el-col :xs="24" :sm="24" :md="10">
                    <assign :circleData="circleData"></assign>
                </el-col>
            </el-row>
        </section>
        <section class="s2">
            <el-row :gutter="20" class="s2">
                <el-col :xs="24" :sm="24" :md="12">
                    <userList :userData="userData"></userList>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12">
                    <comment :commentData="commentData"></comment>
                </el-col>
            </el-row>
        </section>
    </div>
</template>

<script>
import card from "./Card";
import yearlySales from "./YearlySales";
import { mainData } from "../../mock/data";
import userList from "./UserList";
import comment from "./Comment";
import assign from "./Assign";
export default {
  data() {
    return {
      loading: true,
      cardData: {},
      lineData: {
        axisX: [],
        food: [],
        clothes: [],
        electronics: []
      },
      circleData: {},
      commentData: [],
      userData: []
    };
  },
  components: {
    card,
    yearlySales,
    userList,
    comment,
    assign
  },
  created() {
    this.$http.get("api/mainData").then(res => {
      this.cardData = res.data.cardData;
      this.circleData = res.data.circleData;
      this.commentData = res.data.commentData;
      this.userData = res.data.userData;
      let olineData = res.data.lineData;
      olineData.map(item => {
        this.lineData.axisX.push(item.name);
        this.lineData.food.push(item.food);
        this.lineData.clothes.push(item.clothes);
        this.lineData.electronics.push(item.electronics);
      });
      this.loading = false;
    });
  }
};
</script>

<style scoped lang="scss">
.s1,
.s2 {
  margin-bottom: 20px;
}
</style>
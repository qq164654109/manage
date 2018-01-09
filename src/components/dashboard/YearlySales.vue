<template>
    <div class="yearlySales">
        <div class="title">年销售</div>
        <div class="chart">
            <v-line :lineData="lineData"></v-line>
        </div>
    </div>
</template>

<script>
import line from "../charts/Line";
export default {
  props: ["lineData"],
  components: {
    "v-line": line
  }
};
</script>

<style scoped lang="scss">
.yearlySales {
  background-color: #fff;
  border-radius: 4px;
  .title {
    padding: 20px;
  }
}
</style>
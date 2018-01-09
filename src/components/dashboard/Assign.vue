<template>
    <div class="assign">
        <v-circle :circleData="circleData"></v-circle>
    </div>
</template>

<script>
import circle from "../charts/Circle";
export default {
  props: ["circleData"],
  components: {
    "v-circle": circle
  }
};
</script>

<style scoped lang="scss">
.assign {
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
}
</style>
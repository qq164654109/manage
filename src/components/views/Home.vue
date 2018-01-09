<template>
    <div class="home">
        <header class="header-wrap">
            <div class="logo">
                <img src="../../assets/logo.png" width="35" height="35" alt="logo">
            </div>
            <div class="user">
                {{username}}
            </div>
        </header>
        <aside class="side-wrap">
            <sider></sider>
        </aside>
        <div class="contianer">
            <div class="main clearfix">
                <router-view></router-view>
            </div>
            <v-footer></v-footer>
        </div>
    </div>
</template>

<script>
import store from "../../store";
import sider from "./Sider";
import footer from "./footer";
export default {
  name: "Home",
  components: {
    sider,
    "v-footer": footer
  },
  computed: {
    username() {
      return this.$store.state.userInfo.username;
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  .header-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    padding: 5px 20px;
    color: #fff;
    background: #409eff;
    .logo {
      float: left;
      width: 160px;
      height: 45px;
      text-align: center;
      padding: 5px 5px;
      animation: move 5s infinite linear;
    }
    @keyframes move {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
    .user {
      float: right;
      height: 45px;
      line-height: 45px;
    }
  }
  .side-wrap {
    position: absolute;
    top: 55px;
    left: 0;
    bottom: 0;
    width: 200px;
    overflow: auto;
  }
  .contianer {
    position: absolute;
    top: 55px;
    left: 200px;
    right: 0;
    bottom: 0;
    overflow: auto;
    .main {
      height: auto;
      min-height: 100%;
      padding: 20px 20px 65px 20px;
      &.clearfix:after {
        content: ".";
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
      }
    }
  }
}
</style>
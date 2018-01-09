<template>
    <div class="sider">
        <el-menu :default-active="onRoutes" unique-opened router>
            <div v-for="(item, index) in sideList" >
                <div v-if="!item.children">
                    <el-menu-item :index="item.path">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </div>
                <div v-else="item.children">
                    <el-submenu :index="item.path">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item :index="sub.path" v-for="(sub, index) in item.children" :key="index">{{sub.name}}</el-menu-item>
                    </el-submenu>
                </div>
            </div>
        </el-menu>
    </div>
</template>

<script>
  import {mapState} from 'vuex';
  import {hasPermission} from "../../utils/common";

  export default {
    name: 'Sider',
    data() {
      return {
        sideList: []
      }
    },
    created() {
      this.authRoutes();
    },
    methods: {
      authRoutes() {
        let routes = this.$router.options.routes[2].children;
        let authRoutes = routes.filter(item => {
          if (hasPermission(this.role, item)) {
            if (item.children && item.children.length > 0) {
              item.children = item.children.filter(child => {
                if (hasPermission(this.role, child)) {
                  return child;
                } else {
                  return false;
                }
              });
              return item;
            } else {
              return item;
            }
          } else {
            return false;
          }
        })
        this.sideList = authRoutes;
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path;
      },
      ...mapState({
        'role': state => state.userInfo.role
      })
    }
  }
</script>

<style scoped lang="scss">
    .sider{
        width: 100%;
        height: 100%;
        background: #fff;
    }
</style>
<template>
  <div class='home'>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
          style='min-height: 100%;overflow: hidden;'
          :default-openeds='["/"]'
        >
          <el-submenu
            v-for="(item,index) in routes"
            :key='index'
            :index='item.path'
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.meta.title}}</span>
            </template>
            <div
              v-for="(item2,index2) in item.children"
              :key='index2'
            >
              <el-menu-item v-if='item2.meta.title !== "webcome"' :index="item2.path"><span>{{item2.meta.title}}</span> </el-menu-item>
            </div>

          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style='height:34px'>
          <TagsView />
        </el-header>
        <el-main>
          <transition
            name="fade-transform"
            mode="out-in"
          >
            <router-view></router-view>

          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TagsView from '@/components/TagsView'
import { routes } from '@/router/routes'
export default {
  components: {
    TagsView
  },
  data () {
    return {
      routes
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
.el-header {
  color: #333;
  padding: 0;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  max-width: 100%;
  padding: 50px;
}

.el-container {
  height: 100%;
  margin-bottom: 40px;
}
</style>

<template>
 
    <!-- default-active:默认选中高亮 -->
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isShow"
    >
      <!-- 子菜单 -->
      <el-submenu index="1">
        <!-- slot指定模板中数据，这里暂时不使用 -->
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>购物商城</span>
        </template>
        <el-menu-item index="1-1">
          <template slot="title">商品管理</template>
        </el-menu-item>

        <el-menu-item index="1-2">
          <template slot="title">栏目管理</template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  
</template>

<script>
export default {
  // 声明可以接收的属性
  props: ["isShow"]
};
</script>

<style>
.el-menu-vertical-demo {
  height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

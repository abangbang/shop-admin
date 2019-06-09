<template>
  <div class="mianbao">
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">购物商城</el-breadcrumb-item> -->
      <el-breadcrumb-item v-for="(item, index) in info" :key="index">
        {{item}}
      </el-breadcrumb-item>
      
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data(){
    return{
      info:[]
    }
  },
  //监听meta信息
  watch:{
    $route(){
      this.getRoute()
    }
  },
  methods:{
    //封装保存meta信息
    getRoute(){
      // console.log(this.$route);
      //获取matched的每一项meta的信息
      const arr = this.$route.matched;
      let info = [];

      arr.forEach(v => {
        info.push(v.meta)
      });
      //因为赋值了给info，那么必须要有一个info来接收
      //所以data里面需要有个info用来存值
      this.info = info;
      // console.log(this.info)
    }
  },
  mounted(){
    //组件加载完获取meta信息
    this.getRoute()
  }
};
</script>

<style>
.mianbao {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
</style>

<template>
  <div id="app">
    <p>index</p>
      <el-button type="success">成功按钮</el-button>
      <p>
        <router-view></router-view>
      </p>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import axios from 'axios';
// import HelloWorld from './components/HelloWorld.vue'

export default {
//   name: 'app',
//   components: {
//     HelloWorld
//   }

  mounted(){
    //请求测试接口
    // const res = axios({
    //   url:'https://api.github.com/',
    //   method:'GET',
    //   //get请求参数
    //   params:{
    //     abc:123
    //   }
    // }).then(res => {
    //   console.log(res);
    // })
    
    this.$axios({
       url:'https://api.github.com/',
      method:'GET',
    }).then(res => {
      console.log(res);
    })
    

  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

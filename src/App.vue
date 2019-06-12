<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {

  mounted(){
  
    this.$axios({
       url:'https://api.github.com/',
      method:'GET',
    }).then(res => {
      // console.log(res);
    })
    

  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  ul,li,ol{
    list-style: none;
  }
  a{
    color: #333
  }
  /*类似span标签*/
  i,em{
    font-style: normal;
  }
</style>

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 /* @import '~@/assets/style/reset.css'; */
 *{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* font-size: 0; */
  font-family: "思源黑体 CN" ;
}
input,textarea{outline: none;}
a{text-decoration: none;}

 html{overflow-x: hidden;height: 100%;font-size: 100px;width: 7.5rem;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  
  overflow: hidden;
  margin: 0 auto;
  width: 7.5rem;
}
</style>

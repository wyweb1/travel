<template>
    <div class="header">
      <div class="header-left"><span class="iconfont">&#xe600;</span></div>
      <div class="header-input" ><span class="iconfont">&#xe65c;</span>搜索你喜欢 </div>
      <div class="header-right"><span class="iconfont">&#xe656;</span></div>
    </div>
</template>
<script>
    export default{
        name:'HomeHeader'
    }
</script>
<style scoped>
    .header{
        height: 0.86rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.3rem;
        color: #232323;
        width: 7.5rem;
        background: rgb(56, 186, 234);
        line-height: 0.86rem;
    }
    .header span{
      font-size: 0.3rem;
    }
    .header-left{
        width: 0.8rem;
        height: 0.86rem;
      
    }
    .header-input{
        width: 3rem;
        height: 100%;
    }
    .header-input span{
        margin-right: 0.2rem;
    }
    .header-right{
        width: 1rem;
        height: 100%;
    }
    
</style>
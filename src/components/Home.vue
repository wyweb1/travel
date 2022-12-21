<template>
    <div class="home">
        <HomeHeader/>
        
    </div>
</template>
<script>
import HomeHeader from './home/components/Header.vue';

    export default{
        name:'Home',
        components:{
            HomeHeader,
        },
    }
</script>
<style scoped >
   .home{
    width: 7.5rem;
   }
</style>
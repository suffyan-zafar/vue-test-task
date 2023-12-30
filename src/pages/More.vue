<template>
   <HeaderComponent></HeaderComponent>
</template>

<script>
import HeaderComponent from '../components/More/header.vue';
    export default {
        name:"more-pcontainerage",
        components:{
            HeaderComponent,
        },
        data (){
            return{
                name:"Suffyan From More"
            }
        }

    }
</script>

<style scoped>
.container{
    display: flex;
    margin-top: 150px;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;
    height: 200px;
    background-color: white;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); 
}
.vector-image{
    width: 75px;
    height: 75px;
    margin-left: 50px;
}

.title{
    color: #2C4277;
    margin-left: 20px;
    margin-bottom: 5px;
    font-weight: 800;
    font-size: 35px;
}

.title2{
    color: #000000;
    margin-left: 20px;
    font-size: 40px;
    font-weight: 400;
}
</style>
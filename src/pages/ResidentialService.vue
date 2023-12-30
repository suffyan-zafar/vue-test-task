<template>
   <div>
    <HeaderComponent></HeaderComponent>
   </div>
</template>

<script>
import HeaderComponent from '../components/ResidentialService/header.vue';
    export default {
        name:"residential-services-page",
        components:{
            HeaderComponent
        },
        data (){
            return{
                name:"Suffyan From DashBoard"
            }
        }

    }
</script>

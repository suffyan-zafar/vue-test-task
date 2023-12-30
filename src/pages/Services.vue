<template>
    <div>
        <HeaderComponent></HeaderComponent>
    </div>
</template>

<script>
import  HeaderComponent from '../components/Services/header.vue';
    export default {
        name:"more-page",
        components:{
            HeaderComponent
        },
        data (){
            return{
                name:"Suffyan From Services"
            }
        }

    }
</script>
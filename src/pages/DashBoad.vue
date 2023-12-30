<template>
    <v-app>
        <Header></Header>

    </v-app>
</template>

<script>
import Header from '../components/DashBoard/header.vue';
    export default {
        name:"dashboad-page",
        components:{
            Header
        },
        data (){
            return{
                name:"Suffyan From DashBoard"
            }
        }

    }
</script>

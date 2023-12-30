<template>
    <div>
     <HeaderComponent></HeaderComponent>
    </div>
 </template>
 
 <script>
 import HeaderComponent from '../components/PetSittingServices/header.vue';
     export default {
         name:"Pet-Sitting-Services-Page",
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
 
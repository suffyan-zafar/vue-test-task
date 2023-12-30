<template>
    <v-card class="container" flat>
        <div>
            <img
            :src="require('../../assets/user_avatar2.svg')"
            alt="vector"
            class="vector-image"
            @click="openInNew"
          />
        </div>
        <div>
            <p class="title">Yves Koulidiati</p>
            <p class="title2">View and edit profile</p>
        </div>
  </v-card>
  <CardComponent></CardComponent>
</template>

<script>
import CardComponent from './card.vue';
    export default {
        name:"More-Header-Component",
        components:{
            CardComponent
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
    margin-top: 120px;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;
    height: 200px;
    background-color: white;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2),
     0px -1px 4px rgba(0, 0, 0, 0.2); ; 
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
<template>
  <v-app>
    <div class="main-box">
      <div class="box1">
        <div class="inner-box1">
          <img
            :src="require('../../assets/Vector.svg')"
            alt="vector"
            class="vector-image"
            @click="openInNew"
          />
        </div>
        <p class="car-title">Car Services</p>
        <p class="car-title2">Residential</p>
      </div>
      <div class="box2">
        <div class="inner-box2">
          <img
            :src="require('../../assets/carousel_icon.svg')"
            alt="vector"
            class="vector-image2"
            @click="openInNew"
          />
        </div>
        <p class="car-title">Valet Parking</p>
        <p class="car-title2">Residential</p>
      </div>
      <div class="box3">
        <div class="inner-box3">
          <img
            :src="require('../../assets/Vector2.svg')"
            alt="vector"
            class="vector-image3"
            @click="openInNew"
          />
        </div>
        <p class="car-title">Pet Services</p>
        <p class="car-title2">Residential</p>
      </div>
    </div>
    <Menu></Menu>
  </v-app>
</template>

<script>
import Menu from './menu.vue';
export default {
    name:"Cards-Component",
    components:{
        Menu
    },
    data (){
        return {
            
        }
    }
}
</script>

<style scoped>
.main-box{
    display: flex;
    justify-content: space-between;
}

.box1{
    width: 88px;
    height: 114px;
    margin-left: 36px;
    background-color: #EA7649;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
}

.inner-box1{
    background-color: rgb(188, 98, 64); 
    width: 54px;
    height: 48px;  
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
}
.vector-image{
    width: 36.55px; 
    height: 28.24px; 
    color: #FFFFFF;
  
}
.car-title{
    font-size: 8px;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 30px;
    text-shadow:2px 2px 4px rgba(0, 0, 0, 0.5) ;
}

.car-title2{
    font-size: 8px;
    font-weight: 700;
    color: lightgray;
    margin-top: -6px;
    text-shadow:2px 3px 2px rgba(0, 0, 0, 0.3) ;
}

.box2{
    width: 88px;
    height: 114px;
    margin-left: 36px;
   
    background-color: #4D3F98;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
}

.inner-box2{
    background-color: rgb(68, 56, 124); 
    width: 54px;
    height: 48px;  
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
}
.vector-image2{
    width: 36.55px; 
    height: 28.24px; 
    color: #FFFFFF;
  
}

.box3{
    width: 88px;
    height: 114px;
    margin-left: 36px;
    margin-right: 30px;
    background-color: #ED3074;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
}

.inner-box3{
    background-color: rgb(190, 45, 96); 
    width: 54px;
    height: 48px;  
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
}
.vector-image3{
    width: 36.55px; 
    height: 28.24px; 
    color: #FFFFFF;
  
}
</style>

<template>
    <v-app>
      <v-card flat class="header">
        <div class="left-section">
          <v-icon @click="goBack">mdi-arrow-left</v-icon>
        </div>
        <div class="center-section">
          <div class="title">Dashboard</div>
        </div>
        <div class="right-section">
          <img :src="require('../../assets/user_avatar.png')" alt="Image" class="append-image" @click="openInNew" />
        </div>
      </v-card>
      <cards/>
    </v-app>
  </template>
  
  <script>
  import cards from './cards.vue';
  
  export default {
    
    name:"Header-Component",
    components:{
      cards
    },
    methods: {
      goBack() {
      
        this.$store.dispatch('getTodos');
        console.log( this.$store.state.counter,"state value")
      },
      openInNew() {
        // Implement your logic to open in new
        console.log('Open in new...');
      },
    },
    created(){
 
      console.log('Going back in created...');

      this.$store.dispatch('getTodos');
    }
  };
  </script>


<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;

}

.left-section{
    color: #2C4277;
    font-weight: 800;
}

.center-section {
  flex-grow: 1;
  text-align: center;
}
.right-section{
    margin-top: 7px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  color: #2C4277;
  margin-left: 15px;
}

.append-image {
  width: 37px; 
  height: 35px; 
  cursor: pointer;
}

</style>
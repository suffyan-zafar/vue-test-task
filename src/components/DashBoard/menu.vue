<template>
    <v-app>
        <v-card flat class="header">
        <div class="left-section" >
            <div class="title" :class="{ 'active': activeSection === 'current' }" @click="setActiveSection('current')" >Current</div>
        </div>
        <div class="center-section" >
          <div class="title" :class="{ 'active': activeSection === 'recent' }"   @click="setActiveSection('recent')">Recent</div>
        </div>
        <div class="right-section">
            <div class="title"  :class="{ 'active': activeSection === 'older' }" @click="setActiveSection('older')">Older</div>
        </div>
      </v-card>
     <BodyComponent></BodyComponent>
    </v-app>
  </template>
  
  <script>
  import BodyComponent from './body.vue';
  export default {
    name:"Menu-Component",
    components:{
        BodyComponent
    },
    data (){
        return {
            activeSection:"current"
        }
    },
    methods: {
      setActiveSection (currentState){
        this.activeSection=currentState
      }
    },
  };
  </script>


<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem;
  overflow: hidden;
}
.left-section,
.center-section,
.right-section {
  display: flex;
  align-items: center;
}
.left-section{
    color: #2C4277;
    font-weight: 800;
    height: '40px'
}

.center-section {
  flex-grow: 1;
  text-align: center;
  justify-content: center;
}
.right-section{
    margin-top: 7px;
    height: '40px'
}
.title {
  font-size: 20px;
  font-weight:normal;
  color: #2C4277;
  margin-left: 15px;
  cursor: pointer;
  width: 85px;
}

.append-image {
  width: 37px; 
  height: 35px; 
  cursor: pointer;
}
.active {
  border-bottom: 4px solid #2C4277; 
}
</style>
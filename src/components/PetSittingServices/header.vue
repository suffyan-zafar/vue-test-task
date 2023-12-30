<template>
    <v-card flat class="header">
      <div class="left-section">
        <v-icon @click="goBack" >mdi-arrow-left</v-icon>
      </div>
      <div class="center-section">
        <div class="title">Pet Sitting Services</div>
      </div>
    </v-card>
    <CardVue></CardVue>
</template>

<script>
import CardVue from "./cards.vue"
export default {
  name:"Header-Pet-Services-Component",
  components:{
    CardVue
  },
  methods: {
    goBack() {
      // Implement your logic to go back
      console.log('Going back...');
    },
    openInNew() {
      // Implement your logic to open in new
      console.log('Open in new...');
    },
  },
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
.title {
font-size: 25px;
font-weight: 800;
color: #2C4277;
}
</style>
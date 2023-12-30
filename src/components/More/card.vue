<template>
  <div style="margin: 5% 7%">
    <div class="container2">
      <div>
        <p class="header">Become a provider</p>
        <p class="header2">
          Join thousands of providers building businesses and earning meaningful
          income on Slidex.
        </p>
        <v-btn
          rounded="xl"
          style="
            background-color: #2c4277;
            font-weight: 700;
            color: white;
            margin-bottom: 20px;
            margin-left: 15px;
          "
        >
          Learn More
        </v-btn>
      </div>
      <!-- <div>
            <img
            :src="require('../../assets/User-img.svg')"
            alt="vector"
            class="vector-image"
            @click="openInNew"
          />
        </div> -->
    </div>
  </div>
  <BodyComponent></BodyComponent>
</template>

<script>
import BodyComponent from "./body.vue";
export default {
  name: "More-Card-Component",
  components: {
    BodyComponent,
  },
  data() {
    return {
      name: "Suffyan From More",
    };
  },
};
</script>

<style scoped>
.container2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  background-color: #f4f4f4;
}

.header {
  font-size: 26px;
  color: #2c4277;
  font-weight: 800;
  margin: 20px;
}
.header2 {
  line-height: 30px;
  margin: 20px;
}
.vector-image {
  width: 100%;
  height: 100%;
  margin-right: 35px;
}
</style>

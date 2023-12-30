<template>
  <div style="margin: 5% 7%">
    <div class="containers">
      <div style="display: flex;margin-bottom: 35px;">
        <img
          :src="require('../../assets/Layer 14.svg')"
          alt="vector"
          class="vector-image"
        />
        <h1 class="title">Account</h1>
      </div>
      <div style="display: flex;margin-bottom: 35px;">
        <img
          :src="require('../../assets/icon5.svg')"
          alt="vector"
          class="vector-image"
        />
        <h1 class="title">How Slidex Works</h1>
      </div>
      <div style="display: flex;margin-bottom: 35px;">
        <img
          :src="require('../../assets/icon6.svg')"
          alt="vector"
          class="vector-image"
        />
        <h1 class="title">Contact Support</h1>
      </div>
      <div style="display: flex;margin-bottom: 35px;">
        <img
          :src="require('../../assets/icon7.svg')"
          alt="vector"
          class="vector-image"
        />
        <h1 class="title">Legal</h1>
      </div>
    </div>
  </div>
  <v-divider></v-divider>
  <div style="display: flex;margin: 35px;">
        <img
          :src="require('../../assets/icon8.svg')"
          alt="vector"
          class="vector-image"
        />
        <h1 class="title">Logout</h1>
      </div>
      <v-divider></v-divider>
</template>

<script>
export default {
  name: "More-Body-Component",
  data() {
    return {
      name: "Suffyan From More",
    };
  },
};
</script>

<style scoped>
.containers {
  display: flex;
  margin-top: 55px;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-align: center;
}
.vector-image {
  width: 45px;
  height: 45px;
}
.title {
  font-size: 30px;
  margin-left: 15px;
  font-weight: 400;
  margin-top: 8px;
}
</style>

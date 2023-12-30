<template>
  <div style="margin: 5% 7%">
    <div class="container2">
      <div>
        <div>
          <img
            :src="require('../../assets/man-h.svg')"
            alt="vector"
            class="vector-image"
            @click="openInNew"
          />
        </div>
        <div style="display: flex; ">
          <p class="header">Residential Services</p>
          <v-btn
            rounded="xl"
            style="
              background-color: #0cad21;
              font-weight: 500;
              color: white;
              margin-top: 12px;
              margin-left: 12px;
            "
          >
            Available
          </v-btn>
        </div>
        <p class="header2">Access Services offered by your residence</p>
            <div style="display: flex;">
              <img
              :src="require('../../assets/location_icon.svg')"
              alt="vector"
              class="vector-image2"
              @click="openInNew"
            />
            <p class="header3">1200 Post Oak Blv.</p>
          </div> 
      </div>
    </div>

    <!-- second -->

    <div class="container2">
      <div>
        <div>
          <img
            :src="require('../../assets/carsService.svg')"
            alt="vector"
            class="vector-imag2"
            @click="openInNew"
          />
        </div>
        <div style="display: flex; ">
          <p class="header-car">Car Services</p>
          <v-btn
            rounded="xl"
            style="
              background-color: #0cad21;
              font-weight: 500;
              color: white;
              margin-top: 12px;
              margin-left: 12px;
            "
          >
            Available
          </v-btn>
        </div>
        <p class="header2">Access Services offered by your residence</p>
            <div style="display: flex;">
              <img
              :src="require('../../assets/location_icon.svg')"
              alt="vector"
              class="vector-image2"
              @click="openInNew"
            />
            <p class="header3">from $15</p>
          </div> 
      </div>
    </div>

    <!-- third -->

    <div class="container2">
      <div>
        <div>
          <img
            :src="require('../../assets/menIcon.svg')"
            alt="vector"
            class="vector-image"
            @click="openInNew"
          />
        </div>
        <div style="display: flex; ">
          <p class="header-pet">Pet Car Services</p>
          <v-btn
            rounded="xl"
            style="
              background-color: #0cad21;
              font-weight: 500;
              color: white;
              margin-top: 12px;
              margin-left: 12px;
            "
          >
            Available
          </v-btn>
        </div>
        <p class="header2">Access Services offered by your residence</p>
            <div style="display: flex;">
              <img
              :src="require('../../assets/location_icon.svg')"
              alt="vector"
              class="vector-image2"
              @click="openInNew"
            />
            <p class="header3">1200 Post Oak Blv.</p>
          </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services-Card-Component",

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
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.header {
  font-size: 18px;
  color: #2c4277;
  font-weight: 800;
  margin-top: 20px;
}
.header-car{
    font-size: 18px;
  color: #2c4277;
  font-weight: 800;
  margin-top: 20px;
  margin-right: 60px;
}
.header-pet{
    font-size: 18px;
  color: #2c4277;
  font-weight: 800;
  margin-top: 20px;
  margin-right: 30px;
}
.header2 {
  width: 60%;
  font-size: 10px;
  margin-bottom: 8px;
}
.vector-image {
  width: 100%;
  height: 100%;
}
.vector-imag2{
    width: 80%;
    height: 80%;
    margin-left: 25px;
}
.vector-image2{
    width: 10px;
    height: 10px;
}
.header3 {
  width: 60%;
  font-size: 10px;
  margin-left: 3px;
  margin-bottom: 10px;
}
</style>

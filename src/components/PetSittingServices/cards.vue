<template>
  <div style="margin: 5% 7%">
    <div class="container2">
      <div style="display: flex; justify-content: space-between">
        <img
          :src="require('../../assets/Company_logo.svg')"
          alt="vector"
          class="vector-image"
          @click="openInNew"
        />
        <div style="margin-top: 50px">
          <p class="header">Urban Pet Sitting</p>
          <p class="header2">Houston TX</p>
          <p class="header3">24 mins away</p>
          <p class="header4">From $25</p>
        </div>
        <div>
          <p style="margin-top: 30px; margin-left: 36px">18.6 mi</p>
          <img
            :src="require('../../assets/stars_rating.svg')"
            alt="vector"
            style="margin-top: 50px; margin-right: 10px"
            @click="openInNew"
          />
          <div
            style="
              width: 60px;
              height: 20px;
              background-color: #fce4ec;
              margin-top: 40px;
              margin-left: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 5px;
            "
          >
            <img
              :src="require('../../assets/tag.svg')"
              alt="vector"
              class="tag-image"
              @click="openInNew"
            />
            <p style="color: #E91E63;font-size: 10px;">15%</p>
          </div>
        </div>
      </div>
    </div>

    <!-- second -->
    <div class="container2">
      <div style="display: flex; justify-content: space-between">
        <img
          :src="require('../../assets/Company_logo.svg')"
          alt="vector"
          class="vector-image"
          @click="openInNew"
        />
        <div style="margin-top: 50px">
          <p class="header">Urban Pet Sitting</p>
          <p class="header2">Houston TX</p>
          <p class="header3">24 mins away</p>
          <p class="header4">From $25</p>
        </div>
        <div>
          <p style="margin-top: 30px; margin-left: 36px">18.6 mi</p>
          <img
            :src="require('../../assets/stars_rating.svg')"
            alt="vector"
            style="margin-top: 50px; margin-right: 10px"
            @click="openInNew"
          />
          <div
            style="
              width: 60px;
              height: 20px;
              background-color: #fce4ec;
              margin-top: 40px;
              margin-left: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 5px;
            "
          >
            <img
              :src="require('../../assets/tag.svg')"
              alt="vector"
              class="tag-image"
              @click="openInNew"
            />
            <p style="color: #E91E63;font-size: 10px;">15%</p>
          </div>
        </div>
      </div>
   
    </div>
  </div>
</template>

<script>
export default {
  name: "PetSiting-Services-Card-Component",

  data() {
    return {};
  },
};
</script>

<style scoped>
.container2 {
  width: auto;
  height: 200px;
  border-radius: 15px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  background-color: white;
}

.header {
  font-size: 20px;
  color: #21437c;
  font-weight: bolder;
}
.header2 {
  font-size: 18px;
  color: black;
}
.header3 {
  font-size: 15px;
  color: #787878;
  font-weight: bolder;
  margin-right: 10px;
  margin-bottom: 6px;
}
.header4 {
  font-size: 15px;
  color: #ed3074;
  font-weight: bolder;
  margin-bottom: 15px;
}
.vector-image {
  width: 200px;
  height: 65px;
  margin-top: 60px;
}
.vector-image2 {
  width: 65px;
  height: 65px;
  margin-top: -20px;
}
.vector-image3 {
  width: 65px;
  height: 65px;
  margin-right: 40px;
  margin-top: 22px;
  margin-left: 30px;
}
.tag-image{
    width: 12px;
    height: 12px;
    margin-right: 7px;
}
</style>

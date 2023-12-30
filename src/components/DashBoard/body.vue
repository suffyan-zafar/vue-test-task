<template>
  <v-app class="container">
    <div class="main">
      <div class="inner-main">
        <div class="inner-main-2">
          <img
            :src="require('../../assets/header_icon.svg')"
            alt="vector"
            class="inner-img"
          />
          <p
            style="
              color: #4d3f98;
              margin-left: 12px;
              font-weight: 700;
              font-size: 18px;
            "
          >
            {{ this.$store.getters.getId }}
          </p>
        </div>
        <div class="inner-main-2">
          <img
            :src="require('../../assets/date_requested_icon.svg')"
            alt="vector"
            class="inner-img"
          />
          <p
            style="
              color: #b0b3c7;
              margin-left: 12px;
              font-weight: 500;
              font-size: 14px;
            "
          >
          {{ this.$store.getters.getTitle }}
          </p>
        </div>
        <div class="inner-main-2">
          <img
            :src="require('../../assets/provider_icon.svg')"
            alt="vector"
            class="inner-img"
          />
          <p
            style="
              color: #b0b3c7;
              margin-left: 12px;
              font-weight: 500;
              font-size: 14px;
            "
          >
          {{ this.$store.getters.getTitle }}
          </p>
        </div>
        <div class="inner-main-2">
          <img
            :src="require('../../assets/subject_icon.svg')"
            alt="vector"
            class="inner-img"
          />
          <img
            :src="require('../../assets/user_avatar.png')"
            alt="vector"
            style="margin-left: 14px; width: 20px; height: 20px"
          />
        </div>
      </div>
      <div>
        <div class="second-main">
          <img
            :src="require('../../assets/Layer_2_16_.svg')"
            alt="vector"
            style="margin-right: 4px; width: 20px; height: 20px"
          />
          <p
            style="
              color: #b0b3c7;
              margin-right: 15px;
              font-weight: 500;
              font-size: 18px;
            "
          >
          {{ this.$store.getters.getCompleted }}
          </p>
        </div>
        <div class="text-center">
          <v-btn
           
            rounded="lg"
            :border="borderStyle"
            prepend-icon="mdi-eye"
            style="color: #4d3f98; font-weight: 700;margin-top: 15px;"
         
            class="outlined"
          >
            <template v-slot:prepend>
              <v-icon color="#4d3f98"></v-icon>
            </template>
            View
          </v-btn>
        </div>
        <p style="color: #DB3E0C; margin-top: 30px;">Action required!!!</p>
      </div>
    </div>

    <!-- second -->

    <div class="main2">
      <div class="inner-main2">
        <div class="inner-main-2b">
          <img
            :src="require('../../assets/GLYPHxOUTLINE.svg')"
            alt="vector"
            class="inner-img2"
          />
          <p
            style="
              color: #ED3074;
              margin-left: 12px;
              font-weight: 700;
              font-size: 18px;
            "
          >
            Pet Sitting Service
          </p>
        </div>
        <div class="inner-main-2b">
          <img
            :src="require('../../assets/Group (1).svg')"
            alt="vector"
            class="inner-img2"
          />
          <p
            style="
              color: #b0b3c7;
              margin-left: 12px;
              font-weight: 500;
              font-size: 14px;
            "
          >
            13 minutes ago
          </p>
        </div>
        <div class="inner-main-2">
          <img
            :src="require('../../assets/Vector (1).svg')"
            alt="vector"
            class="inner-img2"
          />
          <p
            style="
              color: #b0b3c7;
              margin-left: 12px;
              font-weight: 500;
              font-size: 14px;
            "
          >
            By twelve Valet
          </p>
        </div>
        <div class="inner-main-2b">
          <img
            :src="require('../../assets/Vector (2).svg')"
            alt="vector"
            class="inner-img2"
          />
          <img
            :src="require('../../assets/user_avatar.png')"
            alt="vector"
            style="margin-left: 14px; width: 20px; height: 20px"
          />
        </div>
      </div>
      <div>
        <div class="second-main2">
          <img
            :src="require('../../assets/Group.svg')"
            alt="vector"
            style="margin-right: 4px; width: 20px; height: 20px"
          />
          <p
            style="
              color: #b0b3c7;
              margin-right: 15px;
              font-weight: 500;
              font-size: 18px;
            "
          >
            Completed
          </p>
        </div>
        <div class="text-center">
          <v-btn
           
            rounded="lg"
            :border="borderStyle"
            prepend-icon="mdi-eye"
            style="color: #ED3074; font-weight: 700;margin-top: 15px;"
         
            class="outlined2"
          >
            <template v-slot:prepend>
              <v-icon color="#ED3074"></v-icon>
            </template>
            View
          </v-btn>
        </div>
        <p style="color: #DB3E0C; margin-top: 30px;">Action required!!!</p>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Cards-Component",

  data() {
    return {
      borderStyle: "2px solid red",
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0px 36px;
}
.main {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -10px 0px #4d3f98, 10px 5px 20px rgba(0, 0, 0, 0.1);
}

.inner-main-2 {
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
}

.inner-img {
  width: 20px;
  height: 20px;
  margin-left: 30px;
}
.second-main {
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
}
.outlined{
    border: 2px solid #4d3f98;
    box-shadow: none;
}


/* second */
.main2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -10px 0px #ED3074, 10px 5px 20px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.inner-main-2b {
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
}

.inner-img2 {
  width: 20px;
  height: 20px;
  margin-left: 30px;
}
.second-main2 {
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
}
.outlined2{
    border: 2px solid #ED3074;
    box-shadow: none;
}
</style>

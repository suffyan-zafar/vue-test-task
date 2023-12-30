<template>
  <div>
    <v-card flat class="header">
      <div class="left-section">
        <router-link to="/" style="text-decoration: none">
          <div
            :class="{ active: activeSection === 'left-section' }"
            :style="{
              color: activeSection === 'left-section' ? '#2C4277' : '#979797',
            }"
            @click="setSection('left-section')"
          >
            <img
              :src="require('../../assets/icon.svg')"
              alt="vector"
              style="
                margin-right: 4px;
                width: 30px;
                height: 30px;
                cursor: pointer;
              "
            />
            <p
              style="
                text-align: center;
                font-size: 22px;
                margin: 10px;
                cursor: pointer;
              "
            >
              Dashboad
            </p>
          </div>
        </router-link>
      </div>
      <div class="center-section">
        <router-link to="/services" style="text-decoration: none">
          <div
            :class="{ active: activeSection === 'center-section' }"
            :style="{
              color: activeSection === 'center-section' ? '#2C4277' : '#979797',
            }"
            @click="setSection('center-section')"
          >
            <img
              :src="require('../../assets/icon2.svg')"
              alt="vector"
              style="
                margin-right: 4px;
                width: 30px;
                height: 30px;
                cursor: pointer;
                color: red;
              "
            />

            <p
              style="
                text-align: center;
                font-size: 22px;
                margin: 10px;
                cursor: pointer;
              "
            >
              Services
            </p>
          </div>
        </router-link>
      </div>
      <div class="right-section">
        <div
          :class="{ active: activeSection === 'right-section' }"
          :style="{
            color: activeSection === 'right-section' ? '#2C4277' : '#979797',
          }"
          @click="setSection('right-section')"
        >
          <img
            :src="require('../../assets/icon3.svg')"
            alt="vector"
            style="
              margin-right: 4px;
              width: 30px;
              height: 30px;
              cursor: pointer;
            "
          />
          <p
            style="
              text-align: center;
              font-size: 22px;
              margin: 10px;
              cursor: pointer;
            "
          >
            Inbox
          </p>
        </div>
      </div>
      <div class="right-section2">
        <router-link to="/more" style="text-decoration: none">
          <div
            :class="{ active: activeSection === 'right-section2' }"
            :style="{
              color: activeSection === 'right-section2' ? '#2C4277' : '#979797',
            }"
            @click="setSection('right-section2')"
          >
            <img
              :src="require('../../assets/icon4.svg')"
              alt="vector"
              style="
                margin-right: 4px;
                width: 30px;
                height: 30px;
                cursor: pointer;
              "
            />
            <p
              style="
                text-align: center;
                font-size: 22px;
                margin: 10px;
                cursor: pointer;
              "
            >
              More
            </p>
          </div>
        </router-link>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Footer-Page",
  data() {
    return {
      activeSection: "left-section",
    };
  },
  methods: {
    setSection(sectionValue) {
      console.log(sectionValue);
      this.activeSection = sectionValue;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
  padding: 50px;
}

.left-section {
  font-weight: 800;
  text-align: center;
}

.center-section {
  text-align: center;
}
.right-section {
  margin-top: 7px;
  text-align: center;
}
.right-section2 {
  margin-top: 7px;
  text-align: center;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
}

.append-image {
  width: 37px;
  height: 35px;
  cursor: pointer;
}
.active {
  color: #2c4277;
}
</style>

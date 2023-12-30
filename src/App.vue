<template>
  <v-app>
    <v-main>
      <router-view/>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/shared-component/footer.vue';
export default {
  name: 'App',

  components: {
    Footer
  },

  data: () => ({
    //
  }),
}
</script>

<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import navbar from "./components/navbarFiles/navbar.vue";
import { userData } from "./storeModules/types";
export default Vue.extend({
  data() {
    return {
      kek: null
    };
  },
  async created() {
    let testData: userData = {
      userName: "kek",
      dateCreated: new Date()
    };
    this.$store.commit("userDataLoaded", testData);
    console.log(this.$store.state);
    // Todo: Configure vuetify and have basic sign up and sign in template
    // Todo: Be able to make a new user
    // Todo: configure automotic datagrabing for userData
  },
  components: {
    navbar: navbar
  }
});
</script>

<style>
@import "~vuetify/dist/vuetify.min.css";
</style>



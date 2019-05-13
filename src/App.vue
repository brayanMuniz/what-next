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
import firebase from "@/firebaseConfig";
let auth = firebase.auth;
export default Vue.extend({
  data() {
    return {
      kek: null
    };
  },
  async created() {
    // Todo: Configure vuetify and have basic sign up and sign in template
    // Todo: Be able to make a new user
    // Todo: configure automotic datagrabing for userData
    auth.onAuthStateChanged(async user => {
      if (user) {
        await this.$store.dispatch("getAndSetUserData");
      } else {
        this.$router.push("/");
      }
    });
  },
  components: {
    navbar: navbar
  }
});
</script>

<style>
@import "~vuetify/dist/vuetify.min.css";
</style>



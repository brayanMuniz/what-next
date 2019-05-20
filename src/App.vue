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
    return {};
  },
  async created() {
    await auth.onAuthStateChanged(async user => {
      if (user && !this.$store.getters.userHasData) {
        await this.$store
          .dispatch("getAndSetUserData")
          .then(res => {
            this.$router.push("/");
          })
          .catch(err => {
            alert("There was a problem getting your data");
          });
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



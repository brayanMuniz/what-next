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
    return {};
  },
  async beforeCreate() {},
  components: {
    navbar: navbar
  }
});
</script>

<style>
@import "~vuetify/dist/vuetify.min.css";
</style>



<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
    </div>
    <router-view/>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
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
  }
});
</script>

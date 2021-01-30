<template>
  <div class="flexy">
    <Pricing msg="Our Pricing" />
  </div>
</template>

<script>
import Pricing from "./components/Pricing.vue";

export default {
  name: "App",
  components: {
    Pricing,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

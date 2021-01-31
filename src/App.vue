<template>
  <div class="pricing">
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
@font-face {
  font-family: "Montserrat";
  src: local(Montserrat),
    url(./assets/fonts/Montserrat/Montserrat-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-Bold";
  src: local(Montserrat),
    url(./assets/fonts/Montserrat/Montserrat-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-Light";
  src: local(Montserrat),
    url(./assets/fonts/Montserrat/Montserrat-Light.ttf) format("truetype");
}

@font-face {
  font-family: "Montserrat-ExtraBold";
  src: local(Montserrat),
    url(./assets/fonts/Montserrat/Montserrat-ExtraBold.ttf) format("truetype");
}

#app {
  font-family: "Montserrat-Bold", "Montserrat-Light", "Montserrat-ExtraBold",
    sans-serif, arial, helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

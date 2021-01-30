<template>
  <Welcome />
  <h1>Themes of the Blogs</h1>
  <Themes />
</template>

<script>
import Themes from "../components/themes.vue";
import Welcome from "../components/Welcome.vue";
export default {
  name: "Home",
  components: {
    Themes,
    Welcome,
  },
};
</script>

<style scoped>
h1 {
  position: relative;
  font-family: "Martel", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #18212b;
  margin-top: 100px;
}
h1::after {
  content: "";
  position: absolute;
  background-color: rgb(59, 163, 163);
  opacity: 1;
  top: 50px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 30px;
  height: 1px;
  transition-duration: 0.4s;
}
</style>

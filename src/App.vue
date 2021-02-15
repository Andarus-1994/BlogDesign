<template>
  <MainTitle />
  <topMenu />
</template>

<script>
import topMenu from "./components/topMenu.vue";
import MainTitle from "./components/MainTitle.vue";

export default {
  name: "App",
  components: {
    topMenu,
    MainTitle,
  },
};
</script>

<style>
body {
  background-color: rgb(240, 238, 238);
  box-sizing: border-box;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>

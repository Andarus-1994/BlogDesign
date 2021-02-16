<template>
  <Loader v-if="!loadPage" />
  <MainTitle v-if="loadPage" />
  <topMenu v-if="loadPage" />
</template>

<script>
import topMenu from "./components/topMenu.vue";
import MainTitle from "./components/MainTitle.vue";
import Loader from "./components/pageLoad.vue";
export default {
  name: "App",
  data: () => {
    return {
      loadPage: false,
    };
  },
  components: {
    topMenu,
    MainTitle,
    Loader,
  },
  mounted() {
    document.onreadystatechange = () => {
      setTimeout(() => {
        if (document.readyState == "complete") {
          this.loadPage = true;
        }
      }, 1000);
    };
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

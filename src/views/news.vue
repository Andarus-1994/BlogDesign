<template>
  <div class="news">
    <h1>News</h1>
    <newsHeader />
    <homeFooter />
  </div>
</template>

<script>
import newsHeader from "../components/newsHeader.vue";
import homeFooter from "../components/homeFooter.vue";
export default {
  name: "News",
  components: {
    newsHeader,
    homeFooter,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 100px;
  font-family: "Martel", serif;
  font-size: 3.5rem;
  color: rgb(34, 32, 32);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

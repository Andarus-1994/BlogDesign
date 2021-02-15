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
  color: black;
  text-align: center;
}
</style>

<template>
  <div class="blogs">
    <BlogsHeader />
    <homeFooter />
  </div>
</template>

<script>
import BlogsHeader from "../components/blogsHeader.vue";
import homeFooter from "../components/homeFooter.vue";
export default {
  name: "News",
  components: {
    BlogsHeader,
    homeFooter,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped></style>

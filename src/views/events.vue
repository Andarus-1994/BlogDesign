<template>
  <div>
    <EventsContent />
    <homeFooter />
  </div>
</template>

<script>
import EventsContent from "../components/eventsContent.vue";
import homeFooter from "../components/homeFooter.vue";
export default {
  name: "Events",
  components: {
    EventsContent,
    homeFooter,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 140px;
}
</style>

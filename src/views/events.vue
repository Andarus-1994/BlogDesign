<template>
  <div>
    <h1>Events</h1>
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
  text-align: center;
  margin-top: 50px;
  font-family: "Martel", serif;
  font-size: 3.5rem;
  color: rgb(34, 32, 32);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

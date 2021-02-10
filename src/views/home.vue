<template>
  <div class="home">
    <Welcome />
    <h1>Themes of the Blogs</h1>
    <div class="displayThemes" ref="themesTrigger"></div>
    <transition name="slide-fade">
      <Themes v-if="showThemes" />
    </transition>
    <homeContent />
    <homeContentTwo />
  </div>
</template>

<script>
import Themes from "../components/themes.vue";
import Welcome from "../components/Welcome.vue";
import homeContent from "../components/homeContent.vue";
import homeContentTwo from "../components/homeContentTwo.vue";
export default {
  name: "Home",
  data: () => {
    return {
      showThemes: false,
    };
  },
  methods: {
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            this.showThemes = true;
            console.log("dsa");
          }
        });
      });
      observer.observe(this.$refs.themesTrigger);
    },
  },
  mounted() {
    this.scrollTrigger();
  },
  components: {
    Themes,
    Welcome,
    homeContent,
    homeContentTwo,
  },
};
</script>

<style scoped>
.home {
  width: auto;
}
.displayThemes {
  margin-top: 150px;
  width: 100%;
  height: 10px;
}
h1 {
  position: relative;
  font-family: "Martel", serif;
  font-size: 2.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(20, 18, 18);
  margin-top: 100px;
}
h1::after {
  content: "";
  position: absolute;
  background-color: rgb(20, 18, 18);
  opacity: 1;
  top: 60px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 50px;
  height: 0.2vh;
  transition-duration: 0.4s;
}
</style>

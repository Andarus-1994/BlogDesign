<template>
  <div class="home">
    <Welcome />
    <kinesis-container event="scroll">
      <kinesis-element :strength="50" :distance="50">
        <h1>Themes of the Blogs</h1>
      </kinesis-element>

      <div class="displayThemes" ref="themesTrigger"></div>
      <transition name="slide-fade">
        <kinesis-element :strength="50" :distance="50">
          <Themes v-if="showThemes" />
        </kinesis-element>
      </transition>
    </kinesis-container>
    <homeContent />
    <homeContentTwo />
    <homeFooter />
  </div>
</template>

<script>
import Themes from "../components/themes.vue";
import Welcome from "../components/Welcome.vue";
import homeContent from "../components/homeContent.vue";
import homeContentTwo from "../components/homeContentTwo.vue";
import homeFooter from "../components/homeFooter.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
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
    window.scrollTo(0, 0);
  },
  components: {
    Themes,
    Welcome,
    homeContent,
    homeContentTwo,
    homeFooter,
    KinesisContainer,
    KinesisElement,
  },
};
</script>

<style scoped>
.home {
  width: auto;
}
.displayThemes {
  margin-top: 100px;
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
  margin-top: 10px;
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

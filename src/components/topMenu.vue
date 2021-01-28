<template>
  <div class="topMenu">
    <transition-group name="fade" v-if="showNav">
      <nav ref="navTrigger" v-if="showNav">
        <div class="Logo">Blogs</div>
        <ul>
          <router-link exact active-class="active" to="/BlogDesign"
            ><li>Home</li></router-link
          >
          <router-link to="/news" active-class="active"
            ><li>News</li></router-link
          >
          <router-link to="/blogs" active-class="active"
            ><li>Blogs</li></router-link
          >
          <router-link to="/events" active-class="active"
            ><li>Events</li></router-link
          >
        </ul>
        <div class="space"></div>
      </nav>
    </transition-group>

    <div class="limit" ref="navTrigger"></div>
    <div
      class="spaceLimit"
      v-bind:style="[showNav ? { marginTop: '0px' } : { marginTop: '200px' }]"
    ></div>
    <div class="nav" v-if="!showNav">
      <div class="Logo">Blogs</div>
      <ul>
        <router-link exact active-class="active" to="/"
          ><li>Home</li></router-link
        >
        <router-link to="/news" active-class="active"
          ><li>News</li></router-link
        >
        <router-link to="/blogs" active-class="active"
          ><li>Blogs</li></router-link
        >
        <router-link to="/events" active-class="active"
          ><li>Events</li></router-link
        >
      </ul>
      <div class="space"></div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "topMenu",
  data: () => {
    return {
      showNav: true,
    };
  },
  methods: {
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            this.showNav = true;
            console.log("dsa");
          } else {
            this.showNav = false;
            console.log("a plecat");
          }
        });
      });
      observer.observe(this.$refs.navTrigger);
    },
  },
  mounted() {
    this.scrollTrigger();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.limit {
  height: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Here Starts the small nav */
nav {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 50px;
  width: 80%;
  max-width: 1200px;
  font-family: "Julius Sans One", sans-serif;
}
nav > .Logo {
  margin: 2px 40px;
  color: rgb(35, 73, 90);
  font-family: "Playfair Display SC", serif;
  font-size: 2rem;
  margin-left: 30px;
  margin-right: 60px;
}
nav > .space {
  width: 10%;
}
nav > ul {
  list-style-type: none;
  padding: 0;
}
nav > ul li {
  display: inline-block;
  padding: 15px 10px;
  margin: 0 10px;
  transition-duration: 0.4s;
}
a {
  overflow: hidden;
  position: relative;
  color: #1c4050;
  font-size: 1.15rem;
}
a:hover {
  color: #3783a7;
}
a::after {
  transition-duration: 0.4s;
}
a::after {
  content: "";
  position: absolute;
  background-color: rgb(24, 29, 29);
  opacity: 0;
  top: 23px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 10px;
  height: 1px;
  transition-duration: 0.4s;
}
a:hover::after {
  content: "";
  position: absolute;
  background-color: rgb(39, 91, 107);
  opacity: 1;
  top: 17px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 60px;
}
a:focus::after {
  top: 17px;
}

.active {
  color: #184358;
  pointer-events: none;
}
.active li {
  text-decoration: underline;
}

/* Big Nav */
.nav {
  position: fixed;
  top: 0;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  font-family: "Julius Sans One", sans-serif;
  z-index: 10;
}
.nav > .Logo {
  margin: 6px 40px;
  color: rgb(35, 73, 90);
  font-family: "Playfair Display SC", serif;
  font-size: 2rem;
  margin-right: 80px;
}
.nav > .space {
  width: 20%;
}
.nav > ul {
  list-style-type: none;
  padding: 0;
}
.nav > ul li {
  display: inline-block;
  padding: 20px 10px;
  margin: 0 30px;
  transition-duration: 0.4s;
}

@media only screen and (max-width: 800px) {
  nav {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  nav ul li {
    font-size: 1rem;
  }
  .nav {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .nav ul li {
    font-size: 1rem;
  }
}
</style>

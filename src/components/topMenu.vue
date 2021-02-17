<template>
  <div class="topMenu">
    <nav ref="navTrigger" v-if="showNav">
      <div class="Logo">Blogs</div>
      <ul
        v-if="
          (windowWidth > 800 && ToggleMenu) || (windowWidth < 800 && ToggleMenu)
        "
      >
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
      <div
        v-if="windowWidth < 800"
        :class="ToggleMenu ? 'container' : 'container change'"
        v-on:click="toggleMenu()"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div class="space"></div>
    </nav>

    <div class="limit" ref="navTrigger"></div>
    <div
      class="spaceLimit"
      v-bind:style="[showNav ? { marginTop: '0px' } : { marginTop: '100px' }]"
    ></div>

    <div class="nav" v-if="!showNav">
      <div class="Logo">Blogs</div>
      <ul
        v-if="
          (windowWidth > 800 && ToggleMenu) || (windowWidth < 800 && ToggleMenu)
        "
      >
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
      <div
        v-if="windowWidth < 800"
        :class="ToggleMenu ? 'container' : 'container change'"
        v-on:click="toggleMenu()"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
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
      windowWidth: window.innerWidth,
      ToggleMenu: true,
    };
  },
  methods: {
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            this.showNav = true;
          } else {
            this.showNav = false;
          }
        });
      });
      observer.observe(this.$refs.navTrigger);
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 800) {
        this.ToggleMenu = true;
      }
    },
    toggleMenu: function() {
      this.ToggleMenu = !this.ToggleMenu;
    },
  },
  mounted() {
    this.scrollTrigger();
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.limit {
  height: 10px;
}
.topMenu {
  position: relative;
  overflow: hidden;
}

.container {
  display: inline-block;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

/* Here Starts the small nav */
nav {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;
  font-family: "Julius Sans One", sans-serif;
}
nav > .Logo {
  margin: 2px 40px;
  color: #030303;
  font-family: "Playfair Display SC", serif;
  font-size: 2rem;
  margin-left: 0px;
  margin-right: 70px;
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
  color: #030303;
  font-size: 1.15rem;
}
a:hover {
  color: #641b1b;
}
a::after {
  transition-duration: 0.4s;
}
a::after {
  content: "";
  position: absolute;
  background-color: rgb(58, 26, 26);
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
  background-color: rgb(97, 23, 29);
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
  color: #55050c;
  pointer-events: none;
}
.active li {
  text-decoration: underline;
}

/* Big Nav */
.nav {
  position: fixed;
  top: 0px;
  background-color: #ffffff;
  border-bottom: 1px solid rgb(182, 177, 177);
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
  animation: bounceMenu 1s 1;
  transition-duration: 0.6s;
}

@keyframes bounceMenu {
  0% {
    box-shadow: none;
    top: -50px;
  }
  60% {
    top: 5px;
  }
  80% {
    box-shadow: none;
    top: -3px;
  }
  88% {
    top: -1px;
  }
  93% {
    top: -3px;
  }
  95% {
    top: -1px;
  }
  97% {
    top: -3px;
  }
  98% {
    top: -1px;
  }
  100% {
    top: 0px;
  }
}
.nav > .Logo {
  margin: 6px 40px;
  color: #030303;
  font-family: "Playfair Display SC", serif;
  font-size: 2rem;
  margin-right: 80px;
}
.nav > .space {
  width: 10%;
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

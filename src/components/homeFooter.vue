<template>
  <div class="homeFooter">
    <h1>Footer stuff</h1>
    <div class="containerFooter">
      <div class="routes">
        <h2>Links</h2>
        <ul>
          <router-link exact active-class="active" to="/BlogDesign">
            <li>Home</li></router-link
          >
          <router-link exact active-class="active" to="/News">
            <li>News</li>
          </router-link>
          <router-link exact active-class="active" to="/Blogs">
            <li>Blogs</li>
          </router-link>
          <router-link exact active-class="active" to="/Events">
            <li>Events</li>
          </router-link>
        </ul>
      </div>
      <div class="socials">
        <h2>Socials</h2>
        <ul>
          <a href="#">
            <li><font-awesome-icon :icon="['fab', 'facebook']" /></li>
          </a>
          <a href="#"
            ><li><font-awesome-icon :icon="['fab', 'twitter']" /></li>
          </a>
          <a href="#">
            <li><font-awesome-icon :icon="['fab', 'instagram']" /></li>
          </a>
          <a href="#">
            <li><font-awesome-icon :icon="['fab', 'linkedin']" /></li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "FooterHome",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
.homeFooter {
  background: -webkit-linear-gradient(
    180deg,
    rgb(240, 238, 238),
    rgb(10, 45, 59)
  );
  background: rgb(218, 216, 216);
  /*background: #7d7d92; */
  color: rgb(31, 29, 29);
  margin-top: 200px;
  position: relative;
  padding-bottom: 150px;
  overflow: hidden;
  font-family: "Bebas Neue", cursive;
}

h1 {
  margin-top: 50px;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 2px;

  text-align: center;
}

.containerFooter {
  margin-top: 100px;
  display: flex;
}
.containerFooter .routes {
  width: 50%;
  text-align: center;
}
.containerFooter .socials {
  width: 50%;
  text-align: center;
}

.containerFooter h2 {
  display: block;
  font-size: 2rem;
  letter-spacing: 2px;
}

.containerFooter ul {
  margin-top: 80px;
  list-style-type: none;
  display: flex;
  justify-content: center;
}
.containerFooter ul li {
  position: relative;
  color: black;
  font-size: 2rem;
  letter-spacing: 1px;
  margin: 0 15px;
  z-index: 1;
}

.containerFooter ul li::before {
  content: "";
  position: absolute;
  background: #708894;
  top: -5px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  z-index: -1;
  transition: 0.3s;
}
.containerFooter ul a {
  text-decoration: none;
  color: white;
  transition: 0.3s;
}
.containerFooter ul a:hover {
  margin-top: -4px;
}

.containerFooter ul a:hover li::before {
  background: rgb(71, 67, 82);
}

.containerFooter .socials > ul a svg {
  margin-left: 7px;
}

@media only screen and (max-width: 800px) {
  .containerFooter {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    display: block;
    text-align: center;
  }
  .containerFooter .routes,
  .containerFooter .socials {
    width: 100%;
  }

  .containerFooter h2 {
    margin-top: 50px;
  }
  .containerFooter ul {
    padding-left: 0;
    margin-top: 30px;
    width: 90%;
    flex-direction: column;
  }

  .containerFooter ul li {
    margin-top: 20px;
    width: 100%;
  }
  .containerFooter ul a {
    margin: 0 auto;
  }

  .containerFooter .socials > ul a svg {
    margin-left: 0px;
  }
}
</style>

<template>
  <div class="Welcome">
    <div class="cropWelcomeTop"></div>
    <div class="welcomeTitle">
      <h2>Journey into My Blogs</h2>
      <div class="Button">
        <router-link
          exact
          active-class="active"
          to="/BlogDesign"
          title="Discover the Themes!"
          >Discover!</router-link
        >
      </div>
    </div>

    <div class="cropWelcomeBottom"></div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style scoped>
.Welcome {
  margin-top: 50px;
  position: relative;
  height: 63vh;
  overflow: hidden;
}
/*
.cropWelcomeTop {
  position: absolute;
  height: 100px;
  width: 100px;
  left: 0;
  right: 0;
  top: -50px;
  margin-left: auto;
  margin-right: auto;

  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  background-color: rgb(255, 255, 255);
}
.cropWelcomeBottom {
  position: absolute;
  height: 100px;
  width: 100px;
  left: 0;
  right: 0;
  bottom: -50px;
  margin-left: auto;
  margin-right: auto;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
  border-top-right-radius: 100%;
  background-color: rgb(255, 255, 255);
}
*/
.welcomeTitle {
  background-image: url("../assets/Journey.jpg");
  background-size: cover;
  background-blend-mode: luminosity;
  width: 60%;
  height: 100%;
  min-width: 900px;
  margin: 0 auto;
  box-shadow: inset 2px 2px 20px 10px black;
  overflow: hidden;
}
h2:hover {
  transform: rotate3d(1, 1, 1, 5deg);
}
h2 {
  position: relative;
  color: rgb(15, 43, 65);
  width: 500px;
  font-size: 4rem;
  line-height: 80px;
  font-weight: 900;
  font-family: "Playfair Display SC", serif;
  margin: 0 auto;
  margin-top: 10vh;
  padding: 10px 20px;
  z-index: 3;
  transform: rotate3d(1, 1, 1, -5deg);
  transition-duration: 0.4s;
}
h2::before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  z-index: -2;
  background-color: rgba(255, 255, 255, 0.281);
}

.Button {
  margin-top: 18vh;
  width: 100%;
  text-align: center;
}
a {
  background-color: rgb(255, 255, 255);
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  color: rgb(27, 53, 80);
  border-radius: 50px;
  margin: 0 auto;
  padding: 20px 40px;
  border: 1px solid rgb(19, 48, 75);
  transition-duration: 0.4s;
}
.Welcome a:hover {
  background-color: rgb(229, 230, 233);
}
@media only screen and (max-width: 800px) {
  .welcomeTitle {
    background-position: center;
    padding: 20px 0;
  }
  h2 {
    color: rgb(255, 255, 255);
    margin-left: 30px;
    width: 400px;
    font-size: 3rem;
    line-height: 40px;
    transform: rotate3d(1, 1, 1, 0deg);
  }
  h2::before {
    background-color: rgba(0, 0, 0, 0.418);
  }
  .Button {
    width: 500px;
  }
}
</style>

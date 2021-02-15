<template>
  <div class="Welcome">
    <div class="cropWelcomeTop"></div>
    <SVG />
    <div class="welcomeTitle">
      <h2>Traveling, cooking, books, life experiences. ALL 4 in 1 Blog.</h2>

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
import SVG from "./welcomeSVG";

export default {
  name: "Welcome",
  components: { SVG },
};
</script>

<style scoped>
.Welcome {
  margin-top: 50px;
  position: relative;
  height: 70vh;

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
  background-color: rgb(240, 238, 238);

  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  min-width: 900px;
  margin: 0 auto;
  z-index: 2;
  overflow: hidden;
}

h2 {
  position: relative;
  color: rgb(0, 0, 0);
  width: 700px;
  font-size: 2.5rem;
  letter-spacing: 4px;
  line-height: 50px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  margin-top: 15vh;
  padding: 10px 20px;
  z-index: 3;
  text-align: center;
  transition-duration: 0.4s;
}
/*
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
  box-shadow: inset 2px -2px 10px 3px black;
}
*/
.Button {
  position: relative;
  margin-top: 20vh;
  width: 100%;
  text-align: center;
  z-index: 2;
}
a {
  background-color: rgb(255, 255, 255);
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  color: #030303;
  margin: 0 auto;
  padding: 15px 30px;
  border: 1px solid rgb(56, 13, 20);
  border-radius: 5px;
  transition-duration: 0.4s;
}
.Welcome a:hover {
  background-color: rgb(36, 13, 14);
  color: white;
}
@media only screen and (max-width: 800px) {
  .welcomeTitle {
    background-position: center;
    padding: 0px 0;
    height: 400px;
  }
  h2 {
    color: rgb(255, 255, 255);
    margin-left: 20px;
    margin-top: 80px;
    width: 270px;
    font-size: 1rem;
    line-height: 40px;
    transform: rotate3d(1, 1, 1, 0deg);
  }
  h2::before {
    background-color: rgba(0, 0, 0, 0.418);
  }
  .Button {
    width: 340px;
  }
  a {
    font-size: 0.8rem;
    padding: 10px 15px;
  }
}
</style>

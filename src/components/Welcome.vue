<template>
  <div class="Welcome">
    <div class="cropWelcomeTop"></div>
    <div class="welcomeTitle">
      <h2>Welcome to My Blog</h2>
    </div>
    <router-link
      exact
      active-class="active"
      to="/BlogDesign"
      title="Discover the Themes!"
      >Discover!</router-link
    >
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
  position: relative;
  background: -webkit-linear-gradient(60deg, rgb(25, 54, 71), rgb(5, 43, 58));
  background: linear-gradient(60deg, rgb(25, 54, 71), rgb(5, 43, 58));
  height: 700px;
  overflow: hidden;
  margin-top: 50px;
  text-align: center;
}
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
.welcomeTitle {
  background-color: rgba(26, 41, 70, 0.151);
  width: 60%;
  min-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 150px;
  padding: 50px 0px;
}
h2 {
  color: rgb(255, 255, 255);
  font-size: 6rem;
  font-weight: 900;
  font-family: "Playfair Display", serif;
}

.Welcome a {
  background-color: rgb(247, 250, 255);
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgb(27, 53, 80);
  border-radius: 50px;
  padding: 20px 40px;
  border: 1px solid rgb(19, 48, 75);
}
@media only screen and (max-width: 600px) {
}
</style>

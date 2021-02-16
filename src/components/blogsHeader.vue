<template>
  <div class="blogsHeader">
    <h1>Life Blogs</h1>
    <div class="container">
      <ul>
        <li><img src="../assets/decorate.jpg" /></li>
        <li>
          <router-link to="#">
            <h2>HOW I REDECORATED MY BATHROOM - Replaced all...</h2>
            <p>
              The most important project you can do for a bathroom makeover is a
              lighting upgrade. A Swedish study found that lighting, paired with
              the right color, affects mood.
            </p>
          </router-link>
        </li>
      </ul>
      <ul>
        <li><img src="../assets/homeFeel.jpg" /></li>
        <li>
          <router-link to="#">
            <h2>CREATING A NURTURING ENVIRONMENT IN YOUR HOME</h2>
            <p>
              The home is supposed to be a refuge from the world, where you can
              relax and recharge. But if it’s dirty or full of clutter, it may
              be more of a source of stress than of healing.
            </p>
          </router-link>
        </li>
      </ul>
    </div>
    <h1>Traveling Blogs</h1>
    <div class="container">
      <ul>
        <li><img src="../assets/auroraB.jpg" /></li>
        <li>
          <router-link to="#">
            <h2>WHEN I VISITED NORWAY - Seen Aurora...</h2>
            <p>
              First and foremost, to see the Northern Lights, the skies must be
              dark. This immediately rules out daylight hours and, contrary to
              popular opinion, it is not pitch black in the Aurora Zone for the
              entire winter.
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 100px;
  font-family: "Martel", serif;
  font-size: 3.5rem;
  color: rgb(34, 32, 32);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.blogsHeader .container {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
}
.blogsHeader .container > ul {
  display: flex;
  list-style-type: none;
  width: 80%;
  padding: 0;
  margin: 0 auto;
  margin-top: 50px;

  border: 1px solid rgb(202, 187, 188);
}
.blogsHeader .container > ul li {
  width: 50%;
  max-height: 500px;
}

.blogsHeader .container > ul li:nth-of-type(2) {
  display: flex;
  flex-direction: column;
  padding: 5vh;
}
.blogsHeader .container > ul li:nth-of-type(2) a {
  text-decoration: none;
}
.blogsHeader .container > ul li:nth-of-type(2) h2 {
  font-size: 2.3rem;
  font-family: "Martel", serif;
  line-height: 50px;
  color: black;
}

.blogsHeader .container > ul li:nth-of-type(2) p {
  color: rgb(63, 62, 62);
  font-family: "Roboto";
  letter-spacing: 1px;
  line-height: 25px;
  padding: 5px;
  margin-top: 5vh;
  border-bottom: 1px solid rgb(185, 185, 185);
}

.blogsHeader .container > ul li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 800px) {
  .blogsHeader .container {
    width: 90%;
  }
  .blogsHeader .container > ul {
    flex-direction: column;
    width: 100%;
  }
  .blogsHeader .container > ul li {
    width: 100%;
  }

  .blogsHeader .container > ul li:nth-of-type(2) {
    padding: 0px;
  }
  .blogsHeader .container > ul li:nth-of-type(2) h2 {
    font-size: 2rem;
    line-height: 35px;
  }
  .blogsHeader .container > ul li:nth-of-type(2) p {
    margin-top: 15px;
  }
}
</style>

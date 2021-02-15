<template>
  <div class="newsHeader">
    <ul>
      <li>
        <router-link to="#">
          <img src="../assets/knowledge.jpg" />

          <h2>Reading</h2>
          <p>Hey that is the book</p>
        </router-link>
      </li>

      <li>
        <router-link to="#">
          <img src="../assets/mountains.jpg" />
          <h2>Traveling</h2>
          <p>New awesome place</p>
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <img src="../assets/cooks.jpg" />
          <h2>Cooking</h2>
          <p>Food recipe</p>
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <img src="../assets/cityLife.jpg" />
          <h2>Life</h2>
          <p>How to escape the city life</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "newsHeader",
};
</script>

<style scoped>
.newsHeader > ul {
  position: relative;
  width: 70%;
  list-style-type: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 100px;
  margin: 0 auto;
  margin-top: 50px;
  padding-bottom: 100px;
}
.newsHeader ul li {
  position: relative;
  max-height: 350px;
}

.newsHeader ul li img {
  background: rgb(60, 60, 68);
  width: 100%;
  border-radius: 5px;
  height: 80%;
}

.newsHeader ul li h2 {
  font-size: 0.7rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgb(75, 74, 74);
  padding-left: 5px;
  margin-top: 10px;
  margin-bottom: 25px;
}
.newsHeader ul li p {
  color: rgb(19, 19, 24);
  font-family: "Roboto", sans-serif;
  font-size: 1.7rem;
  padding-left: 5px;
  transition: 0.3s;
}
.newsHeader ul li a {
  text-decoration: none;
}
.newsHeader ul li:hover p {
  padding-left: 10px;
  color: rgb(25, 28, 36);
}
</style>

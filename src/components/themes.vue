<template>
  <div class="Themes">
    <ul>
      <li>
        <router-link to="/life">
          <img :src="travel" />
          <h2>Travel</h2>
          <p>
            We all love traveling from time to time. This Vlog will help you!
          </p>
        </router-link>
      </li>
      <li>
        <ul>
          <li>
            <router-link to="/life">
              <img :src="cooking" />
              <h2>Cooking</h2>
              <p>Learn to cook with us different type of food.</p>
            </router-link>
          </li>
          <li>
            <router-link to="/life">
              <img :src="book" />
              <h2>Books</h2>
              <p>
                Our mission is to nurture the love of books and support your
                book-reading fantasies.
              </p>
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <router-link to="/life">
          <img :src="life" />
          <h2>Life</h2>
          <p>
            Inspiring real-life stories, insightful strategies you can apply
            straight away in your own life.
          </p>
        </router-link>
      </li>
    </ul>
    _
  </div>
</template>

<script>
import book from "../assets/book.png";
import travel from "../assets/travel.png";
import life from "../assets/life.png";
import cooking from "../assets/cooking.png";
export default {
  name: "Themes",
  data: () => {
    return {
      book: book,
      travel: travel,
      life: life,
      cooking: cooking,
    };
  },
};
</script>

<style scoped>
.Themes {
  text-align: center;
  margin-top: 100px;
}
.Themes > ul {
  display: flex;
  list-style-type: none;
  width: 800px;
  height: 500px;
  margin: 0 auto;
}
.Themes > ul > li img {
  transition-duration: 0.6s;
}
.Themes > ul > li a {
  text-decoration: none;
  color: rgb(19, 30, 53);
  transition-duration: 0.6s;
}
.Themes > ul > li a:hover img {
  transform: rotate3d(200, 90, -55, 30deg);
}
.Themes > ul > li a:hover p {
  color: rgb(30, 50, 88);
}
.Themes > ul > li:nth-child(1) {
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 170px;
  padding: 10px 20px;
  text-align: center;
  margin-top: 100px;
}
.Themes > ul > li:nth-child(1) img {
  background: -webkit-linear-gradient(
    170deg,
    rgb(139, 203, 243),
    rgb(33, 140, 182)
  );
  background: linear-gradient(170deg, rgb(164, 216, 248), rgb(33, 140, 182));
  margin: 0 auto;
  padding: 13px 12px;
  width: 31px;
  height: 28px;
  border-radius: 48%;
}
.Themes > ul li h2 {
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  margin: 10px 0px;
}
.Themes > ul li p {
  font-family: "Roboto", sans-serif;
  line-height: 20px;
  font-size: 1rem;
}

.Themes > ul > li:nth-child(2) {
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 250px;
  padding: 10px 20px;
  text-align: center;
}
.Themes > ul > li:nth-child(2) > ul {
  list-style-type: none;
}
.Themes > ul > li:nth-child(2) ul li:nth-of-type(1) img {
  background: -webkit-linear-gradient(
    170deg,
    rgb(139, 203, 243),
    rgb(33, 140, 182)
  );
  background: linear-gradient(170deg, rgb(253, 79, 79), rgb(253, 210, 210));
  margin: 0 auto;
  padding: 13px 12px;
  width: 31px;
  height: 28px;
  border-radius: 48%;
}

.Themes > ul > li:nth-child(2) ul li:nth-of-type(2) {
  margin-top: 150px;
}

.Themes > ul > li:nth-child(2) ul li:nth-of-type(2) img {
  background: -webkit-linear-gradient(
    170deg,
    rgb(139, 203, 243),
    rgb(33, 140, 182)
  );
  background: linear-gradient(170deg, rgb(190, 76, 235), rgb(253, 210, 210));
  margin: 0 auto;
  padding: 13px 12px;
  width: 31px;
  height: 28px;
  border-radius: 48%;
}

.Themes > ul li:nth-child(3) {
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 200px;
  padding: 10px 20px;
  text-align: center;
  margin-top: 100px;
  margin-left: 30px;
}

.Themes > ul li:nth-child(3) img {
  background: -webkit-linear-gradient(
    170deg,
    rgb(139, 203, 243),
    rgb(33, 140, 182)
  );
  background: linear-gradient(170deg, rgb(48, 156, 44), rgb(253, 210, 210));
  margin: 0 auto;
  padding: 13px 12px;
  width: 31px;
  height: 28px;
  border-radius: 48%;
}

@media only screen and (max-width: 1000px) {
  .Themes > ul {
    width: 300px;
    height: 800px;
    flex-direction: column;
  }
  .Themes > ul li:nth-child(1) {
    margin: 0 auto;
  }
  .Themes > ul li:nth-child(2) ul {
    margin-left: -30px;
  }
  .Themes > ul li:nth-child(2) ul li:nth-of-type(2) {
    margin-top: 40px;
  }
  .Themes > ul li:nth-child(2) {
    height: 400px;
  }
  .Themes > ul li:nth-child(3) {
    margin: 0 auto;
    height: 200px;
  }
}
</style>

<template>
  <div class="Themes">
    <ul>
      <li>
        <router-link to="/life">
          <img :src="travel" />
          <h2>Travel</h2>
          <p>
            We all love traveling from time to time. This Blog will help you!
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
  position: relative;
  text-align: center;
  margin-top: 0px;
  opacity: 1;
  animation: fadeInThemes 1s 1;
}
@keyframes fadeInThemes {
  0% {
    margin-top: -30px;

    opacity: 0;
  }
  60% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    margin-top: 0px;
  }
}
.Themes > ul {
  display: flex;
  list-style-type: none;
  width: 950px;
  height: 500px;
  margin: 0 auto;
}
.Themes > ul > li img {
  transition-duration: 0.6s;
}
.Themes > ul > li a {
  text-decoration: none;
  color: rgb(63, 18, 21);
  transition-duration: 0.6s;
}
.Themes > ul > li a:hover img {
  transform: rotate3d(200, 90, -55, 30deg);
}
.Themes > ul > li a:hover p {
  color: rgb(73, 10, 26);
}
.Themes > ul > li:nth-child(1) {
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 240px;
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
  padding: 15px 14px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: rotation 15s infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.Themes > ul li h2 {
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  margin: 10px 0px;
  letter-spacing: 1.5px;
}
.Themes > ul li p {
  font-family: "Roboto", sans-serif;
  line-height: 25px;
  font-size: 1.2rem;
  font-weight: 300;

  color: #9c8385;
  transition-duration: 0.4s;
}

.Themes > ul > li:nth-child(2) {
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 300px;
  padding: 10px 20px;
  text-align: center;
}
.Themes > ul > li:nth-child(2) > ul {
  list-style-type: none;
}
.Themes > ul > li:nth-child(2) ul li:nth-of-type(1) img {
  position: relative;
  background: -webkit-linear-gradient(
    170deg,
    rgb(139, 203, 243),
    rgb(33, 140, 182)
  );
  background: linear-gradient(170deg, rgb(243, 43, 43), rgb(252, 185, 185));
  margin: 0 auto;
  padding: 15px 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.Themes > ul > li:nth-child(2) ul li:nth-of-type(1) p {
  position: relative;
}
.Themes > ul > li:nth-child(2) ul li:nth-of-type(1) p::after {
  content: "";
  position: absolute;
  background-color: rgb(231, 76, 76);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: travel infinite 4s;
}

@keyframes travel {
  0% {
    opacity: 0;
    top: -100px;
    left: 0;
  }
  40% {
    opacity: 1;
    top: -70px;
    left: 115px;
  }
  70% {
    opacity: 1;
    top: -60px;
    left: 105px;
  }
  100% {
    opacity: 0;
    top: 50px;
    left: 0;
  }
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
  background: linear-gradient(170deg, rgb(90, 28, 114), rgb(185, 89, 250));
  margin: 0 auto;
  padding: 15px 14px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.Themes > ul li:nth-child(3) {
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 250px;
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
  background: linear-gradient(170deg, rgb(65, 190, 7), rgb(212, 255, 183));
  margin: 0 auto;
  padding: 15px 14px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

@media only screen and (max-width: 1000px) {
  .Themes > ul {
    width: 400px;
    height: 1000px;
    flex-direction: column;
  }

  .Themes > ul li:nth-child(1) {
    margin: 0 auto;
  }
  .Themes > ul li:nth-child(2) ul {
    margin-top: 40px;
    margin-left: 10px;
  }
  .Themes > ul li:nth-child(2) ul li:nth-of-type(2) {
    margin-top: 40px;
  }
  .Themes > ul li:nth-child(2) {
    height: 400px;
  }
  .Themes > ul li:nth-child(3) {
    margin: 0 auto;
    margin-top: 40px;
    height: 200px;
  }
}
</style>

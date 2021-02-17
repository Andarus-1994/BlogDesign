<template>
  <div class="blogsHeader" v-for="(theme, index) in blogThemes" :key="index">
    <h1 v-if="checkEmptyThemes(theme.id)">{{ theme.Theme }}</h1>
    <div v-for="(blog, index) in blogs" :key="index">
      <div class="container" v-if="blog.idTheme === theme.id">
        <ul>
          <li><img :src="require(`../assets/${blog.img}`)" /></li>
          <li>
            <router-link to="#">
              <h2>{{ blog.Title }}</h2>
              <p>
                {{ truncateText(blog.Text) }}
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    blogThemes: Array,
    blogs: Array,
  },
  mounted() {
    console.log(this.blogThemes);
  },

  methods: {
    checkEmptyThemes: function(idTheme) {
      for (var i = 0; i < this.blogs.length; i++) {
        if (idTheme === this.blogs[i].idTheme) return true;
      }
      return false;
    },
    truncateText: function(text) {
      if (text.length > 200) {
        var truncatedText = text.slice(0, 200);
        var lastIndex = truncatedText.lastIndexOf(" ");
        truncatedText = truncatedText.substring(0, lastIndex);
        truncatedText = truncatedText.concat("...");
        console.log(this.blogs);
        return truncatedText;
      } else return text;
    },
  },
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
  width: 80%;
  margin: 0 auto;
}
.blogsHeader .container > ul {
  display: flex;
  list-style-type: none;
  width: 80%;
  max-height: 500px;
  padding: 0;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid rgb(202, 187, 188);
}
.blogsHeader .container > ul li {
  width: 50%;
}

.blogsHeader .container > ul li:nth-of-type(2) {
  height: auto;
  padding: 5vh;
}
.blogsHeader .container > ul li:nth-of-type(2) a {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-decoration: none;
}

.blogsHeader .container > ul li:nth-of-type(2) h2 {
  font-size: 2.3rem;
  font-family: "Martel", serif;
  line-height: 50px;
  color: black;
  transition: 0.4s;
}
.blogsHeader .container > ul li:nth-of-type(2) h2:hover {
  color: rgb(40, 40, 88);
}

.blogsHeader .container > ul li:nth-of-type(2) p {
  color: rgb(63, 62, 62);
  font-family: "Roboto";
  letter-spacing: 1px;
  line-height: 25px;
  padding: 5px;
  margin-top: 3vh;
  border-bottom: 1px solid rgb(185, 185, 185);
  transition: 0.4s;
}
.blogsHeader .container > ul li:nth-of-type(2) p:hover {
  color: rgb(40, 40, 88);
}

.blogsHeader .container > ul li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 1000px) {
  .blogsHeader .container {
    width: 90%;
  }
  .blogsHeader .container > ul {
    flex-direction: column;
    max-height: 100%;
    width: 100%;
  }
  .blogsHeader .container > ul li {
    width: 100%;
  }
  .blogsHeader .container > ul li:nth-of-type(1) {
    max-height: 300px;
  }
  .blogsHeader .container > ul li img {
    height: 100%;
  }
  .blogsHeader .container > ul li:nth-of-type(2) {
    padding: 0px;
    height: 60%;
    padding: 10px;
  }
  .blogsHeader .container > ul li:nth-of-type(2) h2 {
    font-size: 2rem;
    margin-top: 10px;
    line-height: 35px;
  }
  .blogsHeader .container > ul li:nth-of-type(2) p {
    margin-top: 15px;
    padding: 0;
    width: 95%;
  }
}
</style>

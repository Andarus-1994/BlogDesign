<template>
  <div class="homeContent">
    <div class="BlogDescription">
      <h2>Why do I enjoy blogging?</h2>
      <p>
        I love being creative with different projects and ideas and blogging
        allows me to express that. I love thinking of new content ideas, ways of
        making topics that are personal to me interesting and unique. Blogging
        isn’t just about the writing, it also entails many other roles, those of
        which help me to develop new skills, things that I hope I can apply to
        any career I might have in the future.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeContent",
};
</script>

<style scoped>
.homeContent {
  background-image: url("../assets/BGcontent.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-color: rgb(240, 238, 238);
  position: relative;
  margin-top: 150px;
  padding: 200px 0px;
  z-index: 5;
}

.BlogDescription {
  width: 60%;
  min-width: 300px;
  margin: 0 auto;
  padding: 50px 10px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 8px 2px rgb(13, 28, 54);
}
.BlogDescription h2 {
  margin-bottom: 50px;
  letter-spacing: 2px;
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  color: rgb(3, 3, 3);
}

.BlogDescription p {
  font-size: 1rem;
  padding: 10px 80px;
  text-indent: 40px;
  text-align: justify;
  margin: 0 auto;
  color: rgb(48, 47, 47);
  line-height: 30px;
  letter-spacing: 2px;
}

@media only screen and (max-width: 800px) {
  .homeContent {
    background: #a8a8b8;
  }
  .BlogDescription h2 {
    font-size: 2rem;
  }
  .BlogDescription p {
    width: auto;
    line-height: 25px;
    padding: 10px;
    font-size: 0.8rem;
  }
}
</style>

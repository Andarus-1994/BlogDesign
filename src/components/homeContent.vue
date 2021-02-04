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
  background-image: url("../assets/knowledge.jpg");
  background-color: cornflowerblue;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-top: 150px;
  padding: 200px 0px;
  z-index: 5;
}

.BlogDescription {
  width: 80%;
  margin: 0 auto;
  padding: 70px 25px;
  text-align: center;
  background-color: rgb(240, 238, 238);
}
.BlogDescription h2 {
  margin-bottom: 80px;
  letter-spacing: 2px;
  font-size: 2.5rem;
  color: rgb(3, 3, 3);
}

.BlogDescription p {
  font-size: 1rem;
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;

  line-height: 30px;
  letter-spacing: 2px;
}

@media only screen and (max-width: 800px) {
  .BlogDescription h2 {
    font-size: 2rem;
  }
  .BlogDescription p {
    width: auto;
    line-height: 30px;
    font-size: 0.85rem;
  }
}
</style>

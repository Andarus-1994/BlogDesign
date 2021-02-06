<template>
  <div class="homeContentTwo">
    <h1>Blog's Diversity...</h1>
    <div v-for="(blog, index) in defaultBlogs" :key="index">
      <Cards
        :cardId="index"
        :cardName="blog.name"
        :cardDescription="blog.description"
        :cardImage="blog.img"
      />
    </div>
  </div>
</template>

<script>
import Cards from "./homeContentTwoCards";

export default {
  name: "homeContentTwo",
  components: {
    Cards,
  },
  data: () => {
    return {
      defaultBlogs: [
        {
          name: "Traveling",
          description:
            "You might feel like you’re stuck in a rut in your daily life. Or you’re yearning for something exciting and different. You’re craving new experiences and new challenges. Travel is the ideal place to test yourself. It pushes people to their limits and gets them outside their comfort zone. You’ll discover how resourceful you are when you’re exposed to new places, people and experiences.",
          img: "travel.jpg",
        },
        {
          name: "Cooking",
          description:
            "I love that cooking give me a chance to be creative and indulge in some ‘play’ time – something we adults could do with a lot more. I adore losing myself in the rituals of chopping, stirring and tasting.",
          img: "cooking.jpg",
        },
        {
          name: "Reading",
          description:
            "Before you can read, you must learn how. You must push yourself to interact with meaningless lines and squiggles until they transform into stories, characters and ideas. And once you master picture books, you move forward to children’s novels. Novels without pictures.",
          img: "reading.jpg",
        },
      ],
    };
  },
  created: function() {
    console.log(this.defaultBlogs);
  },
};
</script>

<style scoped>
.homeContentTwo {
  margin-top: 50px;
  padding: 20px 0px;
  text-align: center;
}
h1 {
  font-family: "Martel", serif;
  font-size: 3rem;
  color: black;
}

@media only screen and (max-width: 800px) {
  .homeContentTwo {
    width: 100%;
    padding: 5px 0px;
  }
  h1 {
    font-size: 1.5rem;
  }
}
</style>

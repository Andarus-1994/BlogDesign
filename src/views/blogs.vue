<template>
  <div class="blogs">
    <BlogsHeader :blogThemes="Themes" :blogs="blogs" />
    <homeFooter />
  </div>
</template>

<script>
import BlogsHeader from "../components/blogsHeader.vue";
import homeFooter from "../components/homeFooter.vue";
export default {
  name: "News",
  components: {
    BlogsHeader,
    homeFooter,
  },
  data: () => {
    return {
      Themes: [
        { Theme: "Life Blogs", id: 0 },
        { Theme: "Traveling Blogs", id: 1 },
        { Theme: "Cooking Blogs", id: 2 },
        { Theme: "Reading Blogs", id: 3 },
      ],
      blogs: [
        {
          Title: "HOW I REDECORATED MY BATHROOM - Replaced all...",
          Text:
            "The most important project you can do for a bathroom makeover is a lighting upgrade. A Swedish study found that lighting, paired with the right color, affects mood.",
          img: "decorate.jpg",
          idTheme: 0,
        },
        {
          Title: "CREATING A NURTURING ENVIRONMENT IN YOUR HOME",
          Text:
            "The home is supposed to be a refuge from the world, where you can relax and recharge. But if it’s dirty or full of clutter, it may be more of a source of stress than of healing. ",
          img: "homeFeel.jpg",
          idTheme: 0,
        },
        {
          Title: "WHEN I VISITED NORWAY - Seen Aurora...",
          Text:
            "First and foremost, to see the Northern Lights, the skies must be dark. This immediately rules out daylight hours and, contrary to popular opinion, it is not pitch black in the Aurora Zone for the entire winter.  ",
          img: "auroraB.jpg",
          idTheme: 1,
        },
        {
          Title: "FUNCTIONAL DESIGN KITCHEN - Why is it important...",
          Text:
            "A beautiful new kitchen needs a functional design behind it. CliqStudios designers make kitchens functional and comfortable by learning who uses the space and how. Not only do they avoid errors like placing doors too closely together, they also personalize the space for each household. These are a few of the top things kitchen designers take into consideration for each project.   ",
          img: "Kitchen.jpg",
          idTheme: 2,
        },
        {
          Title: "GRILLED MEAT AND IT'S DRESSING...",
          Text:
            "There’s no debate that meat cooked over a fire tastes delicious, and it’s no secret either that grilled meat, poultry, and fish tend to be lower in calories and fat than their fried counterparts   ",
          img: "GrilledMeat.jpg",
          idTheme: 2,
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped></style>

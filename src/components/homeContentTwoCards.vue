<template>
  <div class="Cards">
    <div class="borderLeft left" v-if="cardId % 2 === 0">
      <h2>{{ cardName }}</h2>
      <p>{{ cardDescription }}</p>
    </div>
    <div class="borderRight right" v-if="cardId % 2 === 0">
      <img :src="require(`../assets/${cardImage}`)" />
    </div>

    <div class="borderLeft right" v-if="cardId % 2 !== 0">
      <img :src="require(`../assets/${cardImage}`)" />
    </div>
    <div class="borderRight left" v-if="cardId % 2 !== 0">
      <h2>{{ cardName }}</h2>
      <p>{{ cardDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    cardId: Number,
    cardName: String,
    cardDescription: String,
    cardImage: String,
  },
};
</script>

<style scoped>
.Cards {
  display: flex;
  width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 50px;
}
.Cards h2 {
  color: rgb(26, 12, 12);
  font-size: 2rem;
}
.Cards p {
  margin-top: 40px;
  color: rgb(0, 0, 0);
  font-size: 1rem;
  line-height: 30px;
  letter-spacing: 1px;
}
.left {
  padding: 40px;
  height: 400px;
  width: 60%;
  background-color: rgb(255, 255, 255);
}
.borderLeft {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.borderLeft img {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.right {
  width: 40%;
}
.borderRight {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
.borderRight img {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
.Cards img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 800px) {
  .Cards {
    width: 500px;
    flex-direction: column;
    padding: 0;
  }
  .Cards h2 {
    font-size: 1.5rem;
  }
  .Cards p {
    font-size: 0.85rem;
  }
  .left {
    border-radius: 20px;
    margin-left: 20px;
    height: auto;
  }
  .right {
    border-radius: 20px;
    height: auto;
  }
  .Cards img {
    display: none;
  }
}
</style>

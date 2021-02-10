<template>
  <div class="Cards" :id="cardId % 2 === 0 ? 'left' : 'right'">
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
  margin-top: 0px;
  padding: 50px;
}

#left {
  animation-delay: 0.4s;
  animation: enter-left 2s;
}
#right {
  animation-delay: 0.4s;
  animation: enter-right 2s;
}
@keyframes enter-left {
  0% {
    opacity: 0;
    transform: translateX(-40%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes enter-right {
  0% {
    opacity: 0;
    transform: translateX(40%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.Cards h2 {
  color: rgb(26, 12, 12);
  font-size: 2rem;
}
.Cards p {
  margin-top: 50px;
  color: rgb(0, 0, 0);
  text-indent: 30px;
  text-align: justify;
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
    width: 90%;
    flex-direction: column;
    padding: 0px 20px 0px 0px;
    margin: 0 auto;
    margin-top: 50px;
  }
  .Cards h2 {
    font-size: 1.5rem;
  }
  .Cards p {
    font-size: 0.85rem;
    padding: 10px;
  }
  .left {
    border-radius: 20px;

    height: auto;
    width: auto;
    padding: 10px 15px;
  }
  .right {
    border-radius: 20px;

    padding: 0;
    height: auto;
    width: auto;
  }
  .Cards img {
    display: none;
  }
}
</style>

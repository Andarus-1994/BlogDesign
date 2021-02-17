<template>
  <div class="Cards" :id="cardId % 2 === 0 ? 'left' : 'right'">
    <div class="deleteCard" v-on:click="deleteCard(cardId)" v-if="admin">
      &#10006;
    </div>
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
import { mapGetters } from "vuex";
export default {
  name: "Cards",
  props: {
    deleteCard: Function,
    cardId: Number,
    cardName: String,
    cardDescription: String,
    cardImage: String,
  },
  computed: {
    ...mapGetters(["admin"]),
  },
};
</script>

<style scoped>
.Cards {
  position: relative;
  display: flex;
  width: 800px;
  margin: 0 auto;
  margin-top: 0px;
  padding: 50px;
}

.deleteCard {
  position: absolute;
  background: rgb(175, 15, 15);
  font-size: 1.5rem;
  color: white;
  border-radius: 50%;
  border-top: 1px solid rgb(255, 255, 255);
  padding: 5px 5px 10px 5px;
  top: 27px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 35px;
  height: 28px;
  cursor: pointer;
  transition: 0.4s;
}

.deleteCard:hover {
  background: rgb(226, 39, 39);
  transform: rotate(20deg);
}

#left {
  animation: enter-left 2s;
}
#right {
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

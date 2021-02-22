<template>
  <div class="newsContent">
    <section v-if="$route.params.id === '1'">
      <h2>New awesome place</h2>
      <div class="containerNews">
        <p>
          While a lot of people prefer going somewhere sunny or to the beach for
          a little escape, very few actually consider the mountains. The terrain
          is rough, the weather is all over the place and sometimes, the
          facilities aren’t all that exquisite. That being said, the mountains
          are a place of extreme calm and offer so much more than you can
          imagine. While there are a lot of reasons why a trip to the mountains
          is the best idea, here are 6 really important ones.
        </p>
        <img src="../assets/mountains.jpg" />
      </div>
    </section>
    <section v-if="$route.params.id === '2'">
      <h2>Hey that is the book</h2>
      <div class="containerNews">
        <p>
          When it comes to books, I’m an easy crowd. Pass me a paperback from
          Liane Moriarty and I’ll probably enjoy it. Lend me Jonathan Franzen’s
          latest literary novel and I won’t be able to stop reading. Send me
          Jill Abrahmson’s book on the digital revolution of the media industry
          and I’m addicted. (I am actually addicted to this right now – it’s
          fantastic.)
          <br />
          But not everyone is as easy to please, and when I’m asked for book
          recommendations I often find myself making a quick calculation: are
          you the kind of person who likes beach reads or brainy Virago
          classics? Will you be offended if I suggest a crime novel or actually,
          deeply upset and offended if I recommend a book that’s truly
          confronting (Hello, We Need To Talk About Kevin and A Little Life)
        </p>

        <img src="../assets/read.jpg" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "newsContent",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.newsContent {
  width: 100%;
  text-align: center;
  height: 1000px;
}
.newsContent h2 {
  font-size: 2rem;
}
.containerNews {
  display: inline-block;
  background: rgb(255, 254, 254);
  margin: 0 auto;
  margin-top: 50px;
  width: 70%;
}
.containerNews p {
  color: black;
  width: 55%;
  font-size: 1rem;
  text-align: left;
  text-indent: 30px;
  letter-spacing: 2px;
  line-height: 25px;
  padding: 20px;
  margin-top: 5vh;
  float: left;
}
.containerNews img {
  width: 40%;
  height: 500px;
  object-fit: cover;
  float: right;
}
</style>

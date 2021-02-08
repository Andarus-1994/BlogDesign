<template>
  <div class="MainTitle">
    <input type="checkbox" @change="check" :checked="admin" />
    <label for="checkbox"> Activate Admin Mode</label>

    <h1>Weekly Blogs</h1>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "MainTitle",
  computed: {
    ...mapGetters(["admin"]),
  },

  methods: {
    ...mapMutations(["setAdmin"]),
    check: function() {
      this.setAdmin();
    },
  },
};
</script>

<style scoped>
.MainTitle {
  padding: 20px 30px;
  border-bottom: 1px solid rgb(95, 118, 133);
}
h1 {
  font-family: "Playfair Display SC", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 2.5rem;
  color: #030303;
  margin-left: 5%;
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 3rem;
  }
}
</style>

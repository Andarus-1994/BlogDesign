<template>
  <div class="ModalAddCard">
    <div class="closeModal" v-on:click="displayModal">X</div>
    <h1>Modal Card</h1>
  </div>
</template>

<script>
export default {
  name: "ModalAddCard",
  props: {
    displayModal: Function,
  },
};
</script>

<style scoped>
.ModalAddCard {
  position: fixed;
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 60vh;
  top: 150px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 20px;
  border: 1px solid rgb(207, 205, 205);
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px black;
  z-index: 20;
}
h1 {
  font-size: 2rem;
}

.closeModal {
  position: absolute;
  font-size: 1.5rem;
  width: 20px;
  cursor: pointer;
  top: 10px;
  right: 20px;
}
</style>

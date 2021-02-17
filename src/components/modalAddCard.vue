<template>
  <div>
    <div class="ModalBG" v-on:click="displayModal"></div>
    <div class="ModalAddCard">
      <div class="closeModal" v-on:click="displayModal">&#x2716;</div>
      <h1>New Blog Theme</h1>
      <form id="app" @submit.prevent="submit">
        <div class="wrapperInput">
          <p>
            <label for="title">Title*</label>
            <input v-model="title" type="text" name="title" />
            <span class="error" v-if="errors.titleError">{{
              errors.titleError
            }}</span>
          </p>
        </div>
        <div class="wrapperInput">
          <p>
            <label for="description">Description*</label>
            <textarea v-model="description" name="description" />
            <span class="error" v-if="errors.descriptionError">
              {{ errors.descriptionError }}</span
            >
          </p>
        </div>
        <div class="wrapperInput">
          <p>
            <label for="imgName">Name of the image</label>
            <select v-model="imgName" name="imgName">
              <option>reading.jpg</option>
              <option>cooking.jpg</option>
              <option>cooking2.jpg</option>
              <option>travel.jpg</option>
            </select>
          </p>
        </div>
        <p>
          <input type="submit" value="Submit" />
        </p>
        <span class="two" v-if="loader"></span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalAddCard",

  data: () => {
    return {
      errors: { titleError: "", descriptionError: "" },
      title: null,
      description: null,
      imgName: null,
      loader: false,
    };
  },
  props: {
    displayModal: Function,
    addTheme: Function,
  },

  methods: {
    submit: function() {
      if (this.checkForm()) {
        console.log(this.description);
        this.addTheme({
          name: this.title,
          description: this.description,
          img: this.imgName,
        });
        this.loader = true;
        setTimeout(() => this.displayModal(), 2000);
      }
    },
    checkForm: function() {
      if (this.title && this.description) {
        this.errors = [];
        return true;
      }

      this.errors = [];

      if (!this.title) {
        this.errors.titleError = "Title required.";
      }
      if (!this.description) {
        this.errors.descriptionError = "Description required.";
      }
    },
  },
};
</script>

<style scoped>
.ModalBG {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.ModalAddCard {
  position: fixed;
  background-color: rgb(255, 255, 255);
  width: 500px;
  height: 600px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 20px;
  border: 1px solid rgb(207, 205, 205);
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px black;
  z-index: 30;
  animation: enter-appear 1s;
}
@keyframes enter-appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.wrapperInput {
  position: relative;
  margin: 0 auto;
  margin-top: 25px;
  width: 300px;
  display: flex;
  flex-direction: column;
}

.wrapperInput p {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.wrapperInput p label {
  align-self: flex-start;
  color: rgb(20, 11, 11);
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-top: 20px;
  margin-bottom: 5px;
  animation: enter-space 1s;
}
@keyframes enter-space {
  0% {
    margin-bottom: 250px;
    margin-left: -100px;
  }
  100% {
    margin-left: 0;
  }
}
.wrapperInput p input {
  padding: 8px 8px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid rgb(134, 134, 134);
}
.wrapperInput p input:focus {
  border-radius: 10px;
  border: 1px solid black;
}
.wrapperInput p textarea {
  resize: none;
  padding: 8px 8px;
  border-radius: 10px;
  border: 1px solid rgb(134, 134, 134);
}
.wrapperInput p select {
  border: 1px solid rgb(134, 134, 134);
}

input[type="submit"] {
  cursor: pointer;
  padding: 12px 30px;
  margin-top: 40px;
  background-color: rgb(41, 39, 40);
  font-size: 1rem;
  letter-spacing: 2px;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  transition: 0.6s;
}
input[type="submit"]:hover {
  background-color: rgb(38, 131, 38);
}
input[type="submit"]:active {
  margin-top: 42px;
}
h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 60px;
  color: rgb(32, 34, 39);
  animation: enter-title 1s;
}
@keyframes enter-title {
  0% {
    margin-top: 250px;
    margin-left: -100px;
  }
  100% {
    margin-left: 0;
  }
}
.closeModal {
  color: rgb(32, 32, 34);
  position: absolute;
  font-size: 1.2rem;
  width: 20px;
  cursor: pointer;
  top: 10px;
  right: 20px;
  transition: 0.4s;
}
.closeModal:hover {
  color: rgb(105, 105, 105);
}

.error {
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: rgb(209, 13, 13);
}

.two {
  background-color: rgb(99, 99, 99);
  margin-left: 0px;
  bottom: 13px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  animation: 0.5s linear 0.1s infinite alternate both running jump1;
  z-index: 50;
}
.two::before,
.two::after {
  position: absolute;
  content: " ";
  background-color: rgb(39, 44, 53);
  width: 10px;
  height: 10px;
  top: 0;
  border-radius: 50%;
}
.two::before {
  right: 20px;
  animation: 0.5s linear 0s infinite alternate both running jump1;
}
.two::after {
  left: 20px;
  animation: 0.5s linear 0.3s infinite alternate both running jump1;
}
@keyframes jump1 {
  0% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(8px);
  }
}
</style>

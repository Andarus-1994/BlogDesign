<template>
  <div class="eventsContent">
    <div class="event" v-for="(event, index) in eventsList" :key="index">
      <h2>{{ convertDate(event.date) }}</h2>

      <p>{{ event.name }}</p>
      <h3>{{ event.hour }}</h3>
    </div>
    <div class="event">
      <h2>Upcoming date...</h2>

      <p>Upcoming event name...</p>
      <h3>Upcoming time...</h3>
    </div>
    <div class="event new" v-if="admin" v-on:click="newEvent">
      <h2>Add new event</h2>
      <p>+</p>
      <h3>Add new event</h3>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  name: "eventsContent",
  computed: {
    ...mapGetters(["admin"]),
  },
  data: () => {
    return {
      eventsList: [
        {
          name: "Fan Meeting",
          date: "2021/3/14",
          hour: "4:00PM",
        },
        {
          name: "Fan Meeting 2",
          date: "2021/3/14",
          hour: "1:00PM",
        },
        {
          name: "Fan Meeting 2",
          date: "2021/3/14",
          hour: "3:00PM",
        },
        {
          name: "Fan Meeting 3",
          date: "2021/3/14",
          hour: "3:00PM",
        },
        {
          name: "Fan Meeting 5 New York",
          date: "2021/3/14",
          hour: "5:30PM",
        },
      ],
    };
  },
  mounted() {
    console.log(moment(Date.parse("2021 / 3 / 14")).format("MMMM Do YYYY"));
  },
  methods: {
    convertDate: function(date) {
      return moment(Date.parse(date)).format("MMMM Do YYYY");
    },
    newEvent() {
      this.eventsList.push({
        name: "Fan meeting Test",
        date: "2021/7/14",
        hour: "1:30PM",
      });
    },
  },
};
</script>

<style scoped>
.eventsContent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-auto-rows: 1fr;
  width: 80%;
  margin: 0 auto;
  margin-top: 20vh;
}
.event {
  position: relative;
  border: 1px solid rgb(161, 160, 160);
  padding: 120px 20px;
  text-align: center;
  letter-spacing: 2px;
  font-family: "Roboto";
  transition: 0.8s;
}

.event:hover {
  background: black;
}
.event:hover h2,
.event:hover p,
.event:hover h3 {
  color: white;
}
.event h2 {
  color: rgb(41, 40, 40);
  font-size: 1rem;
}
.event p {
  color: black;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 30px 0;
}

.event h3 {
  font-size: 1rem;
  color: rgb(31, 30, 30);
}
.new {
  cursor: pointer;
  animation: 2s enter;
}

@keyframes enter {
  0% {
    transform: translateY(-500px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

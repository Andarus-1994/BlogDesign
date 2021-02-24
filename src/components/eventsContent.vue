<template>
  <div class="eventsContent">
    <div class="event" v-for="(event, index) in eventsList" :key="index">
      <h2>{{ convertDate(event.date) }}</h2>

      <p>{{ event.name }}</p>
      <h3>{{ event.hour }}</h3>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "eventsContent",

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
  },
};
</script>

<style scoped>
.eventsContent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
}
.event {
  background: rgb(87, 129, 165);
  padding: 30px;
  text-align: center;
  font-family: "Roboto";
}
.event h2 {
  color: rgb(43, 42, 42);
  font-size: 1.5rem;
}
.event p {
  color: black;
  font-size: 2rem;
  font-weight: 600;
  margin: 30px 0;
}

.event h3 {
  font-size: 1rem;
  color: rgb(31, 30, 30);
}
</style>

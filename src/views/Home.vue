
<template>
  <v-container>
    <v-row class="flex-child">
      <v-col cols="6" md="6">
        <v-sheet class="d-flex" color="green lighten-3" height="350"></v-sheet>
      </v-col>
      <v-col cols="6" md="6">
        <v-sheet class="d-flex" color="yellow lighten-3" height="350"></v-sheet>
      </v-col>

      <v-col class="d-flex" cols="12" md="12">
        <v-row>
          <v-col cols="12" md="12" xl="12">
            <v-sheet class="d-flex" color="red lighten-3">
              <v-container fluid>
                <p class="font-weight-light display-1 text-center">{{ time }}</p>
                <p class="font-weight-light text-center">{{ date }}</p>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="6" md="6">
        <v-sheet class="centered" color="teal lighten-3" height="350">
          <WeatherCard />
        </v-sheet>
      </v-col>

      <v-col cols="6" md="6">
        <v-sheet class="d-flex" color="purple lighten-3" height="350">
          <SalesCard />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<!--<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="12">
        <v-container fluid>
          <p class="font-weight-light display-1 text-center">{{ time }}</p>
          <p class="font-weight-light text-center">{{ date }}</p>
          <salesCard />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>-->

<script>
import { format } from "date-fns";
import SalesCard from "../components/SalesCard";
import WeatherCard from "../components/WeatherCard";

export default {
  components: {
    SalesCard,
    WeatherCard
  },
  data: () => ({
    time: format(new Date(), "HH:mm:ss"),
    timeInterval: null,
    date: format(new Date(), "dd/MM/yy")
  }),
  methods: {
    getTime() {
      return format(new Date(), "HH:mm:ss");
    }
  },
  created() {
    this.timeInterval = setInterval(() => {
      this.time = this.getTime();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timeInterval);
  }
};
</script>

<style lang="scss" scoped>
  .centered {
    display: flex;
    align-items: center;
  }
</style>
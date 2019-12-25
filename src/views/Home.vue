
<template>
  <v-container>
    <v-row class="flex-child">
      <v-col cols="6" md="6">
        <v-sheet class="centered" color="green lighten-3">
          <StockCard />
        </v-sheet>
      </v-col>

      <v-col cols="6" md="6">
        <v-sheet class="centered" color="yellow lighten-3">
          <NotesCard />
        </v-sheet>
      </v-col>

      <v-col cols="12" md="12" xl="12">
        <v-sheet class="centered" color="red lighten-3">
          <TimeCard />
        </v-sheet>
      </v-col>

      <v-col cols="6" md="6">
        <v-sheet class="centered" color="teal lighten-3" height="350">
          <WeatherCard />
        </v-sheet>
      </v-col>

      <v-col cols="6" md="6">
        <v-sheet class="centered" color="purple lighten-3" height="350">
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
import SalesCard from "../components/SalesCard";
import WeatherCard from "../components/WeatherCard";
import TimeCard from "../components/TimeCard";
import NotesCard from "../components/NotesCard";
import StockCard from "../components/StockCard";

export default {
  components: {
    SalesCard,
    WeatherCard,
    TimeCard,
    NotesCard,
    StockCard
  }
};
</script>

<style lang="scss" scoped>
.centered {
  display: flex;
  align-items: center;
}
</style>
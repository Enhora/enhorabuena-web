<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-container fluid>
          <p class="font-weight-light display-1 text-center">{{ time }}</p>
          <p class="font-weight-light text-center">{{ date }}</p>
          <salesCard />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { format } from "date-fns";
import salesCard from "../components/SalesCard";

export default {
  components: {
    salesCard
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
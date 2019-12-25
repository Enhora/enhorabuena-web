<template>
  <v-card class="mx-auto text-center" color="transparent" flat>
    <v-card-text>
      <p class="font-weight-light display-3 text-center">{{ time }}</p>
      <p class="font-weight-light display-1 text-center">{{ date }}</p>
    </v-card-text>
  </v-card>
</template>


<script>
import { format } from "date-fns";

export default {
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
<template>
  <v-app>
    <Bar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Bar from "./components/Bar";

export default {
  name: "App",
  components: {
    Bar,
  },
  data: () => ({
    //
  })
};
</script>

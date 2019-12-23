<template>
  <v-app>
    <Bar />
    <v-content>
      <MainMenu />
    </v-content>
  </v-app>
</template>

<script>
import Bar from "./components/Bar";
import MainMenu from "./components/MainMenu";

export default {
  name: "App",
  components: {
    Bar,
    MainMenu
  },
  data: () => ({
    //
  })
};
</script>

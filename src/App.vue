<template>
  <v-app>
    <Bar />
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <MainMenu />
          </v-col>
        </v-row>
      </v-container>
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

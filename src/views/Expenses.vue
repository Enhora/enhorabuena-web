<template>
  <v-container fluid>
    <v-row no-gutters justify="space-around">
      <v-col cols="12" sm="12" lg="5">
        <p class="headline text-center">Agregar gasto</p>
        <OutcomesForm />
      </v-col>

      <v-divider class="mx-4" inset vertical></v-divider>

      <v-col cols="12" sm="12" lg="5">
        <p class="headline text-center">
          Ultimos gastos
          <v-icon>mdi-arrow-top-right</v-icon>
        </p>
        <TxTable :items="desserts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OutcomesForm from "../components/OutcomesForm";
import TxTable from "../components/TxTable";

export default {
  name: "App",
  components: {
    OutcomesForm,
    TxTable
  },
  data: () => ({
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159
      },
      {
        name: "Ice cream sandwich",
        calories: 237
      },
      {
        name: "Pandorito",
        calories: 262
      }
    ]
  })
};
</script>

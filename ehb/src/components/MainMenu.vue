<template>
  <v-container fluid>
    <v-row no-gutters align="top" justify="space-around">
      <v-col cols="12" sm="12" lg="5">
        <p class="headline text-center">Agregar venta</p>
        <SalesForm />
      </v-col>

      <v-divider class="mx-4" inset vertical></v-divider>

      <v-col cols="12" sm="12" lg="5">
        <p class="headline text-center">Agregar gasto</p>
        <OutcomesForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OutcomesForm from "./OutcomesForm";
import SalesForm from "./SalesForm";

export default {
  name: "App",
  components: {
    OutcomesForm,
    SalesForm
  },
  data: () => ({
    //
  })
};
</script>

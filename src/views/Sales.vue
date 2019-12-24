<template>
  <v-container fluid>
    <v-row no-gutters justify="space-around">
      <v-col cols="12" sm="12" lg="5">
        <p class="headline text-center">Agregar venta</p>
        <SalesForm />
      </v-col>

      <v-divider class="mx-4" inset vertical></v-divider>

      <v-col cols="12" sm="12" lg="5">
        <p class="headline text-center">
          Ultimas ventas
          <v-icon to="/detalle-ventas">mdi-arrow-top-right</v-icon>
        </p>
        <TxTable :items="desserts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SalesForm from "../components/SalesForm";
import TxTable from "../components/TxTable";

export default {
  name: "App",
  components: {
    SalesForm,
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
        name: "Eclair",
        calories: 262
      },
      {
        name: "Cupcake",
        calories: 305
      },
      {
        name: "Gingerbread",
        calories: 356
      },
      {
        name: "Jelly bean",
        calories: 375
      },
      {
        name: "Lollipop",
        calories: 392
      },
      {
        name: "Honeycomb",
        calories: 408
      },
      {
        name: "Donut",
        calories: 452
      },
      {
        name: "KitKat",
        calories: 518
      }
    ]
  })
};
</script>

<template>
  <v-container fluid>
    <v-row no-gutters justify="space-around">
      <v-col cols="12" sm="12" lg="5">
        <p class="headline text-center">Agregar stock</p>
        <StockForm />
      </v-col>

      <v-divider class="mx-4" inset vertical></v-divider>

      <v-col cols="12" sm="12" lg="5">
        <p class="headline text-center">
          Items faltantes
          <v-icon to="/detalle-stock">mdi-arrow-top-right</v-icon>
        </p>
        <TxTable :items="desserts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StockTable from "../components/SalesTable";
import StockForm from "../components/StockForm";
import TxTable from "../components/TxTable";

export default {
  components: {
    StockTable,
    StockForm,
    TxTable
  },
  data: () => ({
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        status: "Pago"
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        status: "Pago"
      },
      {
        name: "Eclair",
        calories: 262,
        status: "Pago"
      },
      {
        name: "Cupcake",
        calories: 305,
        status: "Pago"
      },
      {
        name: "Gingerbread",
        calories: 356,
        status: "Pago"
      },
      {
        name: "Jelly bean",
        calories: 375,
        status: "Pago"
      },
      {
        name: "Lollipop",
        calories: 392,
        status: "Pago"
      },
      {
        name: "Honeycomb",
        calories: 408,
        status: "Pago"
      },
      {
        name: "Donut",
        calories: 452,
        status: "Pago"
      },
      {
        name: "KitKat",
        calories: 518,
        status: "Pago"
      }
    ]
  })
};
</script>
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
          <v-btn icon color="indigo" to="/stock/detalle">
            <v-icon>mdi-arrow-top-right</v-icon>
          </v-btn>
        </p>
        <TxTable :items="articles.filter(x => x.stock < 300)" />
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
    articles: [
      {
        name: "Medias soquete invisible",
        stock: 159,
        price: 260,
        payMethod: "Efectivo",
        fees: 0,
        discount: "15%",
        status: "Pago"
      },
      {
        name: "Media caña alta",
        stock: 237,
        price: 190,
        payMethod: "Efectivo",
        fees: 0,
        discount: "10%",
        status: "Pago"
      },
      {
        name: "Media caña corta",
        stock: 262,
        price: 1634.0,
        payMethod: "Efectivo",
        fees: 0,
        discount: "10%",
        status: "Pago"
      },
      {
        name: "Boxer hombre",
        stock: 305,
        price: 3344.0,
        payMethod: "Débito",
        fees: 0,
        discount: "10%",
        status: "Pago"
      },
      {
        name: "Boxer niño",
        stock: 356,
        price: 1634.0,
        payMethod: "Crédito",
        fees: 3,
        discount: "0%",
        status: "Pago"
      },
      {
        name: "Slip hombre",
        stock: 3759.0,
        price: 500.0,
        payMethod: "Débito",
        fees: 0,
        discount: "0%",
        status: "Pago"
      },
      {
        name: "Slip niño",
        stock: 392,
        price: 1000,
        payMethod: "Débito",
        fees: 0,
        discount: "10%",
        status: "Pago"
      },
      {
        name: "Sombrero Bowler",
        stock: 408,
        price: 302,
        payMethod: "Débito",
        fees: 0,
        discount: "45%",
        status: "Pago"
      },
      {
        name: "Sombrero Fedora",
        stock: 4523.0,
        price: 250.6,
        payMethod: "Crédito",
        fees: 6,
        discount: "20%",
        status: "Pago"
      },
      {
        name: "Sombrero bombin",
        stock: 518,
        price: 1426.0,
        payMethod: "Crédito",
        fees: 6,
        discount: "0%",
        status: "Pago"
      }
    ]
  })
};
</script>
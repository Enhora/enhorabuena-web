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
          <v-btn icon color="indigo" to="/ventas/detalle">
            <v-icon>mdi-arrow-top-right</v-icon>
          </v-btn>
        </p>
        <TxTable :items="articles" />
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
    articles: [
      {
        name: "Medias soquete invisible",
        stock: 159,
        price: 260,
        status: "Pago"
      },
      {
        name: "Media caña alta",
        stock: 237,
        price: 190,
        status: "Pago"
      },
      {
        name: "Media caña corta",
        stock: 262,
        price: 1634.0,
        status: "Pago"
      },
      {
        name: "Boxer hombre",
        stock: 305,
        price: 3344.0,
        status: "Pago"
      },
      {
        name: "Boxer niño",
        stock: 356,
        price: 1634.0,
        status: "Pago"
      },
      {
        name: "Slip hombre",
        stock: 3759.0,
        price: 500.0,
        status: "Pago"
      },
      {
        name: "Slip niño",
        stock: 392,
        price: 1000,
        status: "Pago"
      },
      {
        name: "Sombrero Bowler",
        stock: 408,
        price: 302,
        status: "Pago"
      },
      {
        name: "Sombrero Fedora",
        stock: 4523.0,
        price: 250.6,
        status: "Pago"
      },
      {
        name: "Sombrero bombin",
        stock: 518,
        price: 1426.0,
        status: "Pago"
      }
    ]
  })
};
</script>

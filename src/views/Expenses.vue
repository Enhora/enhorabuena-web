<template>
  <v-container fluid>
    <v-row no-gutters justify="space-around">
      <v-col cols="12" sm="12" lg="5">
        <p class="headline text-center">Agregar gasto</p>
        <ExpensesForm />
      </v-col>

      <v-divider class="mx-4" inset vertical></v-divider>

      <v-col cols="12" sm="12" lg="5">
        <p class="headline text-center">
          Ultimos gastos
          <v-btn icon color="indigo" to="/gastos/detalle">
            <v-icon>mdi-arrow-top-right</v-icon>
          </v-btn>
        </p>
        <TxTable :items="expenses" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExpensesForm from "../components/ExpensesForm";
import TxTable from "../components/TxTable";

export default {
  name: "App",
  components: {
    ExpensesForm,
    TxTable
  },
  data: () => ({
    expenses: [
      {
        name: "Talonario",
        price: 159,
        status: "Pago"
      },
      {
        name: "Lapiceras",
        price: 237,
        status: "Pago"
      },
      {
        name: "Aromatizador",
        price: 262,
        status: "Pago"
      }
    ]
  })
};
</script>

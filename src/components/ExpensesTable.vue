<template>
  <v-data-table :headers="headers" :items="expenses" class="elevation-1">
    <template v-slot:item.stock="{ item }">
      <v-chip :color="getColor(item.stock)" dark>{{ item.stock }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "ExpensesTable",
  data() {
    return {
      headers: [
        {
          text: "Articulo",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Precio ($)", value: "price" },
        { text: "Estado", value: "status" },
        { text: "Compró", value: "buyer" }
      ],
      expenses: [
        {
          name: "Talonario",
          price: 159,
          status: "Pago",
          buyer: "Cristina"
        },
        {
          name: "Lapiceras",
          price: 237,
          status: "Pago",
          buyer: "Cristina"
        },
        {
          name: "Aromatizador",
          price: 262,
          status: "Pago",
          buyer: "Alfredo"
        }
      ]
    };
  },
  methods: {
    getColor(stock) {
      if (stock < 400) return "red";
      else if (stock < 200) return "orange";
      else return "green";
    }
  }
};
</script>

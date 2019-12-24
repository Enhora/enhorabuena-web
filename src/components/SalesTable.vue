<template>
  <v-data-table
    :headers="headers"
    :items="articles"
    class="elevation-1"
    show-expand
    item-key="name"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Expandable Table</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-switch v-model="singleExpand" label="Single expand" class="mt-2"></v-switch>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers }">
      <td :colspan="headers.length">Peek-a-boo!</td>
    </template>
    <template v-slot:item.stock="{ item }">
      <v-chip :color="getColor(item.stock)" dark>{{ item.stock }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "SalesTable",
  data() {
    return {
      headers: [
        {
          text: "Articulo",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Stock", value: "stock" },
        { text: "Precio ($)", value: "price" },
        { text: "Metodo de pago", value: "payMethod" },
        { text: "Cuotas", value: "fees" },
        { text: "Descuento (%)", value: "discount" },
        { text: "Estado", value: "status" }
      ],
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

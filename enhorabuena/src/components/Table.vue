<template>
  <v-data-table :headers="headers" :items="articulos" class="elevation-1">
    <template v-slot:item.stock="{ item }">
      <v-chip :color="getColor(item.stock)" dark>{{ item.stock }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "Table",
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
        { text: "Precio ($)", value: "precio" },
        { text: "Metodo de pago", value: "metodoDePago" },
        { text: "Cuotas", value: "cuotas" },
        { text: "Descuento (%)", value: "descuento" }
      ],
      articulos: [
        {
          name: "Nombre A",
          stock: 159,
          precio: 260,
          metodoDePago: "Efectivo",
          cuotas: 0,
          descuento: "15%"
        },
        {
          name: "Nombre B",
          stock: 237,
          precio: 190,
          metodoDePago: "Efectivo",
          cuotas: 0,
          descuento: "10%"
        },
        {
          name: "Nombre C",
          stock: 262,
          precio: 1634.0,
          metodoDePago: "Efectivo",
          cuotas: 0,
          descuento: "10%"
        },
        {
          name: "Nombre D",
          stock: 305,
          precio: 3344.0,
          metodoDePago: "Débito",
          cuotas: 0,
          descuento: "10%"
        },
        {
          name: "Nombre E",
          stock: 356,
          precio: 1634.0,
          metodoDePago: "Crédito",
          cuotas: 3,
          descuento: "0%"
        },
        {
          name: "Nombre F",
          stock: 3759.0,
          precio: 500.0,
          metodoDePago: "Débito",
          cuotas: 0,
          descuento: "0%"
        },
        {
          name: "Nombre G",
          stock: 392,
          precio: 1000,
          metodoDePago: "Débito",
          cuotas: 0,
          descuento: "10%"
        },
        {
          name: "Nombre H",
          stock: 408,
          precio: 302,
          metodoDePago: "Débito",
          cuotas: 0,
          descuento: "45%"
        },
        {
          name: "Nombre I",
          stock: 4523.0,
          precio: 250.6,
          metodoDePago: "Crédito",
          cuotas: 6,
          descuento: "20%"
        },
        {
          name: "Nombre J",
          stock: 518,
          precio: 1426.0,
          metodoDePago: "Crédito",
          cuotas: 6,
          descuento: "0%"
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
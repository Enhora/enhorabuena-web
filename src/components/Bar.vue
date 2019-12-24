<template>
  <v-app-bar
    app
    absolute
    color="#6A76AB"
    dark
    prominent
    src="https://potterandvaughn.com/files/2019/05/sock_wall.jpg?w=1060&h=795&a=t"
    fade-img-on-scroll
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title class="display-1">
      Enhorabuena
      <v-icon>mdi-clock-outline</v-icon>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-slot:extension>
      <v-tabs align-with-title background-color="transparent">
        <v-tab to="/">Inicio</v-tab>
        <v-tab to="/ventas">Ventas</v-tab>
        <v-tab to="/gastos">Gastos</v-tab>
        <v-tab to="/stock">Stock</v-tab>
        <v-tab to="/proveedores">Proveedores</v-tab>
        <v-tab to="/calendario">Calendario</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "Bar",
  data: () => ({
    items: [
      { title: "Usuario" },
      { title: "Configuración" },
      { title: "Salir" }
    ]
  })
};
</script>

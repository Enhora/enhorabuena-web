<template>
  <v-app-bar
    app
    absolute
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="https://potterandvaughn.com/files/2019/05/sock_wall.jpg?w=1060&h=795&a=t"
    fade-img-on-scroll
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>
      Enhorabuena
      <v-icon>mdi-clock-outline</v-icon>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-menu bottom left>
      <template v-slot:activator="{ on }">
        <v-btn icon color="yellow" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <template v-slot:extension>
      <v-tabs align-with-title background-color="transparent">
        <v-tab to="/">Inicio</v-tab>
        <v-tab to="/ventas">Ventas</v-tab>
        <v-tab to="/gastos">Gastos</v-tab>
        <v-tab to="/stock">Stock</v-tab>
        <v-tab to="/proveedores">Proveedores</v-tab>
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

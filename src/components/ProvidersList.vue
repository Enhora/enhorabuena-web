<template>
  <v-list three-line>
    <template v-for="(item, index) in items">
      <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

      <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

      <v-list-item v-else :key="item.name">
        <v-list-item-avatar>
          <v-avatar color="indigo">
            <span
              class="white--text headline"
            >{{ item.name.slice(0,1).concat(item.lastname.slice(0,1)) }}</span>
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-name>{{ item.name + ' ' + item.lastname }}</v-list-item-name>
          <v-list-item-name>{{ item.company }}</v-list-item-name>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Guillermo",
        lastname: "Maiolo",
        company: "Empresa"
      },
      { divider: true, inset: true },
      {
        name: "Nombre a",
        lastname: "Apellido",
        company: "Empresa"
      },
      { divider: true, inset: true },
      {
        name: "Nombre b",
        lastname: "Apellido",
        company: "Empresa"
      },
      { divider: true, inset: true },
      {
        name: "Nombre c",
        lastname: "Apellido",
        company: "Empresa"
      },
      { divider: true, inset: true },
      {
        name: "Nombre d",
        lastname: "Apellido",
        company: "Empresa"
      },
      { divider: true, inset: true },
      {
        name: "Nombre e",
        lastname: "Apellido",
        company: "Empresa"
      },
      { divider: true, inset: true },
      {
        name: "Nombre f",
        lastname: "Apellido",
        company: "Empresa"
      },
      { divider: true, inset: true },
      {
        name: "Nombre g",
        lastname: "Apellido",
        company: "Empresa"
      },
      { divider: true, inset: true },
      {
        name: "Nombre h",
        lastname: "Apellido",
        company: "Empresa"
      },
      { divider: true, inset: true },
      {
        name: "Nombre i",
        lastname: "Apellido",
        company: "Empresa"
      }
    ]
  })
};
</script>

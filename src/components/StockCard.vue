<template>
  <v-card color="transparent" flat>
    <v-list flat subheader three-line color="transparent">
      <v-subheader class="headline">
        <v-icon class="mr-3">mdi-library-shelves</v-icon>Stock
      </v-subheader>
      <v-list-item-group multiple active-class>
        <v-list-item v-for="item in stock" v-bind:key="item.text">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text}}
              <v-btn text icon>
                <v-icon class="mr-1">mdi-eye</v-icon>
              </v-btn>
            </v-list-item-title>
            <v-list-item-subtitle class="font-weight-light">{{ item.left }} disponibles.</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    stock: [
      {
        text: "Boxer XY Art. 409: Talle S: 20 unidades",
        left: "2"
      },
      {
        text: "Boxer XY Art. 594: Talle S: 12 unidades",
        left: "5"
      },
      {
        text: "oxer X Art. 594: Talle S: 10 unidades",
        left: "2"
      },
      {
        text: "Bolsas Nº 1",
        left: "3"
      },
      {
        text: "Bolsas Nº 5",
        left: "2"
      }
    ]
  })
};
</script>
<template>
  <v-card class="mx-auto text-center">
    <v-card-text>
      <v-sparkline
        :value="value"
        color="purple"
        height="150"
        padding="24"
        line-width="2"
        stroke-linecap="round"
      >
        <template v-slot:label="item">${{ item.value }}</template>
      </v-sparkline>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">Ventas en las últimas 24h</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn block text>Ver el detalle</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760, 870]
  })
};
</script>
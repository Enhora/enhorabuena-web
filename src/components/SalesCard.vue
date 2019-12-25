<template>
  <v-card class="mx-auto text-center" color="transparent" flat>
    <v-card-text>
      <v-sparkline :value="value" height="180" padding="10" line-width="2" stroke-linecap="round">
        <template v-slot:label="item">${{ item.value }}</template>
      </v-sparkline>
    </v-card-text>

    <v-card-text>
      <div class="font-weight-light display-1 text-center">Ventas en las últimas 24h</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    value: [423, 446, 675, 510, 590, 610, 760, 870, 423]
  })
};
</script>
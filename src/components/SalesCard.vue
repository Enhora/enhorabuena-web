<template>
  <v-card class="mx-auto text-center" color="transparent" flat>
    <v-card-text>
      <v-sparkline :value="value" height="150" padding="24" line-width="2" stroke-linecap="round"></v-sparkline>
    </v-card-text>

    <v-card-text>
      <div class="font-weight-light display-1 text-center">Ventas en las últimas 24h</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    value: [
      423,
      446,
      675,
      510,
      590,
      610,
      760,
      870,
      423,
      446,
      675,
      510,
      590,
      610
    ]
  })
};
</script>
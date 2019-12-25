<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <StockTable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StockTable from "../components/StockTable";
export default {
  components: {
    StockTable
  }
};
</script>

<style lang="scss" scoped>
</style>

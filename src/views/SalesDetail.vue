<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <SalesTable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SalesTable from "../components/SalesTable";
export default {
  components: {
    SalesTable
  }
};
</script>

<style lang="scss" scoped>
  
</style>
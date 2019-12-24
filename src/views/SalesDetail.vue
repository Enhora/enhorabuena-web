<template>
  <v-container class="fill-height" fluid>
    <v-row align="start">
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
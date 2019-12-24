<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <ExpensesTable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExpensesTable from "../components/ExpensesTable";
export default {
  components: {
    ExpensesTable
  }
};
</script>

<style lang="scss" scoped>
  
</style>
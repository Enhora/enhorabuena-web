<template>
  <v-container fluid>
    <v-row no-gutters justify="space-around">
      <v-col cols="12" sm="12" lg="5">
        <ProvidersList />
      </v-col>

      <v-divider class="mx-4" inset vertical></v-divider>

      <v-col cols="12" sm="12" lg="5">
        <ProviderCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ExpensesForm from "../components/ExpensesForm";
import ProvidersList from "../components/ProvidersList";
import ProviderCard from "../components/ProviderCard";

export default {
  name: "Providers",
  components: {
    ProvidersList,
    ProviderCard
  }
};
</script>
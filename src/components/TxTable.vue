<template>
  <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
  </v-simple-table>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: []
      }
    }
  }
</script>

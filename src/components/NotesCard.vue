<template>
  <v-card color="transparent" flat>
    <v-list flat subheader three-line color="transparent">
      <v-subheader class="headline">
        <v-icon class="mr-3">mdi-clipboard-check</v-icon>Notas
      </v-subheader>
      <v-list-item-group v-model="selectedNotes" multiple active-class>
        <v-list-item v-for="note in notes" v-bind:key="note.text">
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="active" color="indigo"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                {{ note.text}}
                <v-btn text icon>
                  <v-icon class="mr-1">mdi-pencil</v-icon>
                </v-btn>
                <v-btn text icon>
                  <v-icon class="mr-1">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-light">{{ note.created}}</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selectedNotes: [],
    notes: [
      {
        text: "Hacer pedido de Boxer XY Art. 409: Talle S: 20 unidades",
        created: "Hoy"
      },
      {
        text: "Hacer pedido de Boxer XY Art. 594: Talle S: 12 unidades",
        created: "Hoy"
      },
      {
        text: "Hacer pedido de Boxer X Art. 594: Talle S: 10 unidades",
        created: "Ayer"
      },
      {
        text: "Hacer pedido de bolsas Nº 1",
        created: "Ayer"
      },
      {
        text: "Hacer pedido de bolsas Nº 5",
        created: "Hace una semana"
      }
    ]
  })
};
</script>
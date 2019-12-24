<template>
  <v-card color="transparent" flat>
    <v-list flat subheader three-line color="transparent">
      <v-subheader>Notas</v-subheader>
      <v-list-item-group v-model="settings" multiple active-class>
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Hacer pedido de Boxer XY Art. 409: Talle S: 20 unidades</v-list-item-title>
              <v-list-item-subtitle>Hoy</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Hacer pedido de Boxer XY Art. 594: Talle S: 12 unidades</v-list-item-title>
              <v-list-item-subtitle>Hoy</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Hacer pedido de bolsas Nº 5</v-list-item-title>
              <v-list-item-subtitle>Hace 2 días</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
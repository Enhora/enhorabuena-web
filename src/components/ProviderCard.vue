<template>
  <v-card class="mx-auto">
    <v-row class="fill-height">
      <v-card-title>
        <h1 class="headline ma-4">Guillermo Maiolo</h1>
        <v-btn light icon class="mr-4">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>

        <v-btn light icon>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
    </v-row>

    <v-list two-line>
      <v-list-item @click>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-phone</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>(011) 155554-1234</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item @click>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>(011) 138554-8734</v-list-item-title>
          <v-list-item-subtitle>Trabajo</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-message-text</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item @click>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>guille.maiolo@gmail.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click>
        <v-list-item-action></v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>g.maiolo@example.com</v-list-item-title>
          <v-list-item-subtitle>Trabajo</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item @click>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-map-marker</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Scalabrini Ortiz 1440</v-list-item-title>
          <v-list-item-subtitle>Palermo, CABA</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
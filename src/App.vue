<template>
  <v-app >
    <v-main>
      <v-app-bar app>
        <v-icon size="75" @click="$router.push('/')">
          <v-img src="@/assets/NL_Logo.png" alt="NL_Logo" contain height="50"></v-img>
        </v-icon>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" color="primary" @click="$router.push('/contact')">
        Contact Me
          <v-icon icon="mdi-account" end></v-icon>
        </v-btn>
        <v-btn class="ma-2" color="primary" @click="toggleTheme">
        Change Theme
          <v-icon icon="mdi-lightbulb" end></v-icon>
        </v-btn>
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>

import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
  //
</script>

<template>
  <v-app-bar app color="white" dark>
      <v-btn text @click="$router.push('/')">
        <v-img src="@/assets/NL_Logo.png" alt="NL_Logo" contain height="32"></v-img>
      </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="$router.push('/contact')">Contact Me</v-btn>
  </v-app-bar>
</template>

<script>

export default {
  name: 'Header'
}
</script>


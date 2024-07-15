<template>
  <v-container class="w-100">
    <v-responsive
      class="align-centerfill-height">

      <div class="text-left">

        <h1 class="text-h3 font-weight-bold">Hi, I'm Nick</h1>
        <h1 class="text-h4 font-weight-light">I’m a Product Manager who helps business create beautiful, functional products.</h1>
      </div>
      <br>
      <br>
      <div class="font-weight-light"> Here are some of the products and projects ii've helped bring to life. Reach out if you’d like to chat. <v-icon icon="mdi-arrow-down"></v-icon></div>
      <br>

      <v-row>
        <v-col @click="$router.push('/kultralab')" cols="12">
          <v-img
            cover
            src="@/assets/KultraLab_Nav.png"
          >
        </v-img>
          <div class="text-h5 font-weight-bold"> KultraLab
            <v-icon icon="mdi-arrow-right"></v-icon>
          </div>
          <div class="text-h5 font-weight-light"> Product Manager</div>
        </v-col>
        <v-col @click="$router.push('/datalocker')" cols="12">
          <v-img cover src="@/assets/DataLocker_Nav.png"></v-img>
          <div class="text-h5 font-weight-bold"> DataLocker
            <v-icon icon="mdi-arrow-right"></v-icon>
          </div>
          <div class="text-h5 font-weight-light"> Product Manager</div>
        </v-col>
        <v-col @click="$router.push('/centtor')" cols="12">
          <v-img
            
            cover
            src="@/assets/CENTTOR_Nav.png"
          >
        </v-img>
          <div class="text-h5 font-weight-bold"> CENNTOR - Central Authenticator
            <v-icon icon="mdi-arrow-right"></v-icon>
          </div>
          <div class="text-h5 font-weight-light"> Full Stack Developer at BT</div>
        </v-col>
        <v-col @click="$router.push('/spotlight')" cols="12">
          <v-img
            
            cover
            src="@/assets/Spotlight_Nav.png"
          >
        </v-img>
          <div class="text-h5 font-weight-bold"> BGP Spotlight 
            <v-icon icon="mdi-arrow-right"></v-icon>
          </div>
          <div class="text-h5 font-weight-light"> Full Stack Developer at BT</div>
        </v-col>

      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup></script>


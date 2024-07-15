<template>
    <v-container>
        <v-carousel class="w-100" hide-delimiters>
            <v-carousel-item
            @click="$router.push('/kultralab')"
            src="@/assets/KultraLab_Nav.png"
            cover
            >
            <div>
            <h1 class="text-h3 font-weight-bold"> KultraLab - Product Manager</h1>  
            </div>  
            </v-carousel-item>

            <v-carousel-item
            @click="$router.push('/datalocker')"
            src="@/assets/DataLocker_Nav.png"
            cover
            ></v-carousel-item>

            <v-carousel-item
            @click="$router.push('/centtor')"
            src="@/assets/CENTTOR_Nav.png"
            cover
            ></v-carousel-item>
            <v-carousel-item
            @click="$router.push('/spotlight')"
            src="@/assets/Spotlight_Nav.png"
            cover
            ></v-carousel-item>
      </v-carousel>
    </v-container>
</template>
<template>
    <v-container>
        <br>
        <h1 class="text-h4 font-weight-bold">CENTTOR - Central Authenticator</h1>
        <br>
        <v-img cover src="@/assets/CENTTOR_Header.png"></v-img>
        <br>
        <h1 class="text-h5 font-weight-bold">Background</h1>
        <h1 class="text-h5 font-weight-light"> The division of BT I was working in has a number of <a href="https://en.wikipedia.org/wiki/Air_gap_(networking)"> air-gapped</a> networks. Deploying open-source software onto these networks is time consuming and difficult as they have to be vetted and security checked. As expected for a space where security is paramount two-factor authentication (2FA) is a must.</h1>
        <br>
        <br>
        <v-img src="@/assets/CENTTOR_Example2.png"></v-img>
        <br>
        <br>
        <h1 class="text-h5 font-weight-bold">Implimentation</h1>
        <h1 class="text-h5 font-weight-light">I was tasked with creating an easy-to-distribute, secure 2FA application which could be deployed onto airgapped networks. I had one month to create the web-app and needed to allow users to share keys where required. I utlised <a class="text-h5 font-weight-bold">Vue.js</a> to build the UX given it was quick and I was already well veresed in this framework from other projects. I was keen to learn <a class="text-h5 font-weight-bold">GoLang</a> due to its performance and efficency so I built a RESTful API using <a class="text-h5 font-weight-bold">GO and Gin</a>.  I needed to use <a class="text-h5 font-weight-bold"> Active Directory</a> so users could be easily onboarded, I found a package to integrate this with the API. Finally I used <a class="text-h5 font-weight-bold">SQLite</a> for data storage which made it easy to distribute and light.</h1>
        <br>
        <h1 class="text-h5 font-weight-light"> Following successful testing, CENNTOR was deployed and is still in use on certain networks in BT today.</h1>
        <br>
        <v-img src="@/assets/CENTTOR_Example1.png"></v-img>
        <br>


</v-container>

</template>
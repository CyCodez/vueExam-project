<template>
    <div>
        <h1>Home</h1>
          <h2 className='welcome'>Welcome To My Home Page</h2>
        <img :src="profilePic" alt="" />
          <h2>Click The Counter Button To Go To The Counter Page</h2>
          <div class="nav-section">
               <router-Link class="navigate" to="/counter">Counter Page</router-Link>
          </div>
     
    </div>
</template>

<script setup>
import { ref } from 'vue';

const profilePic = ref('https://avatars.githubusercontent.com/u/100401054?s=400&u=ec4d2d39a9e6fdca5b677f9237dcc00cd909f589&v=4" alt="profile_photo" width="150px" height="150px');
</script>

<style>
img{
    border-radius: 15%;
    height: 350px !important;
    width: 300px !important;
}

.navigate{
      background-color:purple;
      font-size: large;
  color: white;
  margin-top: 55px;
  padding: 7px;
  text-decoration: none;
  border-radius: 5px;

}
.nav-section{
    margin-top: 20px;
}
</style>
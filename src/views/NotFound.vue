<template>
   <div>
          <h2 className="error_msg">
            <span class="EP">o</span>oops...
          </h2>
          <img
            :src="ErrorPic"
            alt=""
            class="EI"
          />
        </div>
        <div><h2>Go Back Home</h2></div>
        <div class="imgdiv"><router-Link class="navigate" to="/">Home Page</router-Link></div>
      
</template>

<script setup>
import { ref } from 'vue';

const ErrorPic = ref('https://media.gettyimages.com/id/468164033/vector/error-404.jpg?s=2048x2048&w=gi&k=20&c=RdSTMxRpODdRsEtDcTfAHr7G1ThGS7slpnl40uvJddY=');
</script>

<style>
img{
    width:50%;
   height: 10%;
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
.error{
    color:red;
    }
    .EP {
  font-size: 80px;
}
.EI {
  border-radius: 15px;
}
.error_msg {
  color: rgb(118, 3, 3);
}
.imgdiv{
    margin-top: 30px;
}
</style>

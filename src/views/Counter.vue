<template>
    <div>
        <h1>Counter</h1>
        <h2>Welcome To The Counter Page</h2>
        <p v-if="trackCounter<0" class="red">{{ trackCounter }}</p>
        <p v-else-if="trackCounter>0" class="green">{{ trackCounter }}</p>
        <p v-else="trackCounter=0" class="black">{{ trackCounter }}</p>
     <button @click="incrementCounter">Increment</button>
    <button @click="decrementCounter">decrement</button>
    <button @click="resetCounter">reset</button>
    <button @click="setStateCounter">setvalue by 5</button>
       </div>
       <div class="nav-section">  <router-Link class="navigate" to="/" style="text-decoration: none;">Home page</router-Link></div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        function incrementCounter() {
            store.dispatch('increment', 1)
        }

        function decrementCounter(){
            store.dispatch("decrement", 1)
        }

        function resetCounter(){
            store.dispatch("reset")
        }

        function setStateCounter(){
            store.dispatch("setState", 5)
        }
       
        const trackCounter = computed(() => {
            return store.getters.getCounter
        })
        return {
            trackCounter,
            incrementCounter,
            decrementCounter,
            resetCounter,
            setStateCounter
        }
    }
}
</script>
<style>
body {
  background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
}

h1{color:#254117}
h2{color:#8B0000}


div{
  text-align: center;
  vertical-align: center;
}
button{
  padding:6px;
  margin:20px;
background-color:#11a211;
  color:white;
  font-size: larger;
  border-radius: 10px;
}
button:hover{
    background-color:#006400;
    padding:8px;
}
.red{
    color: red;
    font-size: 40px;
}
.green{
    color:green;
    font-size: 40px;
}
.black{
    color:black;
     font-size: 40px;
}
.input{
    width:150px;
    height: 28px;
    border-radius: 10%;
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
.navigate:hover{
    background-color: #670178;
}
.nav-section{
    margin-top: 20px;
}
</style>

<!-- <template>
    <p>Counter: {{ trackCounter }}</p>
    <button @click="incrementCounter">Increment</button>
    <button @click="decrementCounter">decrement</button>
    <button @click="resetCounter">reset</button>
    <button @click="setStateCounter">setvalue by 5</button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        function incrementCounter() {
            store.dispatch('increment', 1)
        }

        function decrementCounter(){
            store.dispatch("decrement", 1)
        }

        function resetCounter(){
            store.dispatch("reset")
        }

        function setStateCounter(){
            store.dispatch("setState", 5)
        }
       
        const trackCounter = computed(() => {
            return store.getters.getCounter
        })
       


        return {
            trackCounter,
            incrementCounter,
            decrementCounter,
            resetCounter,
            setStateCounter
        }
    }
}
</script> -->






<!-- <template>
    <div>
        <h1>Counter</h1>
        <h2>Welcome To The Counter Page</h2>
        <p v-if="count<0" class="red">{{ count }}</p>
        <p v-else-if="count>0" class="green">{{ count }}</p>
        <p v-else="count=0" class="black">{{ count }}</p>
      <button @click="increment">increase</button>
      <button @click="decrement">decrease</button>
       <button @click="reset">reset</button>
       <div>
        <input type="number" class="input" v-model="setCounter"/> <button @click="setCount">setValue</button>
       </div>
       <div class="nav-section">  <router-Link class="navigate" to="/" style="text-decoration: none;">Home page</router-Link></div>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
    setup() {
        const state = reactive({
            count: 0,
            setCounter:""
        });
        return {
            ...toRefs(state)
        }
    },
    methods: {
        increment() {
            this.count++
        },
         decrement() {
            this.count--
        },
         reset() {
            this.count=0;
            this.setCounter=""
        },
        setCount(){
            if(this.setCounter===""){
                return this.count=0
            }
            this.count=this.setCounter
        }
    }
}
</script>
<style>
body {
  background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
}

h1{color:#254117}
h2{color:#8B0000}


div{
  text-align: center;
  vertical-align: center;
}
button{
  padding:10px;
  margin:20px;
background-color:#11a211;
  color:white;
  font-size: larger;
  border-radius: 10px;
}
.red{
    color: red;
    font-size: 40px;
}
.green{
    color:green;
    font-size: 40px;
}
.black{
    color:black;
     font-size: 40px;
}
.input{
    width:150px;
    height: 28px;
    border-radius: 10%;
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
</style> -->
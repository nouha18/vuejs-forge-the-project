/* eslint-disable vue/no-parsing-error */
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
     <h1 :style="{color:$store.state.colorCode}">Hello, my name is {{this.$store.state.user.name}}</h1>
      <span>{{this.$store.state.counter}}<sup>2</sup>= {{$store.getters.squareNumber}}</span>
      <br/>
  <div>
    
    <button type="button" @click="$store.dispatch('increment')" class="btn">+</button>
    <button type="button" @click="$store.dispatch('decrement')" class="btn">-</button>
   
    </div>
    <br/>
    <div>
    <input type="text"
    placeholder="enter a color"
     v-model="colorCode"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCounter',
  props: {
    msg: String,
   },
  computed:{
    colorCode:{
       get(){
       return this.$store.state.colorCode
      },
      set(newvalue){
        this.$store.dispatch('setcolorCode',newvalue)
      },
    }
  
 
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

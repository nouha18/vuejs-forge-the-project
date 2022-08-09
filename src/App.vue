<template>
<NavBar/>
  <h2>TaskBoard</h2>
  <MyAlert type="default" msg="Post created Successfully!!"/>
    <MyAlert type="primary" msg="default updated!!"/>

       <MyDesk/>
       <MyFooter/>
       
  <!-- <MyCounter msg="Welcome to Your Counter App"/> -->
</template>

<script>
//import MyCounter from './components/MyCounter.vue'
import NavBar from './components/NavBar.vue'
import MyFooter from './components/footer.vue'
import MyAlert from './components/Alert.vue'
import MyDesk from './components/boards/BoardDesk.vue'
export default {
  name: 'App',
  components: {
   // MyCounter,
   MyDesk,
       NavBar,
       MyAlert,
       MyFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

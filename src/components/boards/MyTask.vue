/* eslint-disable vue/no-parsing-error */
<template>
 <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
 />

<div class="container">
  
 <div class="Task-box">
  <h1>{{ title }}</h1>
  <section class="dropdown">
  <span> &#x270E; </span>
  <div class="dropdown-content">
    <ul >
    <li style="padding:10px; border:1px solid #ccc;width:80%;"><button class="btn btn-primary" style="border:none;background-color: #fff;" @click="onFocus">Edit Task</button>
    </li>
    <br/>
    <li style="padding:10px; border:1px solid #ccc;width:80%;">
    <button class="btn btn-primary" style="border:none;background-color: #fff;" @click="onFocus">Delete Task</button>
    </li>
 </ul>
  </div>
   </section>
   
    {{this.date}}
    <p>
    <br/>
    {{description}}
    <a href="#" target="_blank" rel="noopener">More...</a>.
    </p>
    <br/>
 
<div class="w3-light-grey w3-tiny bars">
  <div class="w3-container w3-green w3-center" style="width:45%">45%</div>
</div>
  </div>
   
 </div>
 
</template>

<script>
export default {
  name: 'MyTask',
  components: {

  },
  props: {
    title: String,
    description: String,
  },
   data: function() {
   return{ date:"" || null,
   events:[],
        items: [
        "My Profile",
        "Friend Requests",
        "Account Settings",
        "Support",
        "Log Out",
      ],
     arrays: [
        {
            
          actionName: "Undo",
          icon: "undo",
        
        },
        {
          actionName: "edit",
          icon: "copy",
        },
        {
          actionName: "Account Settings",
          icon: "paste",
        },
        ]
   }
   },
     computed: {
    eventsList() {
      console.table(this.events); 
      return this.events;
    },
    
  },

  mounted(){
    if(this.localStorage.datetime){
      console.log(this.localStorage.datetime)

    }

  },
   methods: {
    onItemClick() {
      this.events.unshift("Item Click event triggered");
    },
    onFocus() {
      this.events.unshift("Focus event triggered");
    },
    onBlur() {
      this.events.unshift("Blur event triggered");
    },
    onOpen() {
      this.events.unshift("Open event triggered");
    },
    onClose() {
      this.events.unshift("Open event triggered");
    },
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bars{
  position: absolute;
  margin-left:-280px;
  margin-top:0px;
  transform:rotateZ(90deg);
  width:130px;
}
.dropdown {
  position: relative;
    margin-top: -80px;
  margin-left: 220px;
  display: flex;
  max-width:110px;
  width:40px;
  height:40px;
  border-radius: 10px;
  align-items: center;
  justify-content:center;
  text-align: center;
  border:1px solid #c8c8c8;
  box-shadow:6px 0 6px #c2c2c2;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 10px;
  z-index: 1;
  
}
.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
    background-color: #f9f9f9;
    margin-left:-20px;
    text-align: left;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border: 1px solid rgba(0,0,0,0.8);
 
  z-index: 1;
  font-family: "Helvetica Neue",Helvetica;
  font-size: 12px;
  color: #444;

}
button{
  width: 100%;
  height: 100%;
}
button:focus{
 box-shadow:inset 8px 8px 16px 8px #999,5px 8px 5px 5px #f8f8f8;

}
.container {
  background-color: #ED61EB;
  width:300px;
}
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
.Task-box{
  border: 2px solid #222;
  background-color: #ffff;
border-radius:5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10px;
margin-bottom: 10px;
min-width:300px;
max-width:50vw;

}
.Task-box:hover{
transition:  0.8s ease-in;
transform: rotateZ(2deg);
transform-origin:0 0 0;
background-color:#e8d7d7;
}
</style>

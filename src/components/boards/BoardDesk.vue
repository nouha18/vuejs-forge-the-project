<script>
import MyKDialog from "../MyDialog.vue"
//import { ref } from 'vue'
import MyTask from './MyTask.vue'
export default{
    name:"MyDesk",
components:{
 'k-dialog': MyKDialog,
MyTask
},
    data: function () {
        return {
            visibleDialog: false,
            color:"",
            bgkcolor:"",
            title:"",
            description:"",
            fromvalue:"",
            tovalue:"",
            listk:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}],
        };

    },
  
    methods: {
      toggleDialog() {
      this.visibleDialog = !this.visibleDialog;
      localStorage.setItem("toggle",this.visibleDialog);
        },
 
    }
}
</script>

<template>
<main class="actionboard">
<section style="text-align:center; border-top:1px solid #9DEE9D;border-bottom:1px solid #9DEE9D;padding:10px;">
 <img src="https://i0.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?ssl=1" style="width:70px;height:70px;border-radius:70px;"/>
 <br/>
<p style="text-align:center;margin-top:5px;padding-bottom:10px">Admin session</p>
</section>
<button class="btn-add"  v-if="!visibleDialog" @click="toggleDialog">Add+</button>
</main>

<k-dialog v-if="visibleDialog" :visibleDialog="visibleDialog"  @click="toggleDialog"  style="background:#FFCEB8;padding-bottom:40px;">
</k-dialog>
<div class="k-dialog-task">

<div v-for="task in listk" :key="task.id">
<MyTask title="task title" description="task description"/>
</div>
  <section id="boards"></section>

 </div>
</template>


<style scoped>
html{
    scroll-behavior: smooth;
}
#boards{
    width: 100%;
    height: 100vh;
background-color:#E9F06B;
}

.btn-add{
    background-color:#fff;
    border:2px solid #ff5323;
    width:140px;
    height:50px;
    cursor:pointer;
    margin-top: -50px;
    font-size:22px;
    font-weight:bold;
    color:#ff5323;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px
}

.btn-add:hover{
background-color:#ff9353;
}

.btn-add:after{
position:absolute;
width:0;
height:0;
left:350px;
top:50px;
border-top : 87px solid transparent;
border-right : 150px solid red;
border-bottom : 63px solid transparent;
}
.k-dialog-task{
width:100vw;
max-width:100vw;
height:auto;
justify-content:space-around;
min-height:50vh;
background-color:#FBEEDE;
display: flex;
flex-wrap: wrap;
}
.actionboard{
display: flex;
position:relative;
flex-direction: row;
margin-bottom:10px;
margin-top:-25px;
width: 90vw;
margin-left: 50px;
align-items: center;
justify-content:space-between;

}


</style>
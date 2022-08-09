<script type="text/javascript">
import { DateTimePicker  } from '@progress/kendo-vue-dateinputs';

export default{
    name:"MyKDialog",
    props:{
        visibleDialog:String,
    },
   components:{
 
  'datetimepicker': DateTimePicker,
 //'kendo-colorpicker': ColorPicker,
},
   data: function () {
        return {
            visible: localStorage.getItem("toggle"),
            checkinValidationMessage:"error time focused",
            color:"",
            bgkcolor:"",
            title:"",
            description:"",
            focusedDate:new Date(),
            startdate:new Date(),
            tovalue:""
        };

    },


  methods: {
      toggleDialog() {
        if(this.visible){
        if(this.bgkcolor == "" || this.title== "" ||this.description== "" || this.fromvalue== "" ||this.tovalue == ""){
        this.visible = true;
          }
          else{ 
       console.log('send props',this.bgkcolor);
       console.log('send props',this.title);
       console.log('send props',this.description);
       console.log('send props',this.fromvalue);
       console.log('send props',this.tovalue);
       this.visible = !this.visible;
          }
      }
    },
    CancelDialog(){
    this.visible= false;
   },
   handleChange () {
    alert(this.startdate.getFullYear(),this.startdate);
     localStorage.datetime = this.startdate
   },
        setColortoRed () {
   this.bgkcolor = "#EF5350";
        },
        setColortoBlue () {
   this.bgkcolor = "#ACDCF0";
        },
        setColortoGreen () {
   this.bgkcolor = "#A1D3B2";
        },
        setColortoYellow () {
   this.bgkcolor = "#EEFEAC";
        },
        setColortoMoutard () {
   this.bgkcolor= "#dcf344";
        },
        setColortoPink () {
        this.bgkcolor = "#FDBFAB";
      },
    }
}
</script>

<template>
<div class="kdialog" :visibleDialog ="{visible}">
<section class="paperdialog">
    <label for="create">
    <input type="text" name="create"  v-model="title" placeholder="Title of Task" style="margin-left:38px;padding-left:12px; position:relative;border: 2px solid #b1b1b1 ;border-radius:15px; height:30px;width:70%;outline: none;font-size:16px;"/>
    <br/>
    </label>
    <p :style="{ margin: '25px', textAlign: 'center',color: '#006667'}">Complete form TAsks Carefully
    <a href="#" target="_blank" rel="noopener">More...</a>.
    </p>

    <label for="description">
    <textarea id="description" name="description "
    v-model="description"
    rows="8" cols="40">
    precise task description...
    </textarea>
    </label>
            <div class="date-task-wrapper">
                <section>
                 <label for="From" style="margin-top:-12px;">From</label>
                 <datetimepicker
                  :min="now"
                  :value="startdate"
                  :validation-message="startdate !==null? checkinValidationMessage: 'try again'" 
                  :focused-date="focusedDate" :default-value="new Date()"
                   @change="handleChange" 
                   class="datepicker" :style="{ width: '260px' }" />
                </section>
                <section>
                <label for="To" style="margin-top:-12px;">To</label>
               <datetimepicker
                  :min="now"
                  :value="startdate"
                  :validation-message="startdate !==null? checkinValidationMessage: 'try again'" 
                  :focused-date="focusedDate" :default-value="new Date()"
                   @change="handleChange" 
                   class="datepicker" :style="{ width: '260px' }" /> 
                   </section>
                </div>   
                
                <div id="color-task" class="color-bgk" style="background:transparent;width:80%; margin:4px;">
                <p style="text-align:center;margin-left:90px;">--Choose background Color for TaskBoard--</p>
                <label for="choose TaskColor" style="display:flex;flex-direction:row;align-items:center; justify-content:space-around;width:100%;margin-left:25px;">
                <a href="#" class="red-task" @click="setColortoRed" ></a>
                <a href="#"  class="blue-task" @click="setColortoBlue" ></a>
                <a href="#"  class="green-task" @click="setColortoGreen" ></a>
                <a href="#"  class="yellow-task" @click="setColortoYellow" ></a>
                <a href="#"   class="pink-task" @click="setColortoPink" ></a>
                <a href="#"  class="moutard-task" @click="setColortoMoutard"></a>
</label>
<br/>
</div>
<section  class="taskaction">
<button style="border: 2px solid #c2c2c2; width:20vw;height:40px;border-radius:15px;font-weight:bold;font-size:18px;color:#999;" class="k-cancel" @click='CancelDialog'>Cancel</button>
<button  style="background-color=#c2c2c2;width:20vw;height:40px;border-radius:15px;color:#FCA286;border: 2px solid #FCA286;font-weight:bold;font-size:18px; cursor:pointer;" @click='handleChange'>Create</button>
</section>
</section>
</div>
</template>

<style scoped>
.k-cancel:focus{
box-shadow:1px 1px 1px 1px #c2c2c2;
cursor: pointer;
}
.date-task-wrapper{
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-self: center;
}
.date-task-wrapper > section{
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-self: center;
}
.kdialog{
    position: absolute;
    width:100vw;
    height:120vh;
    padding-top:80px;
    margin-top:-299px;
    background-color: #f7aa11;
    z-index:999;
    align-items: center;
    justify-content: center;
}
.paperdialog{
     width:50%;
     max-width:50vw;
     padding:10px;
     min-height:60vh;
     position: relative;
     border-radius: 15px;
     border: 1px solid #ccc;
     box-shadow:6px 0 6px #b2b2b2;
     background-color: #EFDFFE;
     left: 25%;
     top:-20px;

}
.red-task,.green-task,.blue-task,.yellow-task,.pink-task,.moutard-task{
width:30px;
height:30px;
border-radius:30px;
border:2px solid #fff;
box-shadow:6px 0 6px #b8b8b8,inset 1px 1px #fff;
}
.red-task:hover{
border:2px solid #c2c2c2;
box-shadow:6px 0 6px #c2c2c2,inset 1px 1px #c2c2c2;
}
.green-task:hover{
border:2px solid #c2c2c2;
box-shadow:6px 0 6px #c2c2c2,inset 1px 1px #c2c2c2;
}
.blue-task:hover{
border:2px solid #c2c2c2;
box-shadow:6px 0 6px #c2c2c2,inset 1px 1px #c2c2c2;
}
.yellow-task:hover{
border:2px solid #c2c2c2;
box-shadow:6px 0 6px #c2c2c2,inset 1px 1px #c2c2c2;
}
.pink-task:hover{
border:2px solid #c2c2c2;
box-shadow:6px 0 6px #c2c2c2,inset 1px 1px #fff;
}
.moutard-task:hover{
border:2px solid #c2c2c2;
box-shadow:6px 0 6px #c2c2c2,inset 1px 1px #fff;
}
.red-task{
background-color:#EF5350;
}
.moutard-task{
    background-color:#dcf344;
}
.green-task{
background-color:#A1D3B2;
}
.blue-task{
background-color:#ACDCF0;
}
.yellow-task{
background-color:#EEFEAC;
}
.pink-task{
background-color:#FDBFAB;
}

.datepicker{
    width:100%;
    height:40px;
    padding:6px;
    position:relative;
    left:3px;
    align-self:center;
    justify-content:center;
    margin-bottom:5px;
    margin-top:5px;

}
.action-board {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
}

</style>
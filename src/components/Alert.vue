<template>
<div  :class="{ primary: true, 'notification': false }">
{{msg}}
<button type='button' class='delete'></button>

</div>


</template>
<script>
export default {
    name:"MyAlert",
    props: {
        msg:String,
        types:{
      type: String,
      default: 'default'
    },
    notification:String,
    }
}
</script>

<style scoped>
.delete{
    width:28px;
    height:6px;
    border:none;
    background-color:#c8c8c8;
    transform: rotate(45deg);
}
.delete:focus, .delete:focus::after{
 background-color:red;
}
.delete::after {
    content: "|";
    position:relative;
    width:40px;
    border:none;
    height:2px;
    color:transparent;
    font-size: 24px;
    font-weight:50px;
    background-color:#c8c8c8;
    top:-12px;
}
.primary{
    left:0;
    z-index:10;
    display:flex;
    width:350px;
    height:40px;
    top:250px;
    color:#222;
    position:absolute;
    align-items:center;
    flex-direction: row;
    justify-content:space-around;
    transition: all 0.2s ease-in-out;
    border:2px solid #b1b1b1;
    border-radius: 15px;
    box-shadow: 2px 5px 5px 2px rgba(0,0,0,0.75), inset 1px 2px 2px 0 #c2c2c2;
    background-color:#127458;
    transform: translateX(5px);
}
.notification, .default{
    left:0;
    z-index:10;
    display:flex;
    width:350px;
    height:40px;
    top:250px;
    color:#222;
    position:absolute;
    align-items:center;
    flex-direction: row;
    justify-content:space-around;
    transition: all 0.2s ease-in-out;
    border:2px solid #b1b1b1;
    border-radius: 15px;
    box-shadow: 2px 5px 5px 2px rgba(0,0,0,0.75), inset 1px 2px 2px 0 #c2c2c2;
    background-color:#fff;
    transform: translateX(5px);
}

</style>

<template>
  <div class="sidemenu">
  
  <section class="divider"></section>
    <ul>
      <li> <router-link to="/Tasks" style="--fa-animation-duration: 0.5s;text-decoration-color: transparent;text-decoration: none; color:#ff5323;"><i class="fa-solid fa-heart fa-beat"  >Link Pages</i> </router-link></li>

      <li><router-link to="#Boards" style="color:#ff5323; text-decoration-color: transparent;text-decoration: none;"><span >Boards</span></router-link></li>

      <li><a href="#" style="color:#ff5323;text-decoration-color: transparent;text-decoration: none;"><span >Contacts</span></a></li>
        <font-awesome-icon icon="fa-solid fa-user-secret" />

    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideMenu",
  data:() => {
      return {
             isBannerVisible: false,
   
      }
  }
});
</script>

<style scoped>
.sidemenu {
  display: flex;
  position: absolute;
  flex-direction: column;

  background-color: #fff;
  z-index: 999;
  top:80px;
  left: 0;
  padding-top: 70px;
  padding-left: 20px;
  width: 350px;
  height:100%;
  border:1px 1px 6px solid #fcc677;
  box-shadow: 0 0 5px #fcc677;
  font-size: 32px;
  font-weight: italic;
  font-family: "arial", sans-serif;
}
.divider{
    width:360px;
    height:1px;
    background-color: #ff9c23;
    margin-left: -10px;
}
.sidemenu :hover {
  padding-left: 10px;
  color: #1e000a;
  font-size: 27px;
  font-weight: bold;
  ;

}
.sidemenu :hover ul > li {
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  background-color: ff5323;
    text-decoration-color: transparent;
  
  width: 70px;
  height: 40px;
  padding: 5px;
  color: #cc2;
  font-size: 24px;
  font-weight: bold;
}

.sidemenu > ul {
  padding-left: 10px;
  padding-right: 10px;
  background-color: transparent;
  width: 90%;
  height: auto;
  padding: 5px;
  color: #6f1940;
  font-size: 24px;
  font-weight: bold;
}

 ul > li > router-link{
     text-decoration: none;
       text-decoration-color: transparent;
     }
 
 ul > li {
  padding-left: 10px;
  padding-right: 10px;
  background-color: transparent;
    text-decoration-color: transparent;
  align-items: center;
  justify-content:center;
  text-align: center;
  list-style: none;
  text-decoration: none;
  width: 100%;
  height: 50px;
  padding-top: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: 1px solid #d39eb0;
  color: ff5323;
  font-size: 24px;
  font-weight: bold;
}
.sidemenu >h1{
    margin-top:-39px;
    margin-bottom:5px;
color:#FFF176;
}
h1 >span{
 color:#ff0000;

}
.sidemenu > .vuejsforge{
    position:relative;
    left:-35px;
    margin-top:-19px;
}
</style>

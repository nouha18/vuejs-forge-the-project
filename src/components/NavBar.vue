/* eslint-disable prettier/prettier */
<script>
import SideMenu from "./SideMenu";
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
  components: { SideMenu},
  mounted() {
    //this.$router.push(this.items[0].data);
  },
  data() {
    return {
      isBannerVisible:false,
      selectedId: 0,
      expanded:false,
      position: "start",
      mode: "push",
    };
  },
  methods: {
    onSelect(e) {
      this.selectedId = e.itemIndex;
      this.$router.push(this.items[e.itemIndex].data);
    },
    handleClick() {
      this.expanded = !this.expanded;
    },
  },
});
</script>
<template>
  <div>
    <div class="container-toolbar">
    <div class="custom-toolbar">
    <div class="navbar" :class="isBannerVisible ? 'active' : 'sidemenu'">
    <button
        class="navShow"
        :class="isBannerVisible ? 'clockbox' : 'navShow'"
        type="submit"
        @click="isBannerVisible = !isBannerVisible">
      
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       </button>
       </div>
       </div>
      <img class="logo" src="https://vuejsforge.com/images/logo.svg" />
      <div style="background-color:transparent;">
        <button  style="background-color:#fff;;border:none;font-weight:bold;font-family:forte;font-size:20px;padding-right:10px;padding-left:10px" @click="handleSubmit" >
        <router-link to="login" style="text-decoration:none;"><span style="color:#ff5323;">LogOut</span></router-link>
        </button>
      </div>
    </div>
    <SideMenu v-if="isBannerVisible" id="banner" />
  
  </div>
</template>

<style scoped>
.logo {
  width: auto;
  height: 50px;
}
.navShow {
  width: 40px;
  height: 40px;
  display: flex;
  left: 90px;
  border:none;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: transparent;
}
.navShow:focus .clockbox {
  transition: all 0.4 ease-out;
  border-radius: 20%;
  transform: rotateZ(60deg) rotateX(450deg);
}
.navShow:focus .active {
  transition: all 2s ease-out;
  transform: translateX(150px) skewY(2px);
}
.navShow:focus > span:nth-child(1) {
  transition: all 0.4 ease-out;
  transform-origin: center center;
  transform: scale(1.2);
}
.navShow:focus > span:nth-child(2) {
  transition: all 0.5 ease-out;
  transform-origin: center center;
  transform: scale(0.8);
}
.navShow:focus > span:nth-child(3) {
  transition: all 0.7 ease-out;
  transform-origin: center center center;
  transform: scale(0.4);
}
.navShow:focus > span:nth-child(4) {
  transition: all 0.4 ease-out;
  transform-origin: center center center;
  transform: scale(0.2);
}
.navShow > span:nth-child(1) {
  width: 40px;
  height: 5px;
  border-radius: 15px;
  position: relative;
  margin-top: 0px;
  margin-bottom: 3px;
  background-color: #f7aa11;
}
.navShow > span:nth-child(2) {
  width: 40px;
  height: 5px;
  border-radius: 15px;
  position: relative;
  margin-bottom: 3px;
  padding-top: 0px;
  background-color: #f7aa11;
}
.navShow > span:nth-child(3) {
  width: 40px;
  height: 5px;
  border-radius: 15px;
  margin-bottom: 3px;
  position: relative;
  padding-top: 0px;
  background-color: #f7aa11;
}
.navShow > span:nth-child(4) {
  width: 40px;
  height: 5px;
  border-radius: 15px;
  margin-bottom: 3px;
  position: relative;
  padding-top: 0px;
  background-color: #f7aa11;
}
.loginbox{
  background-color:#f7aa11;
  border-radius:30px;
  color:#222;
  display:flex;
  padding-top:5px;
  padding-bottom:5px;
  padding-right:15px;
  width:110px;
  flex-direction:row;
  justify-content: center;
  align-items: center;

}
.container-toolbar {
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  height:50px;
  max-width:100vw;
  margin-top:-40px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #fcc677;
  justify-content: space-between;
}

</style>

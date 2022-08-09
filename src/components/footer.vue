<template>
    <footer id="footer"  v-if="this.scrollpx > 200">
<section class="socialmedia">
button social media
</section>

<section class="contacts">
 <h1>Contacts: 125-84587548</h1>
 <h4>Emailcontact àgmail.com</h4>
</section>
    </footer>
</template>
<script type="text/javascript">

export default{
name: "MyFooter",
data() {
return {

  showFooter: false,
      lastScrollPosition: 0,
      scrollpx:0,
};
},
methods: {
    handleScroll() {
        this.scrollpx = window.scrollY;
      },
   onScroll(){
     
   const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
   if (currentScrollPosition < 0) {
      this.showFooter = false
    }
  this.showFooter = currentScrollPosition > this.lastScrollPosition
  this.lastScrollPosition = currentScrollPosition
  console.log(this.showFooter)
  //   if (Math.abs(currentScrollPosition - this.lastScrollPosition) > 80) {
  //     this.showFooter=true;
  //   }
  
},
},

created () {
   window.addEventListener('scroll', this.handleScroll)
      this.scrollpx = window.scrollY;
        console.log( window.scrollY);
},
  
// beforeDestroy () {
//   window.removeEventListener('scroll', this.onScroll)
//}

}

</script>
<style scoped>
    #footer{
        width: 100%;
        height: 150px;
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        bottom: 0;
        left: 0;
        font-family:forte;
        font-size: 18px;
        color:#222;
        background-color: #fde0b0;  
         box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;

    }
.footerhidden {
  box-shadow: none;
  transform: translate3d(-100%,0, 0);
}
</style>
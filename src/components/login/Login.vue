<template>
<div class="container">
    <k-form
      @submit="handleSubmit">
      <formcontent />
   </k-form>
   </div>
</template>

<script>
import { Form } from "@progress/kendo-vue-form";
import FormContent from './FormContent.vue';

export default {
  name:"MyLogin",
    components: {
      'k-form': Form,
      'formcontent': FormContent
    },
    methods: {
      handleSubmit (dataItem) {
         alert(JSON.stringify(dataItem, null, 2));
      }
    }
};

</script>
<style scoped>
.container {
  width:100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background-color:#2c3e50;
  padding-top:98px;
  margin-left:-30px;
  margin-top:-270px;
  z-index:100;

}
</style>
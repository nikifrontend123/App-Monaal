<template>
  <div style="padding-bottom: 80px;">
      <hr style="margin: 1px 0; opacity: 1;" class="my-2">
<div  v-for="(ready, index) in readys" :key="index">
    <div class="d-flex container">
      <div class="left"><img src="../../assets/g1.png"  style="border-radius: 50px; width: 50px; height: 50px;" alt=""></div>  
    <div class="right ms-2">
      <div class="top ">
          <p class="m-0">{{ready.tag}}</p>
          <p class="m-0">Ready: {{ready.num}}<i class="bi bi-arrow-up-short text-danger"></i>{{ready.num1}}<i class="bi bi-arrow-down-short text-success"></i>{{ready.num2}}</p>
      </div>
      <div class="bottom"></div>
      <StageStepper stage="2"></StageStepper>
    </div>
  </div>
  <hr style="margin: 1px 0; opacity: 1;" class="my-2">
  </div>
  </div>
</template>

<script> 
import StageStepper from '../StageStepper.vue'
  export default {
    components:{
      StageStepper
    },
      computed:{
          readys() {
          return this.$store.getters.getReadys;
      }
      }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div style="padding-bottom: 80px;">
        <div class="heading container">
           <div class="d-flex justify-content-between mt-2">
            <img src="../../assets/fab1.png" width="60" alt="">
            <p class="m-0 fs-4 d-flex justify-content-center align-items-center">Jyoti Garments</p>
            <div class="icons d-flex justify-content-center align-items-center">
                <i class="bi bi-telephone ms-3 fs-4"></i>
                <i class="bi bi-whatsapp ms-3 fs-4"></i>
            </div>
           </div>
        </div>
        <hr style="margin: 3px 0; opacity: 1;" class="my-2">
      <div class="">
        <ul class="nav nav-pills d-flex justify-content-between px-1" id="pills-tab" role="tablist">
          <li role="presentation">
            <button class="btn btn-outline-secondary active" style="font-size: 15px;" id="pills-home-tab"
              data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
              aria-selected="true">Ready</button>
          </li>
          <li role="presentation">
            <button class="btn btn-outline-secondary" style="font-size: 15px;" id="pills-profile-tab" data-bs-toggle="pill"
              data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
              aria-selected="false">Coming</button>
          </li>
          <li role="presentation">
            <button class="btn btn-outline-secondary" style="font-size: 15px;" id="pills-contact-tab" data-bs-toggle="pill"
              data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
              aria-selected="false">Running</button>
          </li>
          <li role="presentation">
            <button class="btn btn-outline-secondary" style="font-size: 15px;" id="pills-step-tab" data-bs-toggle="pill"
              data-bs-target="#pills-step" type="button" role="tab" aria-controls="pills-step"
              aria-selected="false">Complete</button>
          </li>
        </ul>
        <hr style="margin: 3px 0; opacity: 1;" class="my-2">
        <div class="sec d-flex">
            <div class="btn">Reset</div>
            <input type="search" placeholder="Search">
            <div class="btn">Sort</div>
            <div class="btn">Filters</div>
        </div>
        <div class=""></div>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <FabReady></FabReady>
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <ComingPage></ComingPage>
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <RunningPage></RunningPage>
          </div>
          <div class="tab-pane fade" id="pills-step" role="tabpanel" aria-labelledby="pills-step-tab">
            <CompletePage></CompletePage>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import FabReady from './FabReady.vue';



 
  
  export default {
    components: { FabReady }
}
  </script>
  
  <style lang="scss" scoped></style>
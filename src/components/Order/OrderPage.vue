<template>
    <div style="padding-bottom: 80px;">
        <div class="heading text-center container">
            <h3>Order Metro Fashion Ordering App</h3>
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
        <div class="sec d-flex justify-content-between w-100 ">
            <div class="btn">Reset</div>
            <input class="w-50" type="search" placeholder="Search">
            <div class="btn">Sort</div>
            <div class="btn">Filters</div>
        </div>
        <div class=""></div>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <ReadyPage></ReadyPage>
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
import ReadyPage from './ReadyPage.vue';
import ComingPage from './ComingPage.vue';
import RunningPage from './RunningPage.vue';
import CompletePage from './CompletePage.vue';

 
  
  export default {
    components: { ReadyPage,ComingPage,RunningPage,CompletePage }
}
  </script>
  
  <style lang="scss" scoped></style>
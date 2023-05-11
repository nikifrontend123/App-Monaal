<template>
    <div class="position-relative w-100">
        <div class="p-3 bg-dark text-white fixed-top">
           <div class="d-flex justify-content-between">
               <div class="d-flex align-items-center">
                   <i @click="goBack" class="bi bi-chevron-left me-2"></i>
                   <span>{{godown.name}}</span>
               </div>
           </div>
       </div>
        <div class="position-absolute bg-info" style="width: 30%; left: 0; margin-top:60px" >
            <div id="list-example" class="list-group text-center">
                <div class="position-fixed h-100 overflow-y-scroll">
                    <RackList v-for="(rack, index) in godown.racks" :key="index" :rack="rack" ></RackList>
                </div>
            </div>
        </div>
        <div class="position-absolute " style="width: 70%; right: 0;">
            <div>
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true"
                    class="scrollspy-example " tabindex="0">
                    <RackItemList v-for="(rack, index) in godown.racks" :key="index" :rack="rack" :godown="godown"></RackItemList>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RackItemList from '../components/StoreDetail/StoreGowdown/RackItemList.vue';
import RackList from '../components/StoreDetail/StoreGowdown/RackList.vue';

export default {
    components: { RackList, RackItemList },
    computed: {
        godown() {
            let godownId = this.$route.params.godownId;
            return this.$store.getters['mystore/getGodown'](godownId)
        },
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped></style>
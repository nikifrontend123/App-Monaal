<template>
    <div>
        <div class="d-flex justify-content-between border-bottom px-2">
            <RouterLink to="/GateKeeper">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center  py-2">Gate Keeper</h4>
            <div class=""></div>
        </div>
        <GateKeeperLinks active="DeliveriesPage"></GateKeeperLinks>
        <div v-for="(deliver, index) in deliveries" :key="index" class="container border-bottom">
            <div class="d-flex w-100 py-2">
                <div class="border border-2 border-dark rounded-circle">
                    <p class="m-0 text-center d-flex justify-content-center align-items-center fw-bold"
                        style="width: 60px; height: 60px; border-radius: 50px;">{{ deliver.date }}</p>
                </div>
                <div class="">
                    <div class="w-100">
                        <p class="m-0 ps-2  fw-bold">{{ deliver.text }}</p>
                    </div>
                    <div class="d-flex w-100">
                        <div class="">
                            <p class="m-0 ps-2 ">CID: {{ deliver.cid }}</p>
                        </div>
                        <div class="px-2 text-center">
                            <p class=""><i class="bi bi-record-circle-fill me-1"></i>{{ deliver.roll }}</p>
                        </div>
                        <div class="px-2 text-center">
                            <p class=""><i class="bi bi-stack me-1"></i>{{ deliver.stock }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GateKeeperLinks from '../../components/Navbar/GateKeeperLinks.vue'
export default {
    components:{
        GateKeeperLinks
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        deliveries() {
            return this.$store.getters.getDeliveries;
        }
    }

}
</script>

<style lang="scss" scoped></style>
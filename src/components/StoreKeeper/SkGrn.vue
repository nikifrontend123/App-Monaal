<template>
    <div>
        <div class="d-flex border-bottom justify-content-between px-2">
            <RouterLink to="/StoreKeeper">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center fw-bold py-2">Store Keeper</h4>
            <div class=""></div>
        </div>
        <StoreKeeperLink active="SkGrn"></StoreKeeperLink>
        <div v-for="(shipment, index) in shipments" :key="index" class="container border-bottom">
            <RouterLink :to="'/GrnDetail/' + shipment.id" class="text-decoration-none text-dark">

                <div class="d-flex w-100 py-2">
                    <div class="border border-2 border-dark rounded-circle">
                        <p class="m-0 text-center d-flex justify-content-center align-items-center fw-bold"
                            style="width: 60px; height: 60px; border-radius: 50px;">{{ shipment.date }}</p>
                    </div>
                    <div class="">
                        <div class="w-100">
                            <p class="m-0 ps-2  fw-bold">{{ shipment.text }}</p>
                        </div>
                        <div class="d-flex w-100">
                            <div class="">
                                <p class="m-0 ps-2 ">CID: {{ shipment.cid }}</p>
                            </div>
                            <div class="px-2 text-center">
                                <p class=""><i class="bi bi-record-circle-fill me-1"></i>{{ shipment.roll }}</p>
                            </div>
                            <div class="px-2 text-center">
                                <p class=""><i class="bi bi-stack me-1"></i>{{ shipment.stock }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </RouterLink>
            </div> 
    </div>
</template>

<script>
import StoreKeeperLink from '../Navbar/StoreKeeperLink.vue';

export default {
    components: { StoreKeeperLink },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        shipments() {
            return this.$store.getters['myshipment/getShipments'];
        }
    }
}
</script>

<style lang="scss" scoped></style>
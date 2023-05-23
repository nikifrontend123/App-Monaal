<template>
    <div>
        <div class="d-flex border-bottom justify-content-between px-2">
            <RouterLink to="/StoreKeeper">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
        <h4 class="text-center fw-bold py-2">Store Keeper</h4>
        <div class=""></div>
        </div>
        <StoreKeeperLink active="SkGdn"></StoreKeeperLink>
        <div v-for="(gdn, index) in gdns" :key="index">
            <RouterLink to="/RackOut" class="text-decoration-none">
                <div class="d-flex justify-content-between">
                    <div class="d-flex my-2">
                        <div class="border border-2 border-dark rounded-circle">
                            <img :src="`${publicPath}${gdn.img}`" style="width: 60px; height: 60px; border-radius: 50px;">
                        </div>
                        <div class=" align-items-center text-dark ">
                            <p class=" m-0 ps-2  fw-bold">{{ gdn.name }}</p>
                            <p class=" m-0 ps-2 ">OID: {{ gdn.oid }}</p>
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
        gdns() {
            return this.$store.getters.getGdns;
        }
    }
}
</script>

<style lang="scss" scoped></style>
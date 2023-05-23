<template>
    <div>
        <div class="topnav d-flex justify-content-between container py-2">
            <div class="d-flex">
                <RouterLink to="/PurchasesPage">
                    <i class="bi bi-arrow-left-short text-dark fs-3"></i>
                </RouterLink>
                <!-- <i class="bi bi-person-circle fs-3 ms-2"></i> -->
                <RouterLink to="/ProfileDetail" style="text-decoration: none;">
                    <p class="bi bi-person-circle m-0 fw-bold fs-5 ms-2 text-dark"><span class="ms-2">Himanshu</span></p>
                </RouterLink>
            </div>
            <div class="d-flex">
                <div @click="test">
                    <BtnChange :design="dd"></BtnChange>
                </div>
                <!-- <i class="bi bi-search fs-3 ms-2"></i> -->
            </div>
        </div>
        <hr style="margin: 1px 0; opacity: 1;">
        <p class=" m-0 fs-4 text-center fw-bold border-bottom">Purchaser</p>
        <DetailNavLink active="New"></DetailNavLink>
        <ClothCard :design="dd" :chatss="chatss"></ClothCard>
    </div>
</template>

<script>
import BtnChange from '../Cards/BtnChange.vue';
import ClothCard from '../Cards/ClothCard.vue';
import DetailNavLink from '../Navbar/DetailNavLink.vue';

export default {
    name: "NewPage",
    components: { DetailNavLink, ClothCard, BtnChange },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            dd: 1
        }
    },
    methods: {
        test() {
            switch (this.dd) {
                case 1: 
                    this.dd = 2;
                    break;
                case 2: 
                    this.dd = 3;
                    break;
                case 3:
                    this.dd = 1;
                    break;
            }
        }
    },
    computed: {
        chatss() {
            return this.$store.getters.getChatss;
        }
    }
}
</script>

<style lang="scss" scoped></style>
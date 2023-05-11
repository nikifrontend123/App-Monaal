<template>
    <div>
        <div class="topnav d-flex justify-content-between container py-2">
            <div class="d-flex">
                <RouterLink to="/StorePage">
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
        <p class=" m-0 fs-4 text-center fw-bold border-bottom">Store</p>
        <StoreLink active="Grn"></StoreLink>
        <SearchBar></SearchBar>
        <!-- <ClothCard :design="dd" :chatss="chatss"></ClothCard> -->
        <div v-for="(storegrn , index) in storegrns" :key="index" class="container d-flex border py-2">
            <div class="">
                <img :src="`${publicPath}${storegrn.img}`" width="60" class="rounded-circle border" alt="">
            </div>
            <div class="ms-2">
                <div class="fw-bold">{{storegrn.name}}</div>
                <div style="font-size: 12px;" class="text-success">Qtyy: {{storegrn.qty}} | Date: {{storegrn.date}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import BtnChange from '../Cards/BtnChange.vue';
// import ClothCard from '../Cards/ClothCard.vue';
// import DetailNavLink from '../Navbar/DetailNavLink.vue';
import StoreLink from '../Navbar/StoreLink.vue';
import SearchBar from '../SearchBar/SearchBar.vue';

export default {
    name: "NewPage",
    components: {   BtnChange, SearchBar, StoreLink },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            // dd: 1
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
        storegrns(){
            return this.$store.getters.getStoregrn
        }
    }
}
</script>

<style lang="scss" scoped></style>
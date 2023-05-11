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
        </div>
        <hr style="margin: 1px 0; opacity: 1;">
        <p class=" m-0 fs-4 text-center fw-bold border-bottom">Store</p>
        <StoreLink active="History"></StoreLink>
        <SearchBar></SearchBar>
        <h1>iam History</h1>
    </div>
</template>

<script>
import StoreLink from '../Navbar/StoreLink.vue';
import SearchBar from '../SearchBar/SearchBar.vue';

    export default {
    components: { SearchBar, StoreLink }
}
</script>

<style lang="scss" scoped>

</style>
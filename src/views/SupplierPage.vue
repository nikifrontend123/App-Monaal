<template>
    <div>
        <div class="topnav d-flex justify-content-between container">
            <i class="bi bi-list fs-3"></i>
            <p class="m-0 fw-bold fs-5">Supplier Page</p>
            <i class="bi bi-plus fs-3"></i>
        </div>
        <hr style="margin: 3px 0; opacity: 1;">
        <NavLink active="Supplier"></NavLink>
        <!-- <SupplierLink active="Supplier"></SupplierLink> -->
        <hr style="margin: 1px 0; opacity: 1;">
        <SearchBar></SearchBar>
        <hr style="margin: 1px 0; opacity: 1;">
        <div v-for="(supchat, index) in supchats" :key="index" class=" container w-100">
            <RouterLink to="/SupplierFabric" class="text-decoration-none">
                <div class="d-flex justify-content-between">
                    <div class="d-flex my-2">
                        <div class="border border-2 border-dark rounded-circle">
                            <img :src="`${publicPath}${supchat.imgDp}`"
                                style="width: 60px; height: 60px; border-radius: 50px;">
                        </div>
                        <div class="d-flex align-items-center text-dark ">
                            <p class=" m-0 ps-2 fs-5">{{ supchat.name }}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center ">
                        <p class="badge bg-secondary">4</p>
                    </div>
                </div>
            </RouterLink>
        </div>
        <!-- <hr style="margin: 3px 0; opacity: 1;"> -->
    </div>
</template>

<script>
import NavLink from '../components/Navbar/NavLink.vue';
import SearchBar from '../components/SearchBar/SearchBar.vue'

export default {
    components: { NavLink, SearchBar },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        supchats() {
            return this.$store.getters.getSupchats;
        }
    }
}
</script>

<style lang="scss" scoped></style>
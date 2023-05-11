<template>
    <div>
        <div class="topnav d-flex justify-content-between container">
            <i class="bi bi-list fs-3"></i>
            <p class="m-0 fw-bold fs-5">Supplier Page</p>
            <i class="bi bi-plus fs-3"></i>
        </div>
        <hr style="margin: 3px 0; opacity: 1;">
        <NavLink active="Store"></NavLink>
        <hr style="margin: 1px 0; opacity: 1;">
        <div class=" d-flex  justify-content-center my-4">
            <RouterLink to="/StoreSearch">
                <button class="btn btn-primary">
                    Login to Store
                </button>
            </RouterLink>
        </div>

    </div>
</template>

<script>
import NavLink from '../components/Navbar/NavLink.vue';


export default {
    components: { NavLink },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        stores() {
            return this.$store.getters.getStores;
        }
    }
}
</script>

<style lang="scss" scoped></style>
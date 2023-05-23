<template>
    <div>
        <div class="topnav d-flex justify-content-between border-bottom  container">
            <i class="bi bi-list fs-3"></i>
            <p class="m-0 fw-bold fs-5">Supplier Page</p>
            <i class=" "></i>
        </div>
        <NavLink active="Store"></NavLink>
       
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
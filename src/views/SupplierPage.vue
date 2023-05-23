<template>
    <div>
        <div class="topnav d-flex justify-content-between border-bottom container">
            <i class="bi bi-list fs-3"></i>
            <p class="m-0 fw-bold fs-5">Supplier Page</p>
            <i class=""></i>
        </div>
        <NavLink active="Supplier"></NavLink>
        <!-- <SupplierLink active="Supplier"></SupplierLink> -->
        <RouterLink to="/SupplierPurchase">
            <div class="d-flex justify-content-center my-4">
                <button class="btn btn-primary ">Login Supplier</button>
            </div>
        </RouterLink>
    </div>
</template>

<script>
import NavLink from '../components/Navbar/NavLink.vue';

export default {
    components: { NavLink, },
    
}
</script>

<style lang="scss" scoped></style>
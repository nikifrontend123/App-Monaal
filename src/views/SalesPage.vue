<template>
    <div>
        <div class="topnav d-flex justify-content-between container">
            <i class="bi bi-list fs-3"></i>
            <p class="m-0 fw-bold fs-5">Supplier Page</p>
            <i class="bi bi-plus fs-3"></i>
        </div>
        <hr style="margin: 3px 0; opacity: 1;">
        <NavLink active="Sales"></NavLink>
        <RouterLink to="/SalePurchasePage">
            <div class="d-flex justify-content-center my-4">
                <button class="btn btn-primary ">Login Sales</button>
            </div>
        </RouterLink>
 
    </div>
</template>

<script>
import NavLink from '@/components/Navbar/NavLink.vue';

export default {
    components: { NavLink }
}
</script>

<style lang="scss" scoped></style>
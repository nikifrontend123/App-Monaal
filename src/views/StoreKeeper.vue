<template>
    <div>
        <div class="topnav d-flex justify-content-between container">
            <i class="bi bi-list fs-3"></i>
            <p class="m-0 fw-bold fs-5">Supplier Page</p>
            <i class="bi bi-plus fs-3"></i>
        </div>
        <hr style="margin: 3px 0; opacity: 1;">
        <NavLink active="StoreKeeper"></NavLink>
        <hr style="margin: 1px 0; opacity: 1;">
        <!-- <StoreKeeperLink></StoreKeeperLink> -->
        <RouterLink to="/SkGrn">
            <div class="d-flex justify-content-center my-4">
                <button class="btn btn-primary ">Login Store Keeper</button>
            </div>
        </RouterLink>
    </div>
</template>

<script>
import NavLink from '@/components/Navbar/NavLink.vue';
// import StoreKeeperLink from '@/components/Navbar/StoreKeeperLink.vue';

export default {
    components: { NavLink }
}
</script>

<style lang="scss" scoped></style>
<!-- <template>
    <div>
        
    </div>
</template> -->

<template>
    <div>
        <div class="topnav d-flex justify-content-between border-bottom container">
            <i class="bi bi-list fs-3"></i>
            <p class="m-0 fw-bold fs-5">Supplier Page</p>
            <i class="bi bi-plus fs-3"></i>
        </div>
        <NavLink active="QcPage"></NavLink>
        <!-- <StoreKeeperLink></StoreKeeperLink> -->
        <RouterLink to="/QcPassed">
            <div class="d-flex justify-content-center my-4">
                <button class="btn btn-primary ">Login Qc</button>
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
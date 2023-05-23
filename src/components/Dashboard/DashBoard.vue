<template>
    <div>
        <div class="topnav d-flex justify-content-between border-bottom container">
            <i class="bi bi-list fs-3"></i>
            <p class="m-0 fw-bold fs-5">Supplier Page</p>
            <RouterLink to="/NewFabric">
                <i class="bi bi-plus fs-3 text-dark"></i>
            </RouterLink>
        </div>
        <NavLink active="Home"></NavLink>
        <h1>Iam Home Page</h1>
    </div>
</template>

<script>
import NavLink from '@/components/Navbar/NavLink.vue';

export default {
    components: { NavLink }
}
</script>

<style lang="scss" scoped></style>





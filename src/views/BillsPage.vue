<template>
    <div>
        <div class="topnav d-flex justify-content-between container">
            <i class="bi bi-list fs-3"></i>
            <p class="m-0 fw-bold fs-5">Supplier Page</p>
            <i class="bi bi-plus fs-3"></i>
        </div>
        <hr style="margin: 3px 0; opacity: 1;">
        <NavLink active="Bills"></NavLink>
        <h1>Iam Bills Page</h1>
    </div>
</template>

<script>
import NavLink from '@/components/Navbar/NavLink.vue';

export default {
    components: { NavLink }
}
</script>

<style lang="scss" scoped></style>
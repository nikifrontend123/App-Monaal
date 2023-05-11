<template>
    <div>
        <div>
            <div class="d-flex justify-content-between border-bottom px-2">
            <RouterLink to="/StorePage">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center py-2">Store</h4>
            <div class=""></div>
        </div>
        </div>
        <StoreLogin active="Search"></StoreLogin>
        <GoDown></GoDown>
    </div>
</template>

<script>
import StoreLogin from '../Navbar/StoreLogin.vue';
import GoDown from './StoreGowdown/GoDown.vue';

export default {
    components: {  GoDown, StoreLogin },
}
</script>

<style  scoped>
</style>
<template>
    <div>
        <div class="d-flex justify-content-between border-bottom  px-2">
            <RouterLink to="/SalesPage">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center py-2">Manager</h4>
            <div class=""></div>
        </div>
        <SalesLink active="SaleSalesPage"></SalesLink>
        loremjakdshjkashkjdh
    </div>
</template>

<script>
import SalesLink from '../Navbar/SalesLink.vue';

    export default {
    components: { SalesLink }
}
</script>

<style lang="scss" scoped>

</style>
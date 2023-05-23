<template>
    <div>
        <div class="d-flex justify-content-between border-bottom px-2">
            <RouterLink to="/PurchasesPage">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center  fw-bold py-2">Manage</h4>
            <div class=""></div>
        </div>
        <PurchaseLink active="Sale"></PurchaseLink>
    </div>
</template>

<script>
import PurchaseLink from '../Navbar/PurchaseLink.vue';

    export default {
    components: { PurchaseLink }
}
</script>

<style lang="scss" scoped>

</style>
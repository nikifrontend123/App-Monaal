<template>
    <div>
        <div>
            <div class="topnav d-flex justify-content-between container py-2">
                <div class="d-flex">
                    <RouterLink to="/SupplierPage">
                        <i class="bi bi-arrow-left-short text-dark fs-3"></i>
                    </RouterLink>
                    <!-- <i class="bi bi-person-circle fs-3 ms-2"></i> -->
                    <RouterLink to="/ProfileDetail" style="text-decoration: none;">
                        <p class="bi bi-person-circle m-0 fw-bold fs-5 ms-2 text-dark"><span class="ms-2">Himanshu</span>
                        </p>
                    </RouterLink>
                </div>
            </div>
            <hr style="margin: 1px 0; opacity: 1;">
            <p class=" m-0 fs-4 text-center fw-bold border-bottom">Supplier</p>
            <SupplierLink active="SupplierBill"></SupplierLink>
            <h1>Iam Bill Page</h1>
        </div>
    </div>
</template>

<script>
import SupplierLink from '../Navbar/SupplierLink.vue';

export default {
    components: {  SupplierLink }
}
</script>

<style lang="scss" scoped></style>
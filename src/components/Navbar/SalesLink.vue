<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link text-decoration-none " :class="active === 'SalePurchasePage' ? 'active' : ''" to="/SalePurchasePage">Purchase</RouterLink>
            <RouterLink class="nav-link text-decoration-none " :class="active === 'SaleSalesPage' ? 'active' : ''" to="/SaleSalesPage">Sale</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
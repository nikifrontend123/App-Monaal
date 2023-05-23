<template>
    <nav>
        <div class="nav nav-tabs py-2" style="font-size: 10px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="active === 'Home' ? 'active' : ''" to="/">Home</RouterLink>
            <RouterLink class="nav-link " :class="active === 'Supplier' ? 'active' : ''" to="/SupplierPage">Supplier</RouterLink>
            <RouterLink class="nav-link " :class="active === 'Purchases' ? 'active' : ''" to="/PurchasesPage">Managers</RouterLink>
            <RouterLink class="nav-link " :class="active === 'Store' ? 'active' : ''" to="/StorePage">Store</RouterLink>
            <RouterLink class="nav-link " :class="active === 'StoreKeeper' ? 'active' : ''" to="/StoreKeeper">Store Keeper</RouterLink>
            <!-- <a class="nav-link " :class="active === 'QcPage' ? 'active' : ''" href="/QcPage">QC</a> -->
            <RouterLink class="nav-link " :class="active === 'GateKeeper' ? 'active' : ''" to="/GateKeeper">Gate Keeper</RouterLink>
            <!-- <a class="nav-link " :class="active === 'Sales' ? 'active' : ''" href="/SalesPage">Sales</a> -->
            <RouterLink class="nav-link " :class="active === 'Bills' ? 'active' : ''" to="/BillsPage">Bills</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
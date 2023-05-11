<template>
    <nav>
        <div class="nav nav-tabs py-2" style="font-size: 10px; font-weight: 500;" id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'Home' ? 'active' : ''" href="/">Home</a>
            <a class="nav-link " :class="active === 'Supplier' ? 'active' : ''" href="/SupplierPage">Supplier</a>
            <a class="nav-link " :class="active === 'Purchases' ? 'active' : ''" href="/PurchasesPage">Purchase</a>
            <a class="nav-link " :class="active === 'Store' ? 'active' : ''" href="/StorePage">Store</a>
            <a class="nav-link " :class="active === 'StoreKeeper' ? 'active' : ''" href="/StoreKeeper">Store Keeper</a>
            <a class="nav-link " :class="active === 'QcPage' ? 'active' : ''" href="/QcPage">QC</a>
            <a class="nav-link " :class="active === 'GateKeeper' ? 'active' : ''" href="/GateKeeper">Gate Keeper</a>
            <a class="nav-link " :class="active === 'Sales' ? 'active' : ''" href="/SalesPage">Sales</a>
            <a class="nav-link " :class="active === 'Bills' ? 'active' : ''" href="/BillsPage">Bills</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
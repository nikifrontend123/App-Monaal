<template>
    <nav>
        <div class="nav nav-tabs py-2" style="font-size: 15px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="active === 'SupplierFabric' ? 'active' : ''" to="/SupplierFabric">Fabric</RouterLink>
            <RouterLink class="nav-link " :class="active === 'SupplierSample' ? 'active' : ''" to="/SupplierSample">Sample</RouterLink>
            <RouterLink class="nav-link " :class="active === 'SupplierPo' ? 'active' : ''" to="/SupplierPo">PO</RouterLink>
            <RouterLink class="nav-link " :class="active === 'SupplierShipment' ? 'active' : ''" to="/SupplierShipment">Shipment</RouterLink>
            <RouterLink class="nav-link " :class="active === 'SupplierBill' ? 'active' : ''" to="/SupplierBill">Bills</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
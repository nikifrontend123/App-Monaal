<template>
    <nav>
        <div class="nav nav-tabs py-2" style="font-size: 15px; font-weight: 500;" id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'SupplierFabric' ? 'active' : ''" href="/SupplierFabric">Fabric</a>
            <a class="nav-link " :class="active === 'SupplierSample' ? 'active' : ''" href="/SupplierSample">Sample</a>
            <a class="nav-link " :class="active === 'SupplierPo' ? 'active' : ''" href="/SupplierPo">PO</a>
            <a class="nav-link " :class="active === 'SupplierShipment' ? 'active' : ''" href="/SupplierShipment">Shipment</a>
            <a class="nav-link " :class="active === 'SupplierBill' ? 'active' : ''" href="/SupplierBill">Bills</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
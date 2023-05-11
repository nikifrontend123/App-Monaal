<template>
    <nav>
        <div class="nav nav-tabs py-2 d-flex justify-content-between" style="font-size: 14px; font-weight: 500;" id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'New' ? 'active' : ''" href="/NewPage">Fabric</a>
            <a class="nav-link " :class="active === 'Sample' ? 'active' : ''" href="/SamplePage">Samples</a>
            <a class="nav-link " :class="active === 'Po' ? 'active' : ''" href="/PoPage">PO</a>
            <a class="nav-link " :class="active === 'Lr' ? 'active' : ''" href="/LrPage">Shipment</a>
            <a class="nav-link " :class="active === 'Bill' ? 'active' : ''" href="/BillPage">Sales</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
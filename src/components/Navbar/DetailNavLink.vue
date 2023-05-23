<template>
    <nav>
        <div class="nav nav-tabs py-2 d-flex justify-content-between" style="font-size: 14px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link text-decoration-none" :class="active === 'New' ? 'active' : ''" to="/NewPage">Fabric</RouterLink>
            <RouterLink class="nav-link text-decoration-none" :class="active === 'Sample' ? 'active' : ''" to="/SamplePage">Samples</RouterLink>
            <RouterLink class="nav-link text-decoration-none" :class="active === 'Po' ? 'active' : ''" to="/PoPage">PO</RouterLink>
            <RouterLink class="nav-link text-decoration-none" :class="active === 'Lr' ? 'active' : ''" to="/LrPage">Purchase</RouterLink>
            <RouterLink class="nav-link text-decoration-none" :class="active === 'Bill' ? 'active' : ''" to="/BillPage">Bills</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
<template>
    <nav>
        <div class="nav nav-tabs py-2" style="font-size: 15px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="active === 'Grn' ? 'active' : ''" to="/StoreGrn">GRN</RouterLink>
            <RouterLink class="nav-link " :class="active === 'Qc' ? 'active' : ''" to="/StoreQc">QC</RouterLink>
            <RouterLink class="nav-link " :class="active === 'Gdn' ? 'active' : ''" to="/StoreGdn">GDN</RouterLink>
            <RouterLink class="nav-link " :class="active === 'Racking' ? 'active' : ''" to="/StoreRacking">Racking</RouterLink>
            <RouterLink class="nav-link " :class="active === 'History' ? 'active' : ''" to="/StoreHistory">History</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
<template>
    <nav>
        <div class="nav nav-tabs py-2" style="font-size: 15px; font-weight: 500;" id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'Grn' ? 'active' : ''" href="/StoreGrn">GRN</a>
            <a class="nav-link " :class="active === 'Qc' ? 'active' : ''" href="/StoreQc">QC</a>
            <a class="nav-link " :class="active === 'Gdn' ? 'active' : ''" href="/StoreGdn">GDN</a>
            <a class="nav-link " :class="active === 'Racking' ? 'active' : ''" href="/StoreRacking">Racking</a>
            <a class="nav-link " :class="active === 'History' ? 'active' : ''" href="/StoreHistory">History</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
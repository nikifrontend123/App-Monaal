<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;"
            id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="active === 'RackOut' ? 'active' : ''" to="/RackOut">De-Racking</RouterLink>
            <RouterLink class="nav-link " :class="active === 'GdnDetail' ? 'active' : ''" to="/GdnDetail">GDN</RouterLink>
            <RouterLink class="nav-link " :class="active === 'GdnManageDetail' ? 'active' : ''" to="/GdnManageDetail">Transfer</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
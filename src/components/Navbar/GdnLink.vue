<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;"
            id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'RackOut' ? 'active' : ''" href="/RackOut">De-Racking</a>
            <a class="nav-link " :class="active === 'GdnDetail' ? 'active' : ''" href="/GdnDetail">GDN</a>
            <a class="nav-link " :class="active === 'GdnManageDetail' ? 'active' : ''" href="/GdnManageDetail">Transfer</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
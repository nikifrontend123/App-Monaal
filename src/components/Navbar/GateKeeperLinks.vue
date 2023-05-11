<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;" id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'ReceiptsPage' ? 'active' : ''" href="/ReceiptsPage">Receipts</a>
            <a class="nav-link " :class="active === 'DeliveriesPage' ? 'active' : ''" href="/DeliveriesPage">Deliveries</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
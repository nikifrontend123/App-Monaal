<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="active === 'GrnDetail' ? 'active' : ''" :to="'/GrnDetail/' + shipmentId">GRN</RouterLink>
            <RouterLink class="nav-link " :class="active === 'Qc' ? 'active' : ''" :to="'/QcDetail/' + shipmentId">QC</RouterLink>
            <RouterLink class="nav-link " :class="active === 'RackIn' ? 'active' : ''" :to="'/RackIn/' +  shipmentId">Racking</RouterLink>
            <a class="nav-link " :class="active === 'ManageDetail' ? 'active' : ''" href="/ManageDetail">Transfer</a>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: ["active","shipmentId"],
    components: { RouterLink }
}
</script>
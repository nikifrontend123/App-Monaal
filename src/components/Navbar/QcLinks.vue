<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="active === 'QCPassed' ? 'active' : ''" to="/QCPassed">Pending GRNs</RouterLink>
            <RouterLink class="nav-link " :class="active === 'QCFailed' ? 'active' : ''" to="/QCFailed">QC Reports</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
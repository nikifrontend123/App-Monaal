<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;" id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'QCPassed' ? 'active' : ''" href="/QCPassed">Pending GRNs</a>
            <a class="nav-link " :class="active === 'QCFailed' ? 'active' : ''" href="/QCFailed">QC Reports</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
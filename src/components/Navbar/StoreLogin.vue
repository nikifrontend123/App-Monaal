<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;" id="nav-tab" role="tablist">
            <RouterLink class="nav-link " :class="active === 'Display' ? 'active' : ''" to="/StoreSearch">Display</RouterLink>
            <RouterLink class="nav-link " :class="active === 'Search' ? 'active' : ''" to="/StoreRacking">Search</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
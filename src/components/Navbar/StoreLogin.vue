<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;" id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'Display' ? 'active' : ''" href="/StoreSearch">Display</a>
            <a class="nav-link " :class="active === 'Search' ? 'active' : ''" href="/StoreRacking">Search</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
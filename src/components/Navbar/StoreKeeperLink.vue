<template>
    <nav>
        <div class="nav nav-tabs py-2 w-100 d-flex justify-content-evenly" style="font-size: 16px; font-weight: 500;" id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'SkGrn' ? 'active' : ''" href="/SkGrn">Inward</a>
            <a class="nav-link " :class="active === 'SkGdn' ? 'active' : ''" href="/SkGdn">Outward</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>
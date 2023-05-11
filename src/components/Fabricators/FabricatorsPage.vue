<template>
    <div style="padding-bottom: 80px;">
        <div class="heading text-center container">
            <h3>Fabricators Metro Fashion Ordering App</h3>
        </div>
        <hr style="margin: 3px 0; opacity: 1;" class="my-2">
        <div class="sec d-flex justify-content-between w-100 ">
            <div class="btn">Reset</div>
            <input class="w-50" type="search" placeholder="Search">
            <div class="btn">Sort</div>
            <div class="btn">Filters</div>
        </div>
        <hr style="margin: 3px 0; opacity: 1;" class="my-2">
        <div v-for="(fab, index) in fabs" :key="index">
            <RouterLink to="/FabDetailPage" style="text-decoration: none;">
            <div class="d-flex">
                <div class="left">
                    <img src="../../assets/fab1.png" style="border-radius: 50px; width: 50px; height: 50px;" alt="">
                </div>
                <div class="right ms-2">
                    <p class="m-0 text-dark">{{ fab.name }}</p>
                    <p class="m-0 text-dark">Order: {{ fab.order }} | Ready: {{ fab.num }} <i class="bi bi-arrow-up-short text-danger">
                        </i> {{ fab.num1 }}<i class="bi bi-arrow-down-short text-success"></i> {{ fab.num2 }}</p>
                </div>
            </div>
        </RouterLink>
            <hr style="margin: 3px 0; opacity: 1;" class="my-2">
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        fabs() {
            return this.$store.getters.getFabs;
        }
    }

}
</script>

<style lang="scss" scoped></style>
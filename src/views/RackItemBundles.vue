<template>
    <div class="">
        <div class="p-3 bg-dark text-white ">
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <i @click="goBack" class="bi bi-chevron-left me-2"></i>
                    <span>Godown & Rack Name</span>
                </div>
                <div class="dropdown">
                    <button class="btn text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Add GRN</a></li>
                        <li><a class="dropdown-item" href="#">Issue GDN</a></li>
                        <li><a class="dropdown-item" href="#">Open transfer</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container ">
            <div class="row g-3 justify-content-start">
                <div v-for="(bundle, index) in rack.bundles" :key="index" class="col-6 text-center">
                    <div class="position-relative rounded border shadow mx-auto overflow-hidden" style="height: 200px;">
                        <div class="position-absolute top-0 bottom-0 end-0 start-0">
                            <img style="object-fit: cover; width:100%; height:100%;"
                                :src="`${publicPath}${bundle.img}`">
                        </div>
                        <div class="position-absolute bottom-0 end-0 bg-white rounded">
                            <div class="d-flex flex-column justify-content-around align-items-start p-2">
                                <span><small>Bal:</small> {{ bundle.balance }}</span>
                                <span><small>Total:</small> {{ bundle.total }}</span>
                                <span><small>Add:</small> {{ bundle.address }}</span>
                                <button class="btn btn-dark btn-sm mt-2 w-100">Transfer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- <p class="fs-1">{{ activeData.name }}</p> -->
<script>
// import router from '../../../router';
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        rack() {
            return this.$store.getters['mystore/getRack']({
                godownId: this.$route.params.godownId,
                rackId: this.$route.params.rackId,
            })
        }
    },

    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped></style>
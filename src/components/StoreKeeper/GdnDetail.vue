<template>
    <div>
        <div class="d-flex justify-content-between px-2">
            <RouterLink to="/SkGdn">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center border-bottom py-2">Outward</h4>
            <div class=""></div>
        </div>
        <GdnLink active="GdnDetail"></GdnLink>
        <div v-for="(gdndetail, index) in gdndetails" :key="index">
            <div class="d-flex justify-content-between container" @click="showmodal(gdndetail)">
                <div class="d-flex my-2">
                    <div class="border border-2 border-dark rounded-circle">
                        <img :src="`${publicPath}${gdndetail.img}`" style="width: 60px; height: 60px; border-radius: 50px;">
                    </div>
                    <div class=" align-items-center text-dark ">
                        <p class=" m-0 ps-2  fw-bold">{{ gdndetail.name }}<i class="bi bi-info-circle text-danger ms-2"></i>
                        </p>
                        <p class=" m-0 ps-2 ">{{ gdndetail.mtr }} mtr @ Rs.{{ gdndetail.pm }} pm</p>
                    </div>
                </div>
                <!-- <div class="d-flex align-items-center ">
                    <div class="px-2 text-center">
                        <i class="bi bi-camera fs-4"></i>
                    </div>
                    <div class="px-2 text-center w-50 m-0 p-0">
                        <input class="border-0 border-bottom border-2 border-danger w-25" type="number">
                    </div>
                </div> -->
            </div>
        </div>

        <div v-if="active.gdndetail" class="modal show fade d-block" tabindex="-1">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" @click="hidemodal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <b class="text-center text-decoration-underline">{{ active.gdndetail.name }}</b>
                            <p class="text-center text-decoration-underline">{{ active.gdndetail.text1 }} {{
                                active.gdndetail.text }}</p>
                        </div>
                        <div class="text-center">
                            <div class=" w-100">
                                <table class="mt-3 w-100 container d-flex justify-content-center">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="">
                                                    <p class=""><i class="bi bi-record-circle-fill me-1"></i>Quantity</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" d-flex">
                                                    <button @click="qty--" class="btn btn-light border border-1">-</button>
                                                    <input type="number" :value='qty' class="form-control-sm text-center"
                                                        style=" width: 60px; border: none; border-bottom: 1px solid black;">
                                                    <button @click="qty++" class="btn btn-light border border-1">+</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="">
                                                    <p class=""><i class="bi bi-stack me-1"></i>Per mtr</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" d-flex">
                                                    <button @click="rs--" class="btn btn-light border border-1">-</button>
                                                    <span>₹</span>
                                                    <input type="number" :value='rs' class="form-control-sm text-center"
                                                        style=" width: 60px; border: none; border-bottom: 1px solid black;">
                                                    <span>pm</span>
                                                    <button @click="rs++" class="btn btn-light border border-1">+</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center mt-3">
                            <i class="bi bi-camera fs-4"></i>
                            <button class="btn btn-warning ms-3">Upload Camera</button>
                        </div>

                    </div>
                    <div class="modal-footer d-flex justify-content-center w-100">
                        <button class="btn btn-dark w-100" @click="hidemodal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GdnLink from '../Navbar/GdnLink.vue';

export default {
    components: { GdnLink },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            active: {
                gdndetail: null
            },
            qty: 0,
            rs: 0,
        }
    },
    computed: {
        gdndetails() {
            return this.$store.getters.getGdndetails;
        }
    },
    methods: {
        showmodal(gdndetail) {
            this.active.gdndetail = gdndetail
        },
        hidemodal() {
            this.active.gdndetail = null
        },
    },
}
</script>

<style scoped>
.form-control-sm {
    border-radius: 0;
    ;
}
</style>
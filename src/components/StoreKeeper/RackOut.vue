<template>
    <div>
        <div class="d-flex justify-content-between px-2">
            <RouterLink to="/SkGdn">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center border-bottom py-2">Outward</h4>
            <div class=""></div>
        </div>
        <GdnLink active="RackOut"></GdnLink>
        <div v-for="(rackout, index) in rackouts" :key="index">
            <div class="d-flex justify-content-between"  @click="showmodal(rackout)">
                <div class="d-flex my-2">
                    <div class="border border-2 border-dark rounded-circle">
                        <img :src="`${publicPath}${rackout.img}`" style="width: 60px; height: 60px; border-radius: 50px;">
                    </div>
                    <div class=" align-items-center text-dark ">
                        <p class=" m-0 ps-2  fw-bold">{{ rackout.name }}</p>
                        <p class=" m-0 ps-2 ">Qty: {{ rackout.mtr }} mtr | {{ rackout.text1 }}</p>
                    </div>
                </div>
                <!-- <div class="d-flex align-items-center ">
                    <div class="w-100 text-center px-2">
                        <div class="" style="width: 40px;">
                            <input class="form-control border-" type="text" style="border: none; border-bottom: 1px solid black;">
                        </div>
                  </div>
                    
                </div> -->
            </div>
        </div>

        <div v-if="active.rackout" class="modal show fade d-block" tabindex="-1">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" @click="hidemodal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <b class="text-center text-decoration-underline">{{ active.rackout.name }}</b>
                            <p class="text-center text-decoration-underline">{{ active.rackout.text1 }} {{ active.rackout.text }}</p>
                        </div>
                        <div class="text-center">
                            <div class=" w-100">
                                <table class="mt-3 w-100 container d-flex justify-content-center">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="">
                                                    <b class="">Quantity</b>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" d-flex">
                                                    <button @click="qty++"
                                                        class="btn btn-light border border-1">&mdash;</button>
                                                    <input type="number" :value='qty' class="form-control-sm text-center"
                                                        style=" width: 60px; border: none; border-bottom: 1px solid black;">
                                                        <span>mtr</span>
                                                    <button @click="qty++"
                                                        class="btn btn-light border border-1">&#xff0b;</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <!-- <tr>
                                            <td>
                                                <div class="">
                                                    <p class=""><i class="bi bi-stack me-1"></i>Bundle</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class=" d-flex">
                                                    <button @click="bundle++"
                                                        class="btn btn-light border border-1">&mdash;</button>
                                                    <input type="number" :value='bundle' class="form-control-sm text-center"
                                                        style=" width: 60px; border: none; border-bottom: 1px solid black;">
                                                    <button @click="bundle++"
                                                        class="btn btn-light border border-1">&#xff0b;</button>
                                                </div>
                                            </td>
                                        </tr> -->
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
    components: {  GdnLink },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            active: {
                rackout: null
            },
            qty:0
        }
    },
    computed: {
        rackouts() {
            return this.$store.getters.getRackouts;
        }
    },
    methods: {
        showmodal(rackout) {
            this.active.rackout = rackout
        },
        hidemodal() {
            this.active.rackout = null
        },
    },
}
</script>

<style lang="scss" scoped>
.form-control-sm {
    border-radius: 0;;
}  
</style>




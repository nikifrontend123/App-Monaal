<template>
    <div>
        <div class="d-flex justify-content-between px-2">
            <RouterLink to="/SkGrn">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center border-bottom py-2">Inward</h4>
            <div class=""></div>
        </div>
        <GrnLink active="GrnDetail" :shipmentId="this.$route.params.shipmentId"></GrnLink>


        <div v-for="(grn, index) in grns" :key="index">
            <div class="d-flex justify-content-between container" @click="showmodal(grn)">
                <div class="d-flex my-2">
                    <div class="border border-2 border-dark rounded-circle">
                        <img :src="`${publicPath}${grn.img}`" style="width: 60px; height: 60px; border-radius: 50px;">
                    </div>
                    <div class=" align-items-center text-dark ">
                        <p class=" m-0 ps-2  fw-bold">{{ grn.name }}</p>
                        <div class="d-flex">
                            <div class="ps-2" v-for="(qty, name) in grn.qty" :key="name" v-show="qty.actual !== ''">
                                {{ name }}
                                {{ qty.actual }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center ">
                    <i class="bi bi-pencil text-danger fs-4"></i>
                </div>
            </div>
        </div>
        <div v-if="active.grn" class="modal show fade d-block" tabindex="-1">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" @click="hidemodal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <b class="text-center text-decoration-underline">{{ active.grn.name }}</b>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column">
                                    <div class="d-flex justify-content-between w-100" v-for="(qty, name) in active.grn.qty" :key="name"
                                        v-show="qty.actual !== ''">
                                        <div class="">
                                            <i class="bi bi-record-circle-fill me-1"></i>
                                            <span>{{ name }} | {{ qty.actual }}</span>
                                        </div>
                                        <div class="d-flex">
                                            <button @click="updateqty('less', name)" class="btn">-</button>
                                            <input type="number" :value='qty.defined' class="form-control-sm text-center"
                                                style=" width: 60px; border: none; border-bottom: 1px solid black;">
                                            <button @click="updateqty('add', name)" class="btn ">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ---------------------------------------------------
                       <div class="d-flex justify-content-center mt-3">
                            <i class="bi bi-camera fs-4"></i>
                            <button class="btn btn-warning ms-3">Upload Camera</button>
                        </div> 
                        ------------------------------------------------------- -->
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
import GrnLink from '../Navbar/GrnLink.vue';

export default {
    props: ['shipments'],
    components: { GrnLink },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            active: {
                grndetail: null
            },
            roll: 0,
            bundle: 0,
        }
    },
    computed: {
        grns() {
            return this.$store.getters['myshipment/getGrns']({
                shipmentId: this.$route.params.shipmentId,
            })
        },
        // shipments(){
        //     return this.$store.getters.getShipments
        // }

    },
    methods: {
        showmodal(grn) {
            this.active.grn = grn
        },
        hidemodal() {
            this.active.grn = null
        },
        updateqty(method, property){
            if (method === 'add') {
                if (property === 'roll') {
                    this.active.grn.qty.roll.defined++;
                }
                if (property === 'bundles') {
                    this.active.grn.qty.bundles.defined++;
                }
            }
            if (method === 'less') {
                if (property === 'roll') {
                    this.active.grn.qty.roll.defined--;
                }
                if (property === 'bundles') {
                    this.active.grn.qty.bundles.defined--;
                }
            }
            // console.log(method)
            // console.log(property)
            // console.log(this.active.grn.qty.bundles.defined)
            // console.log(this.active.grn.qty)
            // this.active.grn.qty.method.defined('add') += 1
            // this.qty.defined('less') -= 1
        }
    },

}
</script>

<style lang="scss" scoped>
.form-control-sm {
    border-radius: 0;
    ;
}
</style>
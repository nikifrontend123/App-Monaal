<template>
    <div>
        <div class="d-flex justify-content-between border-bottom  px-2">
            <RouterLink to="/GateKeeper">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center py-2">Gate Keeper</h4>
            <div class=""></div>
        </div>
        <GateKeeperLinks active="ReceiptsPage"></GateKeeperLinks>
        <div v-for="(receipt, index) in receipts" :key="index" class="container border-bottom">
            <div class="d-flex w-100 py-2" @click="showmodal(receipt)">
                <div class="border border-2 border-dark rounded-circle">
                    <p class="m-0 text-center d-flex justify-content-center align-items-center fw-bold"
                        style="width: 60px; height: 60px; border-radius: 50px;">{{ receipt.date }}</p>
                </div>
                <div class="">
                    <div class="w-100">
                        <p class="m-0 ps-2  fw-bold">{{ receipt.text }}</p>
                    </div>
                    <div class="d-flex w-100">
                        <div class="">
                            <p class="m-0 ps-2 ">CID: {{ receipt.cid }}</p>
                        </div>
                        <div class="px-2 text-center">
                            <p class=""><i class="bi bi-record-circle-fill me-1"></i>{{ receipt.roll }}</p>
                        </div>
                        <div class="px-2 text-center">
                            <p class=""><i class="bi bi-stack me-1"></i>{{ receipt.stock }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ---------------------------------------------------------------------------- -->
        <!-- <div v-if="Object.entries(activeReceipt).length" class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" -->
        <div v-if="active.receipt" class="modal show fade d-block" tabindex="-1">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" @click="hidemodal"></button>
                    </div>
                    <div class="modal-body">
                        <p class="text-center">Please confirm again that the shipment with
                            following details has been received</p>
                        <div class="text-center">
                            <b class="text-center text-decoration-underline">Shipment ID</b>
                            <p>{{active.receipt.cid}}</p>
                        </div>
                        <div class="text-center">
                            <b class="text-center text-decoration-underline">Shipment Contains</b>
                            <div class="d-flex justify-content-center w-100">
                                <div class="px-2 text-center">
                                    <p class=""><i class="bi bi-record-circle-fill me-1"></i>{{active.receipt.roll}}</p>
                                </div>
                                <div class="px-2 text-center">
                                    <p class=""><i class="bi bi-stack me-1"></i>{{active.receipt.stock}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <i class="bi bi-camera fs-4"></i>
                            <button class="btn btn-warning ms-3">Upload Camera</button>
                        </div>
                        
                    </div>
                    <div class="modal-footer d-flex justify-content-center w-100">
                            <button class="btn btn-dark w-100"  @click="hidemodal">Yes, Received</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import GateKeeperLinks from '../Navbar/GateKeeperLinks.vue';

export default {
    components: { GateKeeperLinks },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            active:{
                receipt:null
            }
        }
    },
    computed: {
        receipts() {
            return this.$store.getters.getReceipts;
        }
    },
    methods:{
        showmodal(receipt){
            this.active.receipt = receipt
        },
        hidemodal(){
            this.active.receipt = null
        }
    }
}
</script>

<style lang="scss" scoped></style>


 


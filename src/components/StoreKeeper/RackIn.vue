<template>
    <div>
        <div class="d-flex justify-content-between border-bottom px-2">
            <RouterLink to="/SkGrn">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center  py-2">Inward</h4>
            <div class=""></div>
        </div>
        <GrnLink active="RackIn" :shipmentId="this.$route.params.shipmentId"></GrnLink>
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
                                {{ qty.defined }}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="d-flex align-items-center "> -->
                <!-- <div class="w-100 text-center px-2">
                            <p style="font-size: 12px;" class="w-100">{{ rackin.text1 }}</p>
                        </div> -->
                <!-- <div class="" style="width: 60px;">
                            <input v-model="message" class="form-control border-" type="text"
                                style="border: none; border-bottom: 1px solid black;">
                        </div> -->

                <!-- </div> -->
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
                            <div class="" v-for="(qty, name) in active.grn.qty" :key="name" v-show="qty.defined !== ''">
                                <i class="bi bi-record-circle-fill me-1"></i>
                                <span>{{ name }} | {{ qty.defined }}</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class=" w-100">
                                <table class="mt-3 w-100 container table table-bordered ">
                                    <tbody>
                                        <tr>
                                            <td>Godown</td>
                                            <td> <input v-model="form.godown" type="text"
                                                    class="form-control-sm text-center"
                                                    style=" width: 60px; border: none; border-bottom: 1px solid black;">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Rack </td>
                                            <td><input v-model="form.rack" type="text" class="form-control-sm text-center"
                                                    style=" width: 60px; border: none; border-bottom: 1px solid black;">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Qty </td>
                                            <td><input v-model="form.qty" type="text" class="form-control-sm text-center"
                                                    style=" width: 60px; border: none; border-bottom: 1px solid black;">
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Select </td>
                                            <td>
                                                <div class="form-check">
                                                    <input v-model="form.select" class="form-check-input" type="radio"
                                                        name="exampleRadios" id="exampleRadios1" value="Roll">
                                                    <label class="form-check-label" for="exampleRadios1">
                                                        Roll
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <input v-model="form.select" class="form-check-input" type="radio"
                                                        name="exampleRadios" id="exampleRadios2" value="Bundle">
                                                    <label class="form-check-label" for="exampleRadios2">
                                                        Bundle
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <p v-for="(data, index) in submittedData" :key="index">
                                        <span class="fw-bold">Godown:</span> {{ data.godown }},
                                        <span class="fw-bold">Rack:</span> {{ data.rack }},
                                        <span class="fw-bold">Qty:</span> {{ data.qty }},
                                        <span class="fw-bold">Selected:</span> {{ data.select }}
                                    </p>
                                </div>
                                <button @click="submit">Submit</button>
                                <!-- {{ submittedData[1]}} -->
                            </div>
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
import GrnLink from '../Navbar/GrnLink.vue';

export default {
    components: { GrnLink },
    props: ['shipment'],
    // 
    data() {
        return {
            publicPath: process.env.BASE_URL,
            active: {},
            form: {
                id: '',
                godown: '',
                rack: '',
                qty: '',
                select: '',
                previousData: [],
            },
            submittedData: [] // Add submittedData array
        }
    },

    computed: {
        grns() {
            return this.$store.getters['myshipment/getGrns']({
                shipmentId: this.$route.params.shipmentId,
            })
        },
        rackInfo() {
            return this.$store.getters.getRackInfo(this.active.grn.id)
        }
    },
    methods: {
        showmodal(grn) {
            this.active.grn = grn
        },
        hidemodal() {
            this.active.grn = null
        },
        submit() {
            this.form.id = this.active.grn.id;
            this.submittedData.push({ ...this.form }); // Push the submitted form data
            this.$store.dispatch('saveRacking', {
                data: this.form
            }).then(() => {
                this.form = {
                    id: '',
                    godown: '',
                    rack: '',
                    qty: '',
                    select: '',
                };
            });
        },

        // submit() {
        //     this.form.id = this.active.grn.id
        //     this.$store.dispatch('saveRacking', {
        //         data: this.form
        //     }).then(() => {
        //         this.form = {
        //             id: '',
        //             godown: '',
        //             rack: '',
        //             qty: '',
        //             select: '',
        //         }
        //     })
        // }
    },
}
</script>

<style lang="scss" scoped>
.form-control-sm {
    border-radius: 0;
    ;
}
</style>

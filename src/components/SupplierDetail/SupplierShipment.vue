<template>
    <div>
        <div>
            <div class="topnav d-flex justify-content-between container py-2">
                <div class="d-flex">
                    <RouterLink to="/SupplierPage">
                        <i class="bi bi-arrow-left-short text-dark fs-3"></i>
                    </RouterLink>
                    <!-- <i class="bi bi-person-circle fs-3 ms-2"></i> -->
                    <RouterLink to="/ProfileDetail" style="text-decoration: none;">
                        <p class="bi bi-person-circle m-0 fw-bold fs-5 ms-2 text-dark"><span class="ms-2">Himanshu</span>
                        </p>
                    </RouterLink>
                </div>
            </div>
            <hr style="margin: 1px 0; opacity: 1;">
            <p class=" m-0 fs-4 text-center fw-bold border-bottom">Supplier</p>
            <SupplierLink active="SupplierShipment"></SupplierLink>
            <SearchBar></SearchBar>
            <div v-for="(supshipment, index) in supshipments" :key="index" class="d-flex border-top py-1"
                @click="showSupshipment(supshipment)">
                <div class="d-flex justify-content-between container">
                    <div class="img d-flex">
                        <p class="border border-dark d-flex justify-content-center align-items-center"
                            style="width: 60px; height: 60px; border-radius: 50%;">
                            14/7
                        </p>
                        <div class="ms-1 text-dark">
                            <p class="m-0 fw-bold">Invoice No. : {{ supshipment.invoice }}</p>
                            <div class="d-flex text-dark">
                                <p class="m-0 fw-bold">Shipment ID : {{ supshipment.shipmentID }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="m-0 d-flex justify-content-center align-items-center">
                        <p class="text-center" :class="supshipment.textcolor">{{ supshipment.text }}</p>
                    </div>
                </div>
            </div>
            <div v-if="Object.keys(activeSupshipment).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class=" w-100 d-flex justify-content-center align-items-center">
                            <p class="fw-bold text-center m-0">{{ activeSupshipment.name }}</p>
                        </div>
                        <div class="d-flex justify-content-end w-100">
                            <button type="button" class="btn" @click="hideSupshipment()"><i
                                    class="bi bi-x fs-3"></i></button>
                        </div>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            <div class="container">
                                <img :src="`${publicPath}${activeSupshipment.img}`" alt="" class="w-100">
                            </div>
                            <div class="text-center">
                                <p>{{ activeSupshipment.name }}</p>
                                <p>{{ activeSupshipment.tag }}</p>
                            </div>
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold bg-primary text-white" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                            Tracking Detail
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <StageStepper stage='2'></StageStepper>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item mt-3">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold bg-primary text-white" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Dispatch Details
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapsefive" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <button class="btn btn-warning w-100">Create New Shipment</button>
                                            <p class="text-decoration-underline mt-2 fs-5">Bilty Details</p>
                                            <div class="form form-control-sm">
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between">
                                                    <p class="m-0 fw-bold">Packaging</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">No. of Packages</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Weight in Kgs.</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Upload Bilty</p>
                                                    <input class="form-control-sm" type="file">
                                                </div>
                                            </div>
                                            <p class="text-decoration-underline mt-2 fs-5">Invoice Details</p>
                                            <div class="form form-control-sm">
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between">
                                                    <p class="m-0 fw-bold">Date</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Invoice No.</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Purchase Amt</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Total Amt</p>
                                                    <input class="form-control-sm" type="text">
                                                </div>
                                                <div
                                                    class="d-flex border-bottom pb-2 align-items-center justify-content-between mt-2">
                                                    <p class="m-0 fw-bold">Upload Invoice</p>
                                                    <input class="form-control-sm" type="file">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="accordion-item mt-3">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold bg-primary text-white" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Dispatch Details
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <p class="text-decoration-underline fw-bold">{{ activeSupshipment.name }}</p>
                                            <p class="">{{ activeSupshipment.tagid }}</p>
                                            <p class="fw-bold mb-0">Courier Id</p>
                                            <p class="m-0">{{ activeSupshipment.courierid }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item mt-3">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold bg-primary text-white" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Fabric Details
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <div class="form container">
                                                <table class="table w-100">
                                                    <tbody class="">
                                                        <tr>
                                                            <th scope="row">Name</th>
                                                            <td>{{ activeSupshipment.name }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Price</th>
                                                            <td>{{ activeSupshipment.price }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">MOQ</th>
                                                            <td>{{ activeSupshipment.moq }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Length</th>
                                                            <td>{{ activeSupshipment.length }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Width</th>
                                                            <td>{{ activeSupshipment.width }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">GSM</th>
                                                            <td>{{ activeSupshipment.gsm }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Color</th>
                                                            <td>{{ activeSupshipment.color }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Design</th>
                                                            <td>{{ activeSupshipment.design }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Construction</th>
                                                            <td>{{ activeSupshipment.construction }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Processes</th>
                                                            <td>{{ activeSupshipment.processes }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Discription</th>
                                                            <td>{{ activeSupshipment.discription }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SupplierLink from '../Navbar/SupplierLink.vue';
import SearchBar from '../SearchBar/SearchBar.vue';
import StageStepper from '../StageStepper.vue';

export default {
    components: { SearchBar, StageStepper, SupplierLink },
    computed: {
        supshipments() {
            return this.$store.getters.getSupshipments
        },
        activeSupshipment() {
            return this.$store.getters.getSupshipment;
        },
    },
    methods: {
        showSupshipment(supshipment) {
            return this.$store.dispatch('selectSupshipment', supshipment);
        },
        hideSupshipment() {
            return this.$store.dispatch('hideSupshipment');
        }
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
}
</script>

<style scoped>input {
    border: none;
    border-bottom: 1px solid;
    border-radius: 0px;
}</style>
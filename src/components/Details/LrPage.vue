<template>
    <div>
        <div>
            <div class="topnav d-flex justify-content-between container py-2">
                <div class="d-flex">
                    <RouterLink to="/PurchasesPage">
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
            <p class=" m-0 fs-4 text-center fw-bold border-bottom">Purchaser</p>
            <DetailNavLink active="Lr"></DetailNavLink>
            <SearchBar></SearchBar>
            <div v-for="(lr, index) in lrs" :key="index" class="d-flex mt-2 border-bottom py-2"
                @click="showLr(lr)">
                <!-- <RouterLink to="/LrDetailPage" style="text-decoration: none;"> -->
                <div class="d-flex container">
                    <div class="img">
                        <img :src="`${publicPath}${lr.img}`" class="border border2 border-dark"
                            style="width: 60px; height: 60px; border-radius: 50%;">
                    </div>
                    <div class="ms-2 text-dark w-100">
                        <div class="d-flex justify-content-between">
                            <p class="m-0 fw-bold">{{ lr.name }}</p>
                            <p class="m-0" style="font-size: 14px;">PO-{{ lr.po }}</p>
                        </div>
                        <div class="d-flex text-dark">
                            <p class="m-0">Qty:{{ lr.qty }}</p>
                            <p class="m-0 ms-1">| Amt:{{ lr.amt }}</p>
                        </div>
                    </div>
                </div>
                <!-- </RouterLink> -->
            </div>
            <div v-if="Object.keys(activeLr).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class=" w-100 d-flex justify-content-center align-items-center">
                            <p class="fw-bold text-center m-0">{{ activeLr.name }}</p>
                        </div>
                        <div class="d-flex justify-content-end w-100">
                            <button type="button" class="btn" @click="hideLr()"><i class="bi bi-x fs-3"></i></button>
                        </div>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            <div class="container">
                                <img :src="`${publicPath}${activeLr.img}`" alt="" class="w-100">
                            </div>
                            <div class="">
                                <p>{{ activeLr.name }}</p>
                                <p>{{ activeLr.tag }}</p>
                            </div>
                            <div class=" d-flex justify-content-center my-2 ">
                                <button class="btn btn-warning">Add to Favourite</button>
                            </div>
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseOne">
                                            Tracking Detail
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <StageStepper stage="2"></StageStepper>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseTwo">
                                            Dispatch Details
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <p class="text-decoration-underline fw-bold">{{ activeLr.name }}</p>
                                            <p class="">{{ activeLr.tagid }}</p>
                                            <p class="fw-bold mb-0">Courier Id</p>
                                            <p class="m-0">{{ activeLr.courierid }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button  fw-bold" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
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
                                                            <td>{{ activeLr.name }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Price</th>
                                                            <td>{{ activeLr.price }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">MOQ</th>
                                                            <td>{{ activeLr.moq }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Length</th>
                                                            <td>{{ activeLr.length }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Width</th>
                                                            <td>{{ activeLr.width }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">GSM</th>
                                                            <td>{{ activeLr.gsm }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Color</th>
                                                            <td>{{ activeLr.color }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Design</th>
                                                            <td>{{ activeLr.design }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Construction</th>
                                                            <td>{{ activeLr.construction }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Processes</th>
                                                            <td>{{ activeLr.processes }}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Discription</th>
                                                            <td>{{ activeLr.discription }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import DetailNavLink from '../Navbar/DetailNavLink.vue';
import SearchBar from '../SearchBar/SearchBar.vue';
import StageStepper from '../StageStepper.vue';

export default {
    components: { DetailNavLink, SearchBar, StageStepper },
    computed: {
        lrs() {
            return this.$store.getters.getLrs
        },
        activeLr() {
            return this.$store.getters.getLr;
        },
    },
    methods: {
        showLr(lr) {
            return this.$store.dispatch('selectLr', lr);
        },
        hideLr() {
            return this.$store.dispatch('hideLr');
        }
    },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
}
</script>

<style lang="scss" scoped></style>
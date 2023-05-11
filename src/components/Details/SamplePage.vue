<template>
    <div>
        <div class="topnav d-flex justify-content-between container py-2">
            <div class="d-flex">
                <RouterLink to="/PurchasesPage">
                    <i class="bi bi-arrow-left-short text-dark fs-3"></i>
                </RouterLink>
                <!-- <i class="bi bi-person-circle fs-3 ms-2"></i> -->
                <RouterLink to="/ProfileDetail" style="text-decoration: none;">
                    <p class="bi bi-person-circle m-0 fw-bold fs-5 ms-2 text-dark"><span class="ms-2">Himanshu</span></p>
                </RouterLink>
            </div>
        </div>
        <hr style="margin: 1px 0; opacity: 1;">
        <p class=" m-0 fs-4 text-center fw-bold border-bottom">Purchaser</p>
        <DetailNavLink active="Sample"></DetailNavLink>
        <SearchBar></SearchBar>
        <div v-for="(sample, index) in samples" :key="index" class=" mt-2" @click="showSample(sample)">
            <!-- <RouterLink to="/SampleDetailPage" style="text-decoration: none;"> -->
            <div class="d-flex container">
                <div class="img">
                    <img :src="`${publicPath}${sample.img}`" class="border border2 border-dark"
                        style="width: 60px; height: 60px; border-radius: 50%;">
                </div>
                <div class="ms-3 text-dark">
                    <p class="m-0 fw-bold">{{ sample.name }}</p>
                    <div class="d-flex text-dark">
                        <p class="m-0">Ariving : <span>{{ sample.ariving }}</span></p>
                        <p class="m-0 ms-3">CID : <span>{{ sample.cid }}</span></p>
                    </div>
                </div>
            </div>
            <!-- </RouterLink> -->
        </div>
        <div v-if="Object.keys(activeSample).length !== 0">
            <div :id="'SampleDetail' + activeSample.id" class="offcanvas offcanvas-end show" data-bs-backdrop="static"
                tabindex="-1" aria-labelledby="staticBackdropLabel">
                <!-- <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" 
                aria-labelledby="staticBackdropLabel"> -->
                <div class="d-flex justify-content-center align-items-center">
                    <div class=" w-100 d-flex justify-content-center align-items-center">
                        <p class="fw-bold text-center m-0">{{ activeSample.name }}</p>
                    </div>
                    <div class="d-flex justify-content-end w-100">
                        <button type="button" class="btn" @click="hideSample()"><i class="bi bi-x fs-3"></i></button>
                    </div>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <div class="container">
                            <img :src="`${publicPath}${activeSample.img}`" alt="" class="w-100">
                        </div>
                        <div class="text-center">
                            <p>{{ activeSample.name }}</p>
                            <p>{{ activeSample.tag }} </p>
                        </div>

                        <div class="form container w-100">
                            <table class="table w-100">
                                <tbody class="">
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>{{ activeSample.name }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Price</th>
                                        <td>{{ activeSample.price }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">MOQ</th>
                                        <td>{{ activeSample.moq }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">length</th>
                                        <td>{{ activeSample.length }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Width</th>
                                        <td>{{ activeSample.width }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">GSM</th>
                                        <td>{{ activeSample.gsm }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Color</th>
                                        <td>{{ activeSample.color }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Design</th>
                                        <td>{{ activeSample.design }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Construction</th>
                                        <td>{{ activeSample.construction }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Processes</th>
                                        <td>{{ activeSample.processes }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Discription</th>
                                        <td>{{ activeSample.discription }}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-evenly mt-3 ">
                            <div class="btn btn-success">Creatte PO</div>
                            <div class="btn btn-danger">Reject Sample</div>
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
// import {bootstrap} from 'bootstrap';

export default {
    components: { DetailNavLink, SearchBar },
    computed: {
        samples() {
            return this.$store.getters.getSamples
        },
        activeSample() {
            return this.$store.getters.getSample;
        },
    },
    methods: {
        showSample(sample) {
            // console.log(sample.id)
            // const offcanvasElementList = document.getElementById('SampleDetail ' + sample.id)
            // console.log(offcanvasElementList)
            // const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
            // console.log(offcanvasList)
            return this.$store.dispatch('selectSample', sample);
        },
        hideSample() {
            return this.$store.dispatch('hideSample');
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
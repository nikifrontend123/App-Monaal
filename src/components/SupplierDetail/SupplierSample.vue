<template>
    <div>
        <div class="topnav d-flex justify-content-between container py-2">
            <div class="d-flex">
                <RouterLink to="/SupplierPage">
                    <i class="bi bi-arrow-left-short text-dark fs-3"></i>
                </RouterLink>
                <!-- <i class="bi bi-person-circle fs-3 ms-2"></i> -->
                <RouterLink to="/ProfileDetail" style="text-decoration: none;">
                    <p class="bi bi-person-circle m-0 fw-bold fs-5 ms-2 text-dark"><span class="ms-2">Himanshu</span></p>
                </RouterLink>
            </div>
        </div>
        <hr style="margin: 1px 0; opacity: 1;">
        <p class=" m-0 fs-4 text-center fw-bold border-bottom">Supplier</p>
        <SupplierLink active="SupplierSample"></SupplierLink>
        <SearchBar></SearchBar>
        <div v-for="(supsample, index) in supsamples" :key="index" class="border-top py-2 " @click="showSupsample(supsample)">
            <!-- <RouterLink to="/SampleDetailPage" style="text-decoration: none;"> -->
            <div class="d-flex justify-content-between container">
                <div class="d-flex">
                    <div class="img">
                        <img :src="`${publicPath}${supsample.img}`" class="border border2 border-dark"
                            style="width: 60px; height: 60px; border-radius: 50%;">
                    </div>
                    <div class="ms-3 text-dark d-flex align-items-center justify-content-center ">
                        <p class="m-0 fw-bold">{{ supsample.name }}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-start align-items-center">
                    <button class="btn" :class="supsample.btncolor" style="width: 100px;">{{ supsample.btn }}</button>
                </div>
            </div>
            <!-- </RouterLink> -->
        </div>
        <div v-if="Object.keys(activeSupsample).length !== 0">
            <div :id="'SampleDetail' + activeSupsample.id" class="offcanvas offcanvas-end show border" data-bs-backdrop="static"
                tabindex="-1" aria-labelledby="staticBackdropLabel">
                <!-- <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" 
                aria-labelledby="staticBackdropLabel"> -->
                <div class="d-flex justify-content-center align-items-center ">
                    <div class=" w-100 d-flex justify-content-center align-items-center">
                        <p class="fw-bold text-center m-0">{{ activeSupsample.name }}</p>
                    </div>
                    <div class="d-flex justify-content-end w-100">
                        <button type="button" class="btn" @click="hideSupsample()"><i class="bi bi-x fs-3"></i></button>
                    </div>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <div class="container">
                            <img :src="`${publicPath}${activeSupsample.img}`" alt="" class="w-100">
                        </div>
                        <div class="text-center">
                            <p>{{ activeSupsample.name }}</p>
                            <p>{{ activeSupsample.tag }} </p>
                        </div>

                        <div class="form container w-100">
                            <table class="table w-100">
                                <tbody class="">
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td><input type="text" class="form-control-plaintext" id="staticEmail"
                                            :value="activeSupsample.name"></td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">Price</th>
                                        <td><input type="text" class="form-control-plaintext" id="staticEmail"
                                            :value="activeSupsample.price"></td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">MOQ</th>
                                        <td><input type="text" class="form-control-plaintext" id="staticEmail"
                                            :value="activeSupsample.moq"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">length</th>
                                        <td> <input type="text" class="form-control-plaintext" id="staticEmail"
                                            :value="activeSupsample.length"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Width</th>
                                        <td><input type="text" class="form-control-plaintext" id="staticEmail"
                                            :value="activeSupsample.width"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">GSM</th>
                                        <td><input type="text" class="form-control-plaintext" id="staticEmail"
                                            :value="activeSupsample.gsm"></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Color</th>
                                        <td><input type="text" class="form-control-plaintext" id="staticEmail"
                                            :value="activeSupsample.color"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Design</th>
                                        <td><input type="text" class="form-control-plaintext" id="staticEmail"
                                            :value="activeSupsample.design"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Construction</th>
                                        <td><input type="text" class="form-control-plaintext" id="staticEmail"
                                            :value="activeSupsample.construction"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Processes</th>
                                        <td><input type="text" class="form-control-plaintext" id="staticEmail"
                                            :value="activeSupsample.processes"></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Discription</th>
                                        <td><input type="text" class="form-control-plaintext" id="staticEmail"
                                            :value="activeSupsample.discription"></td>
                                        

                                    </tr>
                                    <tr>
                                        <th scope="row">Courier ID</th>
                                        <td class="col-sm-10">
                                            <input type="text" class="form-control-plaintext" id="staticEmail"
                                                placeholder="Courier ID">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Date</th>
                                        <td class="col-sm-10">
                                            <input type="text" class="form-control-plaintext" id="staticEmail"
                                                placeholder="Defaul Date">
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-evenly mt-3 ">
                            <div class="btn btn-success">Sample Courier Dispatched</div>
                            <!-- <div class="btn btn-danger">Reject Sample</div> -->
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
// import {bootstrap} from 'bootstrap';

export default {
    components: { SearchBar, SupplierLink },
    computed: {
        supsamples() {
            return this.$store.getters.getSupsamples
        },
        activeSupsample() {
            return this.$store.getters.getSupsample;
        },
    },
    methods: {
        showSupsample(supsample) {
            return this.$store.dispatch('selectSupsample', supsample);
        },
        hideSupsample() {
            return this.$store.dispatch('hideSupsample');
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
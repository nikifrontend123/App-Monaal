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
            <DetailNavLink active="Po"></DetailNavLink>
            <SearchBar></SearchBar>
            <div v-for="(po, index) in pos" :key="index" class=" mt-2 border-bottom py-2" @click="showPo(po)">
                <!-- <RouterLink to="/PoDetailPage" style="text-decoration: none;"> -->
                <div class="d-flex container">
                    <div class="img">
                        <img :src="`${publicPath}${po.img}`" class="border border2 border-dark"
                            style="width: 60px; height: 60px; border-radius: 50%;">
                    </div>
                    <div class="ms-3 text-dark">
                        <p class="m-0 fw-bold">{{ po.name }}</p>
                        <div class="d-flex text-dark">
                            <p class="m-0 fw-bold">Qty : <span class="fw-light">{{ po.qty }}</span></p>
                            <p class="m-0 ms-3 fw-bold">Amt : <span class="fw-light">{{ po.amt }}</span></p>
                        </div>
                    </div>
                </div>
                <!-- </RouterLink> -->
            </div>
            <div v-if="Object.keys(activePo).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class=" w-100 d-flex justify-content-center align-items-center">
                            <p class="fw-bold text-center m-0">{{ activePo.name }}</p>
                        </div>
                        <div class="d-flex justify-content-end w-100">
                            <button type="button" class="btn" @click="hidePo()"><i class="bi bi-x fs-3"></i></button>
                        </div>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            <div class="container">
                                <img src="../../assets/Pic.png" alt="" class="w-100">
                            </div>
                            <div class="text-center">
                                <p>Cotton Duck</p>
                                <p>SO/1008 {02042023 & 18:30}</p>
                            </div>
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseOne">
                                            Order Items
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <!-- <th scope="col">#</th> -->
                                                        <th scope="col">Color</th>
                                                        <th scope="col">Rate</th>
                                                        <th scope="col">Quantity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in items" :key="index" class="">
                                                        <!-- <th scope="row">1</th> -->
                                                        <td class="pt-2">
                                                            <div class=" rounded-circle" :class="item.color"
                                                                style="width: 50px; height: 50px;"></div>
                                                        </td>
                                                        <td class="">
                                                            <input class=" form-control " type="text" placeholder="rate"
                                                                v-model="values.rate[index]">
                                                        </td>
                                                        <td>
                                                            <input class=" form-control " type="text" placeholder="qty"
                                                                v-model="values.qty[index]">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="  w-100">
                                                <table class="table table-secondary">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Sub Total</th>
                                                            <th>{{ getTotalQty }} mtrs</th>
                                                            <th>₹{{ getTotalAmnt }}</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                                <div class="text-end">
                                                    <p class="m-0 w-100 fw-bold">(+)GST @ 18% <span class="ms-5 fw-light">{{
                                                        Math.ceil(getTotalAmnt * gst) }}</span></p>
                                                    <p class="m-0 w-100 fw-bold"> Bill Amount <span class="ms-5 fw-light">{{
                                                        Math.ceil(getTotalAmnt +
                                                            (getTotalAmnt * gst)) }}</span></p>
                                                </div>

                                                <div class="d-flex justify-content-center ">
                                                    <button class="w-100 btn btn-light border-dark m-2">Reset</button>
                                                    <button class="w-100 btn btn-light border-dark m-2">Save Change</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseTwo">
                                            Fabric Detail
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                                        <div class="accordion-body">
                                            <div class="form container">
                                                <table class="table w-100">
                                                    <tbody class="">
                                                        <tr>
                                                            <th scope="row">Name</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activePo.name">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Price</th>
                                                            <td class="">
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail"
                                                                    :value="'₹ ' + activePo.price + '/mtr'">
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <th scope="row">MOQ</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activePo.moq">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Length</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activePo.length">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Width</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activePo.width">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">GSM</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activePo.gsm">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Color</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activePo.color">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Design</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activePo.design">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Construction</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activePo.construction">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Processes</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activePo.processes">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Discription</th>
                                                            <td>
                                                                <input type="text" class="form-control-plaintext"
                                                                    id="staticEmail" :value="activePo.discription">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="d-flex justify-content-evenly w-100">
                                                    <div class="btn btn-success w-100 m-2">Accept</div>
                                                    <div class="btn btn-info w-100 m-2">Update</div>
                                                    <div class="btn btn-danger w-100 m-2">Reject</div>
                                                </div>
                                                <div class="d-flex w-100 mt-3">
                                                    <button class="w-100 btn btn-primary">Re-Order</button>
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
    </div>
</template>

<script>
import DetailNavLink from '../Navbar/DetailNavLink.vue';
import SearchBar from '../SearchBar/SearchBar.vue';

export default {
    components: { DetailNavLink, SearchBar },
    computed: {
        pos() {
            return this.$store.getters.getPos
        },
        activePo() {
            return this.$store.getters.getPo;
        },
        items() {
            return this.$store.getters.getItems
        },
        getTotalAmnt() {
            let x = 0;
            for (let index = 0; index < Object.keys(this.values.rate).length; index++) {
                const element = this.values.rate[index] * this.values.qty[index];
                x = x + element;
            }
            return x;
        },
        getTotalRate() {
            let x = 0;
            for (let index = 0; index < Object.keys(this.values.rate).length; index++) {
                x = x + parseInt(this.values.rate[index]);

            }
            return x.toLocaleString();
        },
        getTotalQty() {
            let x = 0;
            for (let index = 0; index < Object.keys(this.values.qty).length; index++) {
                x = x + parseInt(this.values.qty[index]);
            }
            return x.toLocaleString();
        },
    },
    methods: {
        showPo(po) {
            return this.$store.dispatch('selectPo', po);
        },
        hidePo() {
            return this.$store.dispatch('hidePo');
        }
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            values: {
                rate: [],
                qty: [],
            },
            gst: .18
        }
    },
}
</script>

<style lang="scss" scoped></style>
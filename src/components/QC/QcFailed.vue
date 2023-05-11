<template>
    <div>
        <div class="d-flex justify-content-between px-2 border-bottom ">
            <RouterLink to="/QcPage">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center py-2">Quality Check</h4>
            <div class=""></div>
        </div>
        <QcLinks active="QCFailed"></QcLinks>
        <div v-for="(qcfailed, index) in qcfaileds" :key="index">
                <div class="d-flex justify-content-between w-100vw">
                    <div class="d-flex my-2">
                        <div class="border border-2 border-dark rounded-circle">
                        <img :src="`${publicPath}${qcfailed.img}`" style="width: 60px; height: 60px; border-radius: 50px;">
                    </div>
                        <div class=" align-items-center text-dark ">
                            <p class=" m-0 ps-2  fw-bold">{{ qcfailed.name }}</p>
                            <p class=" m-0 ps-2 ">{{ qcfailed.mtr }} mtr | {{ qcfailed.bundle }} bundle</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="mx-2" style="width: 40px;">
                            <input class="form-control border-" type="text" style="border: none; border-bottom: 1px solid black;">
                        </div>
                        <div class="mx-2" style="width: 40px;">
                            <input class="form-control border-" type="text" style="border: none; border-bottom: 1px solid black;">
                        </div>
                        <!-- <div class="w-25">
                            <input type="text" style="border: none; border-bottom: 1px solid black;">
                        </div> -->
                        
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import QcLinks from '../Navbar/QcLinks.vue';

export default {
    components: { QcLinks },
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        qcfaileds() {
            return this.$store.getters.getQcfaileds;
        }
    }
}
</script>

<style lang="scss" scoped>
.form-control {
    border-radius: 0;;
}
</style>
<template>
    <div>
        <div class="d-flex justify-content-between px-2 border-bottom ">
            <RouterLink to="/QcPage">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center py-2">Quality Check</h4>
            <div class=""></div>
        </div>
        <QcLinks active="QCPassed"></QcLinks>
        <div v-for="(qcpassed, index) in qcpasseds" :key="index">
                <div class="d-flex justify-content-between">
                    <div class="d-flex my-2">
                        <div class="border border-2 border-dark rounded-circle">
                        <img :src="`${publicPath}${qcpassed.img}`" style="width: 60px; height: 60px; border-radius: 50px;">
                    </div>
                        <div class=" align-items-center text-dark ">
                            <p class=" m-0 ps-2  fw-bold">{{ qcpassed.name }}</p>
                            <p class=" m-0 ps-2 ">Roll:{{ qcpassed.roll }} | {{ qcpassed.add }}</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center ">
                        <div class="px-2 text-center">
                            <input type="checkbox">
                            <span class="fw-bold px-2 ">QC</span>
                        </div>
                        
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
        qcpasseds() {
            return this.$store.getters.getQcpasseds;
        }
    }
}
</script>

<style lang="scss" scoped></style>
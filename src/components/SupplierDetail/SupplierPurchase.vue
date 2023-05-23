<template>
    <div>
        <div class="d-flex border-bottom justify-content-between px-2">
            <RouterLink to="/SupplierPage">
                <i class="bi bi-arrow-left-short fs-4 text-dark"></i>
            </RouterLink>
            <h4 class="text-center  fw-bold py-2">Store Keeper</h4>
            <div class=""></div>
        </div>
        <div v-for="(supchat, index) in supchats" :key="index" class=" container w-100">
            <RouterLink to="/SupplierFabric" class="text-decoration-none">
                <div class="d-flex justify-content-between">
                    <div class="d-flex my-2">
                        <div class="border border-2 border-dark rounded-circle">
                            <img :src="`${publicPath}${supchat.imgDp}`"
                                style="width: 60px; height: 60px; border-radius: 50px;">
                        </div>
                        <div class="d-flex align-items-center text-dark ">
                            <p class=" m-0 ps-2 fs-5">{{ supchat.name }}</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center ">
                        <p class="badge bg-secondary">4</p>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    computed: {
        supchats() {
            return this.$store.getters.getSupchats;
        }
    }
}
</script>

<style lang="scss" scoped></style>
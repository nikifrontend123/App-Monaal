<template>
    <div>
        <div class="d-flex border-bottom justify-content-between px-2">
            <RouterLink to="/PurchasesPage">
                <i class="bi bi-arrow-left-short fs-4"></i>
            </RouterLink>
            <h4 class="text-center  fw-bold py-2">Manage</h4>
            <div class=""></div>
        </div>
        <PurchaseLink active="Purchase"></PurchaseLink>
        <SearchBar></SearchBar>
        <div v-for="(chat, index) in chats" :key="index" class=" border-top w-100">
            <RouterLink to="/NewPage" class="text-decoration-none">
                <div class="d-flex justify-content-between container">
                    <div class="d-flex my-2">
                        <div class="border border-2 border-dark rounded-circle">
                            <img :src="`${publicPath}${chat.imgDp}`"
                                style="width: 60px; height: 60px; border-radius: 50px;">
                        </div>
                        <div class="d-flex align-items-center text-dark ">
                            <p class=" m-0 ps-2 fs-5">{{ chat.name }}</p>
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
import PurchaseLink from '../Navbar/PurchaseLink.vue';
import SearchBar from '../SearchBar/SearchBar.vue';

export default {
    data() {
        return {
            publicPath: process.env.BASE_URL
        };
    },
    computed: {
        chats() {
            return this.$store.getters.getChats;
        }
    },
    components: { PurchaseLink, SearchBar }
}
</script>

<style lang="scss" scoped></style>
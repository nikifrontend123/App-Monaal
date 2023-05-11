<template>
    <div>
        <div id="mobile bottomNav">
            <div class="bnav d-flex h-100">
                <div class="bottom-nav w-100 position-fixed " style="bottom: 0px;">
                    <div class="bottom-nav w-100 position-absolute" style="height: 5%;">
                        <div class="btn-front position-absolute d-flex justify-content-evenly w-100 "
                            style="bottom:0; width: 100%; background-color: #f2f2f2; ">
                            <div class="d-grid">
                                <RouterLink to="/" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-house-fill fs-4"></i>
                                    <p style="font-size: 14px;">Home</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/OrderPage" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-journal-bookmark fs-4"></i>
                                    <p style="font-size: 14px;">Orders</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/FabricatorsPage" class="text-dark text-center"
                                    style="text-decoration: none;">
                                    <i class="bi bi-people-fill fs-4"></i>
                                    <p style="font-size: 14px;">Fabricators</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="bi bi-bookmarks-fill fs-4"></i>
                                    <p style="font-size: 14px;">Catlogs</p>
                                </RouterLink>
                            </div>
                            <div class="d-grid">
                                <RouterLink to="/" class="text-dark text-center" style="text-decoration: none;">
                                    <i class="fs-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                            class="bi bi-currency-rupee" viewBox="0 0 16 16">
                                            <path
                                                d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                        </svg>
                                    </i>
                                    <p style="font-size: 14px;">Payment</p>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
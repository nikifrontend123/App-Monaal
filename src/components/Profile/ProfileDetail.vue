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
        <div class="d-flex justify-content-center">
            <img src="../../assets/profile.jpg" width="100" alt="">
        </div>
        <div class="container py-3">
            <p class="text-center fw-bold">Personal Details</p>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Person Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Mobile No.</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Address</label>
            </div>
            <p class="text-center fw-bold">Company Details</p>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Company Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">GST No.</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">PAN</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
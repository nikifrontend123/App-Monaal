<template>
    <div>
        <div v-if="design === 1" class="">
            <i class="bi bi-list-ul fs-3"></i>
        </div>
        <div v-if="design === 2" class="">
            <i class="bi bi-grid-3x3-gap-fill fs-3"></i>
        </div>
        <div v-if="design === 3" class="">
            <i class="bi bi-grid-fill fs-3"></i>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ClothCard',
    props: ['design'],

}
</script>

<style lang="scss" scoped></style>
<template>
    <div class="">
    <div class="row gx-0 row-cols-2" >
        <div  v-for="(fabric, index) in rack.fabrics" :key="index" :id="'rack-' + rack.id" class="col p-1 " style="padding-top:80px !important;">
            <RouterLink class="w-100" :to="'/RackItemBundles/' + godown.id + '/' + rack.id" >
                <img :src="`${publicPath}${fabric.img1}`"  style="height: 250px; object-fit: cover; width: 100%;">
            </RouterLink>  
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ['rack', 'godown'],
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
}
</script>

<style lang="scss" scoped></style>
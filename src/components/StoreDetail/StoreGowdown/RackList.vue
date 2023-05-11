<template>
    <a class="list-group-item list-group-item-action" :href="'#rack-' + rack.id">
        <p>{{ rack.name }}</p>
    </a>
</template>

<script>
export default {
    props: ['rack']
}
</script>

<style lang="scss" scoped></style>
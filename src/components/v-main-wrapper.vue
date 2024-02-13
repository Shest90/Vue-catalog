<template>
    <div class="v-main-wrapper">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "v-main-wrapper",
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {},
        watch: {},
    }
</script>

<style lang="scss">
    .v-main-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: auto;
    }
</style>
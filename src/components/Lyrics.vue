<template>
    <div class="lyric-container">
        <div v-bind:key="lyric" v-for="lyric in lyrics">
            <div>{{lyric}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Lyrics",
    props: ["lyrics"]
}
</script>

<style scoped>
    .lyric-container {
        text-align: center;
    }
</style>
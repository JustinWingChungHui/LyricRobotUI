<template>
    <transition name="fade">
        <div class="lyric-container">
            <div class="lyric-line" v-bind:key="index" v-for="(lyric, index) in lyrics">
                <div>{{lyric}}</div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Lyrics",
    props: {
        lyrics: {
            type: Array
        }
    }
}
</script>

<style scoped>
    .lyric-container {
        text-align: left;
        margin: 0px auto;
        max-width: 25em;
        padding: 25px;
        background-color: whitesmoke;
        border-radius: 14px;
    }

    .lyric-line {
        padding-bottom: 8px;
    }

    .fade-enter-active {
        transition: opacity .5s;
    }
    .fade-enter {
        opacity: 0;
    }
</style>
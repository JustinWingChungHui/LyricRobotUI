<template>
    <div>
        <form class="pure-form pure-form-stacked" v-on:submit.prevent="onClassify(options)">
            <fieldset>
                <textarea class="lyric-textarea" placeholder="Paste lyrics here..." v-model="lyrics" rows="10" cols="50"></textarea>
            </fieldset>

           <button 
                type='button'
                class="pure-button pure-button-primary padded-label" 
                v-on:click="onClassify(lyrics)">Classify</button>

        </form>
    </div>
</template>

<script>

export default {
    name: "LyricInputForm",
    data() {
        return {
            lyrics: ""
        }
    },
    methods: {
        onClassify(lyrics) {
            window.console.log(`onClassify called with lyrics: ${lyrics.substring(0, 30)}...`);
            this.$emit('classify', lyrics)
        }
    }
}
</script>

<style scoped>
    .lyric-textarea{
        margin-left: auto;
        margin-right: auto;
    }
</style>
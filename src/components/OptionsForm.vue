<template>
    <div>
        <form class="pure-form" v-on:submit.prevent="onCreate(number_of_lyrics)">
            <fieldset>

                <label for="lines"><strong>Lines: </strong></label>

                <input type="number" class="padded-label" v-model="number_of_lyrics" :disabled="disabled" min="1" max="200">
                <button 
                    type='button'
                    class="pure-button pure-button-primary padded-label" 
                    :disabled="disabled"
                    v-on:click="onCreate(number_of_lyrics)">Create</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    name: "OptionsForm",
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            number_of_lyrics: 10,
        }
    },
    methods: {
        onCreate(number_of_lyrics) {
            console.log("Child onCreate called with number_of_lyrics= " + number_of_lyrics)
            this.$emit('create', number_of_lyrics)
        }
    }
}
</script>

<style scoped>
    .padded-label {
        margin: 5px;
        max-width: 6em;
        display: inline-block !important;
    }

</style>
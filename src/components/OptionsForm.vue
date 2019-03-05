<template>
    <div>
        <form class="pure-form" v-on:submit.prevent="onCreate(options)">
            

            <fieldset>

                <label for="lines"><strong>Lines: </strong></label>

                <input type="number" class="padded-label" v-model="options.number_of_lyrics" :disabled="disabled" min="1" max="200">
                <button 
                    type='button'
                    class="pure-button pure-button-primary padded-label" 
                    :disabled="disabled"
                    v-on:click="onCreate(options)">Create</button>
                
            </fieldset>

            <fieldset>
                <a href='#' v-on:click="show_advanced_options =!show_advanced_options">Advanced Options</a>
                <div class="advanced-options" v-if="show_advanced_options">
                    <SwitchControl label="Allow profanities" 
                        v-bind:disabled="disabled" 
                        @onSwitchChanged="state => options.allow_profanities = state"/>
                </div>
            </fieldset>
            

        </form>
    </div>
</template>

<script>
import SwitchControl from './SwitchControl';

export default {
    name: "OptionsForm",
      components: {
        SwitchControl
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            
            show_advanced_options: false,
            options: {
                number_of_lyrics: 10,
                allow_profanities: false
            }
            
        }
    },
    methods: {
        onCreate(options) {
            console.log(`Child onCreate called with number_of_lyrics:${options.number_of_lyrics} allow_profanities:${options.allow_profanities}`)
            this.$emit('create', options.number_of_lyrics, options.allow_profanities)
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
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
                <div class="advanced-options" v-show="show_advanced_options">
                    <div class="pure-g">
                        <div class="pure-u-1-2">
                            <label for="allow_profanities">Allow Profanities: </label>
                        </div>
                        <div class="pure-u-1-2">
                            <SwitchControl
                                v-bind:disabled="disabled" 
                                v-bind:initialValue="options.allow_profanities"
                                @onSwitchChanged="state => options.allow_profanities = state"/>
                        </div>
                    </div>
                    <div class="pure-g">
                        <div class="pure-u-1-2">
                            <label for="genre">Genre: </label>
                        </div>
                        <div class="pure-u-1-2">
                            <select v-model="options.genre">
                                <option disabled value="">Please select one</option>
                                <option>All</option>
                                <option>Acoustic</option>
                                <option>Alternative</option>
                                <option>Dance</option>
                                <option>Electronic</option>
                                <option>Eurovision</option>
                                <option>Experimental</option>
                                <option>Folk</option>
                                <option>Funk</option>
                                <option>HipHop</option>
                                <option>Indie</option>
                                <option>Jazz</option>
                                <option>Metal</option>
                                <option>Pop</option>
                                <option>Rock</option>
                                <option>SingerSongWriter</option>
                            </select>
                        </div>
                    </div>
                </div>
            </fieldset>
            

        </form>
    </div>
</template>

<script>
import SwitchControl from '../common/SwitchControl';

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
                allow_profanities: false,
                genre: "All"
            }
            
        }
    },
    methods: {
        onCreate(options) {
            this.$emit('create', options)
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

    /**Stop stacking label on mobile device**/
    .pure-form input:not([type]), .pure-form input[type="text"], .pure-form input[type="password"], .pure-form input[type="email"], .pure-form input[type="url"], .pure-form input[type="date"], .pure-form input[type="month"], .pure-form input[type="time"], .pure-form input[type="datetime"], .pure-form input[type="datetime-local"], .pure-form input[type="week"], .pure-form input[type="number"], .pure-form input[type="search"], .pure-form input[type="tel"], .pure-form input[type="color"], .pure-form label {
        margin-bottom: 0.3em;
        display: inline-block !important;
    }

    .advanced-options {
        text-align: left;
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
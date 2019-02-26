<template>
    <div>
        <form class="pure-form">
            <fieldset>

                <label for="lines">Lines: </label>

                <input type="number" v-model="number_of_lyrics">
                <button class="pure-button pure-button-primary">Generate Lyrics</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    name: "OptionsForm",
    props: {
        number_of_lyrics: {
            default: 10,
            type: Number
        },
        
    }
}
</script>

<style scoped>
</style>
<template>
    <transition name="fade">
        <div>        
            <table class="pure-table genre-table">
                <thead>
                    <tr>
                        <th>Genre</th>
                        <th>Probability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-bind:key="item.genre" v-for="item in classificationResults">
                        <td>{{item.genre}}</td>
                        <td>{{Number(item.result.probability).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})}}</td>
                    </tr>
                </tbody>
            </table>
            <Lyrics v-bind:lyrics="lyrics"/>
        </div>
    </transition>
</template>

<script>
import Lyrics from '../common/Lyrics';

export default {
    name: "ClassificationResult",
    components: {
        Lyrics,
    },
    props: {
        classificationResults: {
            type: Array
        },
        lyrics: {
            type: Array
        }
    },
}
</script>

<style scoped>
    .fade-enter-active {
        transition: opacity .5s;
    }
    .fade-enter {
        opacity: 0;
    }

    .genre-table {
        margin-left: auto;
        margin-right: auto;
        text-align: left;
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: 13px
    }

    /** Stripe the table */
    tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, .05);
    }

</style>
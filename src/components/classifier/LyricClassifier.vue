<template>
  <div>
    <Header v-bind:loading="loading" />
    
    <div class="content">
      <h2>Classifier</h2>
      <Loading v-show="loading" v-bind:message="loadingMessage"/>

      <button class="pure-button pure-button-primary"
        v-show="this.classificationResults.length > 0"
        v-on:click="onReset()">Reset</button>

      <ClassificationResult v-show="this.classificationResults.length > 0"
        v-bind:classificationResults="classificationResults" 
        v-bind:lyrics="lyrics" />

      <LyricInputForm v-show="showform" @classify="classify"/>
      
    </div>
  </div>
</template>

<script>
import Header from '../common/Header';
import Loading from '../common/Loading';
import LyricInputForm from './LyricInputForm';
import ClassificationResult from './ClassificationResult'
import axios from 'axios';

export default {
  name: 'LyricClassifier',
  components: {
    Header,
    Loading,
    LyricInputForm,
    ClassificationResult
  },
  
  data() {
    return {
      loading: false,
      warmup: false,
      loadingMessage: "",
      showform: true,
      lyrics: [],
      classificationResults: []
    }
  },
  
  mounted() {
      window.console.log("mounted")
      this.warmupFunction()
  },

  methods: {
    onReset() {
      this.loading = false;
      this.showform = true;
      this.lyrics = [];
      this.classificationResults =[];
    },

    warmupFunction() {

      this.warmup = true;

      // warm up azure function
      axios.post(`${this.$config.ClassifyLyricAPI}?code=${this.$config.ClassifyLyricAPICode}` ,{
        timeout: 30000,
        warmup: true           
      }).then(() => {
        this.warmup = false;
        this.updateLoadingMessage();
      })
    },

    updateLoadingMessage() {
      if (this.warmup && this.loading) {
        this.loadingMessage = "Restarting Robot after shutdown...";
      } else if (!this.warmup && this.loading) {
        this.loadingMessage = "Hmmm... studying these lyrics...";
      } else {
        this.loadingMessage = "";
      }
    },

        // Fires off to call Create Lyric api and returns data
    classify(lyrics) {
       window.console.log(`Child classify called`);
       this.loading = true;
       this.showform = false;
       this.lyrics = lyrics.split("\n");
       this.updateLoadingMessage();

       axios.post(`${this.$config.ClassifyLyricAPI}?code=${this.$config.ClassifyLyricAPICode}` ,{
         timeout: 30000,
         lyrics: lyrics
       }).then((response) => {
          window.console.log(response);
          this.loading = false;
          this.updateLoadingMessage();

          this.classificationResults = response.data.results;

       }).catch((ex) => {
          window.console.log(ex);
       });
    }
  }
}
</script>

<style>

</style>

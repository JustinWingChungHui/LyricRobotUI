<template>
  <div>
    <Header v-bind:loading="loading" />
    
    <div class="content">
      <h3>Generator</h3>
      <OptionsForm @create="createLyrics" v-bind:disabled="formDisabled"/>
      <Loading v-show="loading" v-bind:message="loadingMessage"/>
      <Lyrics v-bind:lyrics="lyrics" v-show="lyricsVisible"/>
    </div>
    
  </div>
</template>

<script>
import Header from '../common/Header';
import Lyrics from '../common/Lyrics';
import Loading from '../common/Loading';
import OptionsForm from './OptionsForm';
import axios from 'axios';

export default {
  name: 'LyricGenerator',
  components: {
    Header,
    Loading,
    OptionsForm,
    Lyrics
  },
  
  data() {
    return {
      lyrics: [],
      loading: false,
      formDisabled: false,
      lyricsVisible: false,
      warmup: false,
      loadingMessage: ""
    }
  },
  
  mounted() {
      window.console.log("mounted")
      this.warmupFunction()
  },

  methods: {
    
    warmupFunction() {

      this.warmup = true;

      // warm up azure function
      axios.get(this.$config.CreateLyricAPI ,{
          timeout: 30000,
          params: {
            code: this.$config.CreateLyricAPICode,
            warmup: true
            },          
      }).then(() => {
        this.warmup = false;
        this.updateLoadingMessage();
      })
    },

    updateLoadingMessage() {
      if (this.warmup && this.loading) {
        this.loadingMessage = "Restarting Robot after shutdown...";
      } else if (!this.warmup && this.loading) {
        this.loadingMessage = "Generating Lyrics...";
      } else {
        this.loadingMessage = "";
      }
    },

    // Fires off to call Create Lyric api and returns data
    createLyrics(options) {
       window.console.log(`Child createLyrics called with lines:${options.number_of_lyrics} allow_profanities:${options.allow_profanities} genre: ${options.genre}`)
       this.loading = true;
       this.formDisabled = true;
       this.lyricsVisible = false;
       this.lyrics = [];
       this.updateLoadingMessage();

       axios.get(this.$config.CreateLyricAPI ,{
         timeout: 30000,
         params: {
          code: this.$config.CreateLyricAPICode,
          lines: options.number_of_lyrics,
          profanities: options.allow_profanities,
          genre: options.genre
          },          
       }).then((response) => {
          window.console.log(response);
          this.loading = false;
          this.formDisabled = false;
          this.lyricsVisible = true;
          this.lyrics = response.data;
          this.updateLoadingMessage();
       }).catch((ex) => {
          window.console.log(ex);
       });
    }
  }
}
</script>

<style>

</style>

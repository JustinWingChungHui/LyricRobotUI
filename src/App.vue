<template>
  <div id="app">
    <Header v-bind:loading="loading" />
    
    <div class="content">
      <OptionsForm @create="createLyrics" v-bind:disabled="formDisabled"/>
      <Loading v-bind:visible="loading" v-bind:message="loadingMessage"/>
      <Lyrics v-bind:lyrics="lyrics" v-bind:visible="lyricsVisible"/>     
    </div>
    
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Lyrics from './components/Lyrics';
import Loading from './components/Loading';
import Footer from './components/Footer';
import OptionsForm from './components/OptionsForm';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Lyrics,
    Loading,
    OptionsForm
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
      console.log("mounted")
      this.warmupFunction()
  },

  methods: {
    
    warmupFunction() {

      this.warmup = true;

      // warm up azure function
      axios.get('https://lyriccreator.azurewebsites.net/api/LyricCreatorFunction' ,{
          timeout: 30000,
          params: {
            code: 'N87Je1kenLA0R3pihqLE466DUfYtfdu1MzzAnd8C3mJCfXLjqbTpvQ==',
            warmup: true
            },          
      }).then((response) => {
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
    createLyrics(lines) {
       this.loading = true;
       this.formDisabled = true;
       this.lyricsVisible = false;
       this.lyrics = [];
       this.updateLoadingMessage();

       axios.get('https://lyriccreator.azurewebsites.net/api/LyricCreatorFunction' ,{
         timeout: 30000,
         params: {
          code: 'N87Je1kenLA0R3pihqLE466DUfYtfdu1MzzAnd8C3mJCfXLjqbTpvQ==',
          lines: lines
          },          
       }).then((response) => {
          console.log(response)
          this.loading = false;
          this.formDisabled = false;
          this.lyricsVisible = true;
          this.lyrics = response.data;
          this.updateLoadingMessage();
       }).catch((ex) => {

       });
    }
  }
}
</script>

<style>
@import "../node_modules/purecss/build/pure.css";

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.content {
    margin: 10px auto;
    text-align: center;
    height: 100%;
    min-height: 500px;

}

</style>

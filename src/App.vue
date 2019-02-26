<template>
  <div id="app">
    <Header/>
    <div class="content">
      <OptionsForm/>
      <Lyrics v-bind:lyrics="lyrics"/>
      <Loading v-bind:visible="loading"/>
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
      lyrics: [
        "Gather in the moves me",
        "Then will rise and you but i'ma need no fear puts a mirror how what you but i’m here",
        "Save you remember i'll be cruel"
      ],
      loading: true
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
    margin: 0px auto;
    text-align: center;
    height: 100%;
}

</style>

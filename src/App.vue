<template>
  <div id="app">
      <!--Menu-->
      <div class="pure-menu pure-menu-horizontal menu">
        <router-link to="/" class="pure-menu-heading pure-menu-link">
          <img alt="Robot" src="./assets/robot-with-a-gear.svg" height="20"/>
        </router-link>   
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <router-link to="/" class="pure-menu-link">Generator</router-link>
          </li>
          <li class="pure-menu-item">
            <router-link to="/classifier/" class="pure-menu-link" >Classifier</router-link>
          </li>
        </ul>
      </div>


    <router-view/>

    <Footer/>

  </div>
</template>

<script>
import Footer from './components/common/Footer';

export default {
  name: 'app',
  components: {
    Footer,
  },
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

.menu {
    background-color: #CEF;
}

</style>

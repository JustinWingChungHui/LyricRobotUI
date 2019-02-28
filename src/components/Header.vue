<template>
  <div class="header">
    <h1>Lyric Robot</h1>
    <img v-bind:class="{ animated: loading, shake: loading, infinite: loading }" 
      alt="Robot" src="../assets/robot-with-a-gear.svg" height="100">    
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: { 
    loading: {
      type: Boolean
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../node_modules/animate.css/animate.min.css";

  .header {
    margin: 0px auto;
    text-align: center;
  }
</style>

<template>
  <div class="footer">
    <p>Open source project maintained at <a href="https://www.github.com/justinwingchunghui/LyricRobotUI">https://www.github.com/justinwingchunghui/LyricRobotUI</a> and <a href="https://www.github.com/justinwingchunghui/LyricRobot">https://www.github.com/justinwingchunghui/LyricRobot</a></p>
    <p>Lyrics generated from data from <a href="https://musicdemons.com/">https://musicdemons.com</a></p>
    <p>Genres classified by LastFM tags <a href="https://www.last.fm/">https://www.last.fm</a></p>
    <p>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>

<style scoped>
  .footer{
    margin: 0px auto;
    text-align: center;
    position: relative;
    bottom:0;
    width:100%;
    background:#AAA;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: small;
  }
</style>

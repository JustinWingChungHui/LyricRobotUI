<template>
  <div class="footer">
    <div>Open source project maintained at <a href="https://www.github.com/justinwingchunghui/LyricRobotUI">https://www.github.com/justinwingchunghui/LyricRobotUI</a> and <a href="https://www.github.com/justinwingchunghui/LyricRobot">https://www.github.com/justinwingchunghui/LyricRobot</a></div>
    <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
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
    height:60px;   /* Height of the footer */
    background:#AAA;
    padding-top: 10px;
    font-size: small;
  }
</style>

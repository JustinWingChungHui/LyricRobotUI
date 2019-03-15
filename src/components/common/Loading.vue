<template>
    <div>
        <div>{{message}}</div>
        <div class="gear-container">
            <i id="gear1" class="fa fa-5x fa-gear spin"></i>
            <i id="gear2" class="fa fa-5x fa-gear spin-back"></i>
            <i id="gear3" class="fa fa-5x fa-gear spin"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "Loading",
    props: {
        message: {
            type: String
        }
    }
}
</script>

<style scoped>
@import "../../../node_modules/font-awesome/css/font-awesome.css";

.gear-container {
    overflow: hidden;
    position: relative;
    height: 200px;
    left: 45%;
}

@media only screen and (max-width: 700px) {
    .gear-container {
        left: 30%;
    }
}

@media only screen and (max-width: 500px) {
    .gear-container {

        left: 20%;
    }
}

#gear1, #gear2, #gear3 {
    color: #888;
    display: block;
    position: absolute;

}
            
#gear1 {
    top: 45px;
}
            
#gear2 {
    left: 60px;
}

#gear3 {
    top: 45px;
    left: 110px;
}

.spin {
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}

.spin-back {
    -webkit-animation:spin-back 4s linear infinite;
    -moz-animation:spin-back 4s linear infinite;
    animation:spin-back 4s linear infinite;
}

@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

@-moz-keyframes spin-back { 100% { -moz-transform: rotate(-360deg); } }
@-webkit-keyframes spin-back { 100% { -webkit-transform: rotate(-360deg); } }
@keyframes spin-back { 100% { -webkit-transform: rotate(-360deg); transform:rotate(-360deg); } }
</style>
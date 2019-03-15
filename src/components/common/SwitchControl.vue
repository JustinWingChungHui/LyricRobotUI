<template>
    <div class="switch-container">       
        <label class="switch">                   
            <input type="checkbox" v-model="value" :disabled="disabled" @change="onSwitchChanged(value)"/>
            <span class="slider round"></span>
        </label>

    </div>
</template>

<script>

export default {
    name: "SwitchControl",
    props: {
        initialValue: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        }
    },
    data() {
        return {
            value: false
        }
    },
    methods: {
        onSwitchChanged(value) {
            console.log(`Child onSwitchChanged called value:${value}`)
            this.$emit('onSwitchChanged', value)
        }
    }
}
</script>

<style scoped>
    .switch-container {
        padding: 5px;
    }
    .switch-label {
        padding-right: 10px;
    }

     /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 24px;
        margin-right: 5px;        
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 2px;
        bottom: 3px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 28px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    .pure-form input:not([type]), .pure-form input[type="text"], .pure-form input[type="password"], .pure-form input[type="email"], .pure-form input[type="url"], .pure-form input[type="date"], .pure-form input[type="month"], .pure-form input[type="time"], .pure-form input[type="datetime"], .pure-form input[type="datetime-local"], .pure-form input[type="week"], .pure-form input[type="number"], .pure-form input[type="search"], .pure-form input[type="tel"], .pure-form input[type="color"], .pure-form label {
        margin-bottom: 0.3em;
        display: inline-block !important;
    }

</style>
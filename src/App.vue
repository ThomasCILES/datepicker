<template>
    <div id="app">
        <DatePicker :now="now()"></DatePicker>
    </div>
</template>

<script>
    import DatePicker from './components/DatePicker.vue'
    import {now} from './api/date';

    export default {
        name: 'app',
        components: {
            DatePicker
        },
        methods: {
            now
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
    <div id="datepicker">
        <div v-for="day in days" @click="handleOnClick(day)"> {{ dayInMonth(day) }} </div>
    </div>
</template>

<script>
    import {getMoment, getDaysInMonth} from '../api/date';

    export default {
        name: 'DatePicker',
        props: ['now'],
        computed: {
            today: () => getMoment(this.now),
            days : () => getDaysInMonth(this.now)
        },
        methods: {
            dayInMonth(m) {
                return m.get('D');
            },
            handleOnClick(m) {
                console.log(m);
            }
        }
    }
</script>
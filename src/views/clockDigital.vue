<template>
 <div>
     <span>{{ str_time }}</span>
 </div>
</template>

<script>
import * as dateFns from 'date-fns'

export default {
    components: {
      
    },

    data() { 
        return {
        now:  new Date(),
        interval: null,
    }},

    computed: {
        hr() {
            return dateFns.getHours(this.now)
        },
        min() {
            return(dateFns.getMinutes(this.now) < 10 ? '0' : '') + dateFns.getMinutes(this.now)
        },
        sec() {
            return(dateFns.getSeconds(this.now) < 10 ? '0' : '') + dateFns.getSeconds(this.now)
        },
        str_time() {
            return `${this.hr}:${this.min}:${this.sec}`
        }
    },

    beforeMount() {
        this.interval = setInterval(() => {
            this.now = new Date()
        }, 1000)
    },

    beforeDestroy() {
        clearInterval(this.interval)
    }

}

</script>
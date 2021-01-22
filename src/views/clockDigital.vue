<template>
 <div>
     <span>{{ str_time }}</span>
 </div>
</template>

<script>
// import de tout les packages de la librarie date-fns 
// pour utiliser heure, minutes, secondes
import * as dateFns from 'date-fns'

export default {
    components: {
    },

    data() { 
        return {
            // creation de l'objet Date 
        now:  new Date(),
        interval: null,
    }},

    computed: {
        // On cherche l'heure actuelle et on ajoute un 0 si inferieur a 10
        hr() {
            return(dateFns.getHours(this.now) < 10 ? '0' : '') + dateFns.getHours(this.now)
        },
        min() {
            return(dateFns.getMinutes(this.now) < 10 ? '0' : '') + dateFns.getMinutes(this.now)
        },
        sec() {
            return(dateFns.getSeconds(this.now) < 10 ? '0' : '') + dateFns.getSeconds(this.now)
        },
        str_time() {
            // retourne la date heure minutes secondes 
            return `${this.hr}:${this.min}:${this.sec}`
        }
    },

    beforeMount() {
        // la methode setInterval appelle la fonction clearInterval toutes les secondes
        this.interval = setInterval(() => {
            this.now = new Date()
        }, 1000) // temps en millisecondes 
    },

    // efface la minuterie definie avec setInterval
    beforeDestroy() {
        clearInterval(this.interval)
    }
}

</script>
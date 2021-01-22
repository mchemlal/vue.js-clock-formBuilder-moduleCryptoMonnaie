import Vue from 'vue'
import VueRouter from 'vue-router' // permet d'instancier le router avec la classe VueRouter plus bas dans le script
import home from '../views/home.vue'
import bitcoin from '../views/bitcoin.vue'

Vue.use(VueRouter) // init plug in dans l'application -> .use appel proprio - nécessaire 


const routes = [{
        path: '/', // appel à la Vue "Home" via l'import ci-dessus
        name: 'Home',
        component: home
    },
    {
        path: '/formulaire', // appel autonome à la Vue "formulaire"
        name: 'formulaire',
        component: () =>
            import ('../views/formulaire.vue') // lazy loading afin de gagner en performance
    },
    {
        path: '/bitcoin',
        name: 'bitcoin',
        component: bitcoin
    },
    {
        path: '/clock',
        name: 'clock',
        component: () =>
            import ('../views/clock.vue')
    }
]

const router = new VueRouter({ // instancie l'obget "router"
    mode: 'history', // mode special du navigateur - résoudre le problème de changement de page  
    base: process.env.BASE_URL, // variable d'environnement -> binder les fichiers d'assets 
    routes: routes,
})

export default router // export l'objet "router" afin de pouvoir les routes
import Vue from 'vue' // appel à Vue de la librairie Vue.js -> actionner le projet Vue sur IDE
import App from './App.vue' // appel au script App.vue qui  streamline l'ensemble des "views" (les différentes pages de notre application)
import router from './router' // appel au router qui centralise l'ensemble des appels 
import ElementUI from 'element-ui'; //loading de la librairie Element UI
import 'element-ui/lib/theme-chalk/index.css'; // loading de la partie de librairie à utliser pour l'application

Vue.use(ElementUI); // requete d'utlisation de ElementUI
Vue.config.productionTip = false

new Vue({ // appel à new Vue pour créer l'application
        router, // appel au router pour lancer les différentes vue de l'application
        render: h => h(App),
    }).$mount('#app') // référence à l'id #app de App.vue
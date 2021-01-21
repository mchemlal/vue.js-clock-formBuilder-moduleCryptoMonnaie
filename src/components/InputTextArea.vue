<template>
    <div>
        <div class="test">

  <div v-if="isDisplay">
    <textarea id="mytextarea" type="text" placeholder="Entrer votre texte..." cols="30" rows="5" style="outline: 1px green" v-model="model.text"></textarea>
    <button v-on:click="hide">🗑</button>
      <pre>
      {{ JSON.stringify(model, null, 2)}} <!-- ARG(valeur, remplacant, espace)-->
    </pre>
    <hr>
  </div>
</div>
    </div>
</template>

<script>
export default {
    data() {
  
   return {
     model: {
            text: '',
     },
     isDisplay: true
     }
  },

    methods: {
    hide: function () {
      this.isDisplay = false;
    }
        }
    }

</script>
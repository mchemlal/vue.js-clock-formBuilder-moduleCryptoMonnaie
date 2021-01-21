<template>
    <div>
  <div v-if="isDisplay">
    <input id="mynumber" type="number" v-model="model.number">
    <button v-on:click="hide" style="margin-left: 10px">🗑</button>
      <pre>
      {{ JSON.stringify(model, null, 2)}} <!-- ARG(valeur, remplacant, espace)-->
    </pre>
    <hr>
  </div>
</div>
</template>

<script>
export default {
    data() {
  
   return {
     model: {
            number: '',
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
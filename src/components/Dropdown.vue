<template>
    <div>
  <div v-if="isDisplay">
    <select name="dropdown" id="mydropdown" v-model="model.option">
    <option value="">--Please choose an option</option>
    <option value="Mcdo">Mcdo</option>
    <option value="KFC">KFC</option>
    <option value="Kebab">Kebab</option>
    </select>
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
            option: '',
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
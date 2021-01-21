<template>
    <div>
        <div v-if="isDisplay">
        <p for="title" contenteditable=""><strong>Titre</strong></p>
        <input type="radio" id="contactChoice1"
        name="contact" value="Champ 1"  v-model="model.radiovalue">
    <label for="contactChoice1" contenteditable="">Champ 1</label>

    <input type="radio" id="contactChoice2"
     name="contact" value="Champ 2"  v-model="model.radiovalue">
    <label for="contactChoice2" contenteditable>Champ 2</label>

    <input type="radio" id="contactChoice3"
     name="contact" value="Champ 3"  v-model="model.radiovalue">
    <label for="contactChoice3" contenteditable>Champ 3</label>
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
            radiovalue: '',
     },
       isDisplay: true}
  },

    methods: {
    hide: function () {
      this.isDisplay = false;
    }
        }
    
    }

</script>
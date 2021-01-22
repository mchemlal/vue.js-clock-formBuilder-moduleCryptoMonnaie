<template>
    <div>
        <div v-if="isDisplay">
        <input for="title" placeholder="Enter a title" contenteditable="" v-model="model[field.model]" style="border: none; outline: none; margin-left: 70px;">
        <br>
        <input type="radio" id="contactChoice1"
        name="contact" value="Champ 1"  v-model="model.radiovalue">
    <label for="contactChoice1">Champ 1</label>

    <input type="radio" id="contactChoice2"
     name="contact" value="Champ 2"  v-model="model.radiovalue">
    <label for="contactChoice2">Champ 2</label>

    <input type="radio" id="contactChoice3"
     name="contact" value="Champ 3"  v-model="model.radiovalue">
    <label for="contactChoice3">Champ 3</label>
    <button v-on:click="hide" style="margin-left: 10px">🗑</button>
    <hr>
    </div>
    </div>
</template>

<script>
export default {
      props: {
                model: {},
                field: {}

            },
    data() {
   return {
       isDisplay: true}
  },

    methods: {
    hide: function () {
      this.isDisplay = false;
    }
        }
    
    }

</script>
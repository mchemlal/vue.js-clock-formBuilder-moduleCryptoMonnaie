<template>
    <div>
        <div v-if="isDisplay">
        <p for="title" contenteditable=""><strong>Titre</strong></p>
        <input type="radio" id="contactChoice1"
        name="contact" value="email"  v-model="radiovalue">
    <label for="contactChoice1" contenteditable="">Champ 1</label>

    <input type="radio" id="contactChoice2"
     name="contact" value="telephone"  v-model="radiovalue">
    <label for="contactChoice2" contenteditable>Champ 2</label>

    <input type="radio" id="contactChoice3"
     name="contact" value="courrier"  v-model="radiovalue">
    <label for="contactChoice3" contenteditable>Champ 3</label>
    <button v-on:click="hide" style="margin-left: 10px">🗑</button>
    </div>
    </div>
</template>

<script>
export default {
    data() {
   return {isDisplay: true}
  },

    methods: {
    hide: function () {
      this.isDisplay = false;
    }
        }
    
    }

</script>
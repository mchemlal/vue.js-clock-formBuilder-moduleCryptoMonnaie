<template>
    <div>
        <div class="test">

  <div v-if="isDisplay">
    <textarea id="mytextarea" type="text" placeholder="Entrer votre texte..." cols="30" rows="5" style="outline: 1px green" v-model="text"></textarea>
    <button type="submit">✅</button>
    <button v-on:click="hide">🗑</button>
    <p>{{ text }}</p>
  </div>
</div>
    </div>
</template>

<script>
export default {
    data() {
  
   return {
     text: '',
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
<template>
    <div>
        <div class="test">

  <div v-if="isDisplay">
    <textarea id="mytextarea" type="text" placeholder="Entrer votre texte..." cols="30" rows="5" style="outline: 1px green"></textarea>
    <button v-on:click="hide">🗑</button>
  </div>
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
        },
    }

</script>
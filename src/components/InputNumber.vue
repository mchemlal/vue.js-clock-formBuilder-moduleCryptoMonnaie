<template>
    <div>
  <div v-if="isDisplay">
    <input id="mynumber" type="number" v-model="model[field.model]">
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
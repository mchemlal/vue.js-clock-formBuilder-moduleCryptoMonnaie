<template>
    <div>
  <div v-if="isDisplay">
    <textarea id="mytextarea" type="text" placeholder="Enter your text..." cols="30" rows="5" style="outline: 1px green" v-model="model[field.model]"></textarea>
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
<template>
    <div>
  <div v-if="isDisplay">
    <select name="dropdown" id="mydropdown" v-model="model[field.model]">
    <option value="">--Please choose an option</option>
    <option value="Mcdo">Mcdo</option>
    <option value="KFC">KFC</option>
    <option value="Kebab">Kebab</option>
    </select>
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
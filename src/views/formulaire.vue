<template>
  <div>
    <FormBuilder :schema="schema" :model="model"></FormBuilder>   <!--- Props from FormBuilder = data() from script -->
    <FormBuilder :schemaRadio="schemaRadio" :modelRadio="modelRadio"></FormBuilder>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>All Elements</span>
  </div>
  <div v-for="o in 4" :key="o" class="text item" >
    <el-button type="text" v-on:click="show = !show" >Bouton</el-button>
  </div>
</el-card>
  </div>
</template>


<script>
import FormBuilder from "../components/FormBuilder"
export default {
    components: { 
      FormBuilder
    },
     data() {
        return {
          schema: {
            fields: 
            [{
            inputType: "textarea",
            label: "TextArea",
            model: "areavalue"
            },{
            inputType: "radiobox",
            label: "RadioBox",
            model: "radiovalue"
            }]
            },
          model: {
            areavalue: "",
            radiovalue: ""
          }
        }
     }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    height: 600px;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

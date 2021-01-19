<template>
  <div>
    <FormBuilder :schema="schema" :model="model"></FormBuilder>   <!--- Props from FormBuilder = data() from script -->
    <el-button @click="visible = true">Button</el-button>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>All Elements</span>
  </div>
  <div v-for="o in 4" :key="o" class="text item" >
    <el-button type="text">Bouton</el-button>
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
            fields: [{
            inputType: "textarea",
            label: "TextArea",
            model: "areavalue"
            }]
          }, 
          model: {
            areavalue: ""
          },
          methods: {

          },
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
</style>

<template>
  <div>
    <pre>
      {{ JSON.stringify(model, null, 2)}} <!-- ARG(valeur, remplacant, espace)-->
    </pre>
    <input type="text" v-model="model.test">
    <FormBuilder :schema="schema" :model="model"></FormBuilder>   <!--- Props from FormBuilder = data() from script -->
  </div>
</template>


<script>
import FormBuilder from "../components/FormBuilder"
import clockDigital from "../views/clockDigital"


export default {
    components: { 
      FormBuilder,
      clockDigital

        },
     data() {
        return {
          schema: {
            fields: 
            [{}]
     },   
          model: {
            text: '',
            radiovalue: true,
            test: ''

     }
            
    }
  }
}  
</script>




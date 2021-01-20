<template>
  <div>
    <clockDigital></clockDigital>
    <FormBuilder :schema="schema"></FormBuilder>   <!--- Props from FormBuilder = data() from script -->
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
    }
  }
}  
</script>




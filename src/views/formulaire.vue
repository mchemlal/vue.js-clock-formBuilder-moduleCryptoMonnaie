<template>
  <div>
    <FormBuilder :schema="schema" :model="model"></FormBuilder>   <!--- Props from FormBuilder = data() from script -->
  </div>
</template>


<script>
import FormBuilder from "../components/FormBuilder"


export default {
    components: { 
      FormBuilder,
    
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


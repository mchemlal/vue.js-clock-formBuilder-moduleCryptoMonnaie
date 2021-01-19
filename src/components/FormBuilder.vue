<template>
    <div>
      <component v-for="(item, index) in schema.fields" 
                :key="index"
                :is="getCompo(item)"></component>
    </div>
</template>


<script>
import InputTextArea from "./InputTextArea"
import RadioBox from "./RadioBox"
export default {
    props: {
        schema: Object,
        model: Object
    },
    methods: {
        getCompo(item) {
            if (item.inputType == "textarea") {
                return InputTextArea
            } else if(item.inputType == "radiobox") {
                return RadioBox
            }
        }
    }
}
</script>
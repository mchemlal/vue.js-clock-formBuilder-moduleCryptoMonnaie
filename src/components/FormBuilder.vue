<template>
    <div>
        <el-card class="box-card" style="margin-right: 3px;">
            <div slot="header" class="clearfix">
                <span>Preview</span>
            </div>
        <div v-for="(item, index) in schema.fields" :key="index">
          <component :is="getCompo(item)"></component>
        </div>
        </el-card>
     <el-card class="box-card">
         <div slot="header" class="clearfix">
            <span>All Elements</span>
         </div>
         <!-- <div v-for="o in 4" :key="o" class="text item" > -->
            <el-button v-on:click="addTextArea" >Add Text Area</el-button>
            <el-button v-on:click="addBouttonRadio" >Add Button Radio </el-button>
         <!-- </div> -->
        </el-card>
    </div>
</template>

<script>
import InputTextArea from "./InputTextArea"
import RadioBox from "./RadioBox"
export default {
    props: {
        schema: Object,
       
    },
    methods: {
        addTextArea() {
            this.schema.fields.push({inputType: "textarea",
            label: "TextArea",
            model: "areavalue",
      });
    },
        addBouttonRadio() {
                this.schema.fields.push({inputType: "bouttonRadio",
                label: "bouttonRadio",
                model: "radiobox",
      });
    },
        getCompo(item) {
            if (item.inputType == "textarea") {
                return InputTextArea
            } else if(item.inputType == "bouttonRadio") {
                return RadioBox
            }
        }
    }
}
</script>

<style>
  
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
    display: inline-flex;
    margin-top: 35px;
    
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
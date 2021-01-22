<template>
    <div>
       <pre>
      {{ JSON.stringify(model, null, 2)}} <!-- ARG(valeur, remplacant, espace)-->
    </pre>
        <el-card class="box-card" style="margin-right: 3px;overflow:auto;"  id="dropzone" @dragenter.prevent @dragover.prevent>
            <div slot="header" class="clearfix">
                <span>Preview</span>
            </div>
          <div v-for="(item, index) in schema.fields" :key="index"> 
            <component :is="getCompo(item)" :model="model"  :field="item"></component> <!--"is" pour basculer entre des composants -->
          </div>
        </el-card>
      <el-card class="box-card">
         <div slot="header" class="clearfix">
            <span>All Elements</span>
         </div>
            <el-button @click="addTextArea" draggable="true" @dragend.native="addTextArea">Add Text Area</el-button>
            <el-button @click="addBouttonRadio" draggable="true" @dragend.native="addBouttonRadio" >Add Button Radio </el-button>
            <p></p>
            <el-button @click="addDropDown" draggable="true" @dragend.native="addDropDown">Add Dropdown</el-button>
            <el-button @click="addInputNumber" draggable="true" @dragend.native="addInputNumber">Add Input Number</el-button>
      </el-card>
    </div>
</template>

<script>
import InputTextArea from "./InputTextArea"
import RadioBox from "./RadioBox"
import Dropdown from "./Dropdown"
import InputNumber from "./InputNumber"

export default {
  
    props: {
        schema: Object,
        model: Object
    },

    methods: {
        addTextArea() {
            this.schema.fields.push({
            inputType: "textarea",
            model: "textarea"
          
      });
    },
        addBouttonRadio() {
                this.schema.fields.push({
                inputType: "bouttonRadio", 
                model: "bouttonRadio"    
      });
    },
        addDropDown() {
                this.schema.fields.push({
                inputType: "dropdown",    
                model: "dropdown" 
      });
    },
        addInputNumber() {
                this.schema.fields.push({
                inputType: "number",   
                model: "number"
      });
      
    },
        getCompo(item) {
            if (item.inputType == "textarea") {
                return InputTextArea
            } else if(item.inputType == "bouttonRadio") {
                return RadioBox
            } else if(item.inputType == "dropdown") {
                return Dropdown
            } else if(item.inputType == "number") {
                return InputNumber
            }
        },
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
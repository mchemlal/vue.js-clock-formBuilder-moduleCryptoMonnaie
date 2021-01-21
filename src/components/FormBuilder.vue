<template>
    <div>
        <el-card class="box-card" style="margin-right: 3px;"  id="dropzone" @drop="drop_handler" @dragenter.prevent @dragover.prevent>
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
            <el-button @click="addTextArea" draggable="true" @dragend.native="addTextArea">Add Text Area</el-button>
            <el-button @click="addBouttonRadio" draggable="true" @dragend.native="addBouttonRadio" >Add Button Radio </el-button>
      </el-card>
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

        addTextArea() {
            this.schema.fields.push({
            inputType: "textarea",
            label: "TextArea",
            model: "text",
            id: 0
      });
    },
        addBouttonRadio() {
                this.schema.fields.push({
                inputType: "bouttonRadio",
                label: "bouttonRadio",
                model: "radiovalue",
                id: 1
      });
    },
        getCompo(item) {
            if (item.inputType == "textarea") {
                return InputTextArea
            } else if(item.inputType == "bouttonRadio") {
                return RadioBox
            }
        },

        getData(item) {
          item.model = this.model
        },

        drop_handler(event) {
          event.preventDefault();
          var data = event.dataTransfer.getData("text/plain");
          console.log(data);
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
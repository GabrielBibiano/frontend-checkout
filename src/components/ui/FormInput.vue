<template>
  <div class="form-input">
    <label :for="name">{{ label }}</label>
    <input :type="computedInputType" :name="name" :placeholder="computedPlaceholder"/>
  </div>
</template>

<script>
export default {
  name: 'form-input',
  props: {
    type: String,
    name: String,
    validation: String,
    placeholder: String,
    label: String
  },
  data() {
    return {
      inputTypes: {
        credit_card: {
          validation: 'credit_cart',
          placeholder: '____.____.____.____',
          type: 'text'
        },
        cvv: {
          validation: 'digits:3',
          placeholder: '___',
          type: 'text'
        },
        validity: {
          validation: 'date_format:MM/yyyy',
          placeholder: '__/____',
          type: 'text'
        }
      }
    }
  },
  computed: {
    typeData() {
      return this.inputTypes[this.type]
    },
    computedPlaceholder() {
      return this.typeData ? this.typeData.placeholder : this.placeholder
    },
    computedValidation() {
      return this.typeData ? this.typeData.validation : this.validation
    },
    computedInputType() {
      return this.typeData ? this.typeData.type : this.type
    }
  }
}
</script>

<style lang="stylus" scoped>
input 
  box-sizing border-box
  height 45px
  width 100%
  border-radius 3px
  background-color #FFF
  border 1px solid #E7E7E7
  box-shadow inset 0 1px 2px 0 rgba(0, 0, 0, 0.2)
  padding 15px 13px 12px 13px

::placeholder 
  color: #E0E7EE;
  opacity: 1; 
  letter-spacing 1.37px
  font-size 16px
  
label 
  font-size 12px
  color #CCC
  line-height 14px
  font-weight bold
  
  + input 
    margin-top 5px
</style>
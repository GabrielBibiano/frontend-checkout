<template>
  <div class="cart-list">
    <cart-item 
      v-for="(item, key) in products" 
      :key="key"
      :item="item.product"
      :small="small"
    ></cart-item>
  </div>
</template>

<script>
import CartItem from './CartItem'

export default {
  name: 'cart-list',
  props: {
    products: Array,
    small: Boolean
  },
  components: {
    CartItem,
  }
}
</script>

<style lang="stylus">
.cart-list 
  background #fff
  padding 13px
  border-radius 3px

.cart-item + .cart-item 
  margin-top 15px
</style>

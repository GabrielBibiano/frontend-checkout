<template>
  <div class="cart">
    <h3>Produtos</h3>
    <card shadow>
      <cart-list :products="cart.items"></cart-list>
    </card>
  </div>
</template>

<script>
import CartList from '../components/CartList'
import Card from '../components/ui/Card'
import { mapState } from "vuex"

export default {
  name: 'cart',
  components: {
    CartList,
    Card
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style lang="stylus">
.card + .card
  margin-top 20px
</style>

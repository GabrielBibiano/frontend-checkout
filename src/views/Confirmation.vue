<template>
  <div class="confirmation">
    <section class="confirmation-message">
      <img src="../assets/confirm.png"/>
      <h4>COMPRA EFETUADA COM SUCESSO</h4>
    </section>

    <h3>Pagamento</h3>
    <payment-resume 
      v-if="binaryRandom" 
      :resume="payment"
    ></payment-resume>
    <card v-else shadow>
      <PaymentResumeReact/>
    </card>
    <h3>Produtos</h3>
    <card shadow>
      <cart-list :products="cart.items" small></cart-list>
    </card>
  </div>
</template>

<script>
import CartList from '../components/CartList'
import Card from '../components/ui/Card'
import PaymentResume from '../components/PaymentResume'
import PaymentResumeReact from '../components/PaymentResumeReact'
import { mapState } from "vuex"

export default {
  name: 'confirmation',
  components: {
    CartList,
    Card,
    PaymentResume,
    PaymentResumeReact
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['payment', 'cart']),
    binaryRandom() {
      return Math.round(Math.random() * 10) < 5
    }
  }
}
</script>

<style lang="stylus" scoped>
.card + .card
  margin-top 20px

.confirmation-message
  display flex
  justify-content center
  align-items center
  flex-direction column
  margin-top 12px

img 
  border 2px solid #FF7800
  padding 10px 8px
  border-radius 30px

h4 
  color #FF7800
  font-size 14px
  margin 11px 0 5px 0px
</style>

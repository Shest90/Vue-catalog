<template>
  <div v-if="showCart" class="v-cart-popup__overlay">
    <div class="v-cart-popup__content">
      <h2>Shopping Cart</h2>
      <div v-for="item in CART" :key="item.article" class="v-cart-popup__item">
        <v-cart-item
          :cart_item_data="item"
          @deleteFromCart="removeFromCart(item.article)"
        />
      </div>
      <p>Total: {{ calculateTotal }}</p>
      <button @click="closeCart">Close</button>
    </div>
  </div>
  <button @click="openCart">Open Cart ({{ cartItems.length }})</button>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "v-cart-popup",
  components: {
    vCartItem,
  },
  computed: {
    ...mapGetters(["CART"]),
    cartItems() {
      return this.CART.map((item) => ({ ...item }));
    },
    calculateTotal() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    openCart() {
      this.showCart = true;
    },
    closeCart() {
      this.showCart = false;
    },
    removeFromCart(article) {
      const index = this.CART.findIndex((item) => item.article === article);
      if (index !== -1) {
        this.DELETE_FROM_CART(index);
      }
    },
  },
};
</script>

<style lang="scss">
.v-cart-popup__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-cart-popup__content {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 450px;
  width: 80%;
}

.v-cart-popup__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 4px;
}

.v-cart-popup__item p {
  margin: 0;
}

.v-cart-popup__item button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.v-cart-popup__item button:hover {
  background-color: #c0392b;
}

.v-cart-popup__item img {
  max-width: 50px;
  margin-right: 10px;
}

.v-cart-popup__toggle-btn {
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.v-cart-popup__toggle-btn:hover {
  background-color: #2980b9;
}
</style>

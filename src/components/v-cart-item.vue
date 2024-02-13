<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="img"
    />
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <p>Qty:</p>
    <div class="v-cart-item__quantity">
      <button @click="decreaseQuantity">-</button>
      {{ cart_item_data.quantity }}
      <button @click="increaseQuantity">+</button>
    </div>
    <div class="v-cart-item__total">Total:{{ total }}</div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    total() {
      return this.cart_item_data.price * this.cart_item_data.quantity;
    },
  },
  methods: {
    decreaseQuantity() {
      if (this.cart_item_data.quantity > 1) {
        this.cart_item_data.quantity--;
      }
    },
    increaseQuantity() {
      this.cart_item_data.quantity++;
    },
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  mounted() {
    const cartItemData = this.cart_item_data;
    cartItemData.quantity = 1;
  },
};
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;

  &__image {
    max-width: 50px;
  }
  &__quantity {
    display: flex;
    align-items: center;

    button {
      cursor: pointer;
      padding: 5px;
      margin: 0 5px;
    }
  }
}
</style>

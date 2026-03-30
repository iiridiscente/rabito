// ============================================================
//  Componente: Cart — Rabito
// ============================================================

const CartComponent = {
  props: {
    cart: { type: Array, required: true },
  },
  emits: ["remove-item", "update-quantity", "checkout", "close"],
  data() {
    return { checkoutDone: false };
  },
  template: `
    <div class="cart">

      <!-- Header -->
      <div class="cart__header">
        <div class="cart__header-left">
          <span class="cart__header-icon">🛍️</span>
          <h2 class="cart__title">Mi Carrito</h2>
          <span class="cart__count" v-if="cart.length > 0">{{ cart.length }} {{ cart.length === 1 ? 'artículo' : 'artículos' }}</span>
        </div>
        <button class="btn btn--ghost" @click="$emit('close')">← Seguir comprando</button>
      </div>

      <!-- Carrito vacío -->
      <div class="cart__empty" v-if="cart.length === 0 && !checkoutDone">
        <div class="cart__empty-icon">🐰</div>
        <h3>¡Tu carrito está vacío!</h3>
        <p>Aún no has agregado ningún artículo a tu carrito.</p>
        <button class="btn btn--primary" @click="$emit('close')">Ver colección ✦</button>
      </div>

      <!-- Mensaje de compra exitosa -->
      <div class="cart__success" v-if="checkoutDone">
        <div class="cart__success-icon">🎀</div>
        <h3>¡Gracias por tu compra!</h3>
        <p>Tu pedido kawaii está en camino~ Te llegará en 3-5 días hábiles.</p>
        <button class="btn btn--primary" @click="$emit('close'); checkoutDone = false">Seguir comprando ✦</button>
      </div>

      <!-- Items -->
      <div class="cart__body" v-if="cart.length > 0 && !checkoutDone">
        <transition-group name="cart-item-anim" tag="div">
          <div class="cart-item" v-for="item in cart" :key="item.id">
            <div class="cart-item__emoji">{{ item.emoji }}</div>

            <div class="cart-item__info">
              <span class="cart-item__cat">{{ item.category }}</span>
              <span class="cart-item__name">{{ item.name }}</span>
              <span class="cart-item__unit">{{ fmt(item.price) }} c/u</span>
            </div>

            <!-- Controles de cantidad -->
            <div class="cart-item__qty">
              <button class="qty-btn" @click="$emit('update-quantity', { id: item.id, quantity: item.quantity - 1 })">−</button>
              <span class="qty-val">{{ item.quantity }}</span>
              <button class="qty-btn" @click="$emit('update-quantity', { id: item.id, quantity: item.quantity + 1 })">+</button>
            </div>

            <div class="cart-item__right">
              <span class="cart-item__sub">{{ fmt(item.price * item.quantity) }}</span>
              <button class="cart-item__del" @click="$emit('remove-item', item.id)" title="Eliminar">✕</button>
            </div>
          </div>
        </transition-group>

        <!-- Resumen -->
        <div class="cart__summary">
          <div class="cart__summary-row">
            <span>Subtotal ({{ totalItems }} artículos)</span>
            <span>{{ fmt(totalPrice) }}</span>
          </div>
          <div class="cart__summary-row">
            <span>Envío</span>
            <span :class="totalPrice >= 30000 ? 'cart__free' : ''">
              {{ totalPrice >= 30000 ? '¡Gratis! 🎀' : fmt(3990) }}
            </span>
          </div>
          <div class="cart__divider"></div>
          <div class="cart__summary-row cart__summary-row--total">
            <span>Total</span>
            <span class="cart__total">{{ fmt(grandTotal) }}</span>
          </div>

          <div class="cart__promo" v-if="totalPrice < 30000">
            <span>🚚 ¡Agrega {{ fmt(30000 - totalPrice) }} más para envío gratis!</span>
          </div>

          <button class="btn btn--primary btn--large btn--full" @click="handleCheckout">
            Finalizar compra 🎀
          </button>
          <p class="cart__secure">✦ Pago 100% seguro ✦ Devoluciones gratuitas</p>
        </div>
      </div>

    </div>
  `,
  computed: {
    totalItems() {
      return this.cart.reduce((s, i) => s + i.quantity, 0);
    },
    totalPrice() {
      return this.cart.reduce((s, i) => s + i.price * i.quantity, 0);
    },
    grandTotal() {
      return this.totalPrice >= 30000 ? this.totalPrice : this.totalPrice + 3990;
    },
  },
  methods: {
    fmt(price) {
      return "$" + price.toLocaleString("es-CL");
    },
    handleCheckout() {
      this.checkoutDone = true;
      this.$emit("checkout");
    },
  },
};

// ============================================================
//  Componente: ProductDetail — Rabito
// ============================================================

const ProductDetail = {
  props: {
    product: { type: Object, required: true },
  },
  emits: ["close", "add-to-cart"],
  template: `
    <div class="detail">
      <!-- Breadcrumb -->
      <div class="detail__nav">
        <button class="btn btn--ghost" @click="$emit('close')">
          ← Volver a la colección
        </button>
        <span class="detail__crumb">{{ product.category }} / {{ product.name }}</span>
      </div>

      <div class="detail__card">
        <!-- Imagen -->
        <div class="detail__img-wrap">
          <span v-if="product.badge" class="product-card__badge" :class="badgeClass">{{ product.badge }}</span>
          <div class="detail__emoji-bg">
            <img v-if="product.image" :src="product.image" :alt="product.name" class="detail__img-display" />
            <span v-else class="detail__emoji">{{ product.emoji }}</span>
          </div>
          <!-- Mini galería decorativa -->
          <div class="detail__thumbs">
            <div class="detail__thumb detail__thumb--active">
              <img v-if="product.image" :src="product.image" :alt="product.name" class="detail__thumb-img" />
              <span v-else>{{ product.emoji }}</span>
            </div>
            <div class="detail__thumb">🌸</div>
            <div class="detail__thumb">✦</div>
          </div>
        </div>

        <!-- Info -->
        <div class="detail__info">
          <span class="detail__cat">{{ product.category }}</span>
          <h2 class="detail__name">{{ product.name }}</h2>
          <p class="detail__desc">{{ product.description }}</p>

          <div class="detail__price-block">
            <span class="detail__price">{{ fmt(product.price) }}</span>
            <span class="detail__price-label">Precio final con IVA</span>
          </div>

          <!-- Tallas (decorativo para ropa/zapatos) -->
          <div class="detail__sizes" v-if="product.category === 'Faldas' || product.category === 'Zapatos'">
            <p class="detail__sizes-label">Tallas disponibles:</p>
            <div class="detail__sizes-grid">
              <span v-for="s in sizes" :key="s" class="size-chip" :class="{ 'size-chip--active': selectedSize === s }" @click="selectedSize = s">{{ s }}</span>
            </div>
          </div>

          <div class="detail__actions">
            <button class="btn btn--primary btn--large" @click="handleAdd">
              🛍️ Agregar al carrito
            </button>
            <button class="btn btn--heart" title="Guardar en favoritos">♡</button>
          </div>

          <!-- Detalles de envío -->
          <div class="detail__shipping">
            <span class="detail__ship-item">🚚 Envío gratis sobre $30.000</span>
            <span class="detail__ship-item">🔄 Cambios gratuitos en 15 días</span>
            <span class="detail__ship-item">✦ Pago seguro garantizado</span>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      selectedSize: null,
      sizes: ["XS", "S", "M", "L", "XL"],
    };
  },
  computed: {
    badgeClass() {
      const map = { NUEVO: "badge--nuevo", OFERTA: "badge--oferta", TOP: "badge--top" };
      return map[this.product.badge] || "";
    },
  },
  methods: {
    fmt(price) {
      return "$" + price.toLocaleString("es-CL");
    },
    handleAdd() {
      this.$emit("add-to-cart", this.product);
    },
  },
};

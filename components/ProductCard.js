// ============================================================
//  Componente: ProductCard — Rabito
// ============================================================

const ProductCard = {
  props: {
    product: { type: Object, required: true },
  },
  emits: ["add-to-cart", "view-detail"],
  template: `
    <article class="product-card" @click="$emit('view-detail', product)">
      <!-- Badge -->
      <span v-if="product.badge" class="product-card__badge" :class="badgeClass">
        {{ product.badge }}
      </span>

      <!-- Emoji imagen -->
      <div class="product-card__img">
        <img v-if="product.image" :src="product.image" :alt="product.name" class="product-card__img-src" />
        <span v-else class="product-card__emoji">{{ product.emoji }}</span>
        <div class="product-card__overlay">
          <span>Ver detalles ✦</span>
        </div>
      </div>

      <!-- Info -->
      <div class="product-card__body">
        <span class="product-card__cat">{{ product.category }}</span>
        <h3 class="product-card__name">{{ product.name }}</h3>

        <div class="product-card__footer">
          <span class="product-card__price">{{ fmt(product.price) }}</span>
          <button
            class="btn btn--small btn--primary"
            @click.stop="$emit('add-to-cart', product)"
            title="Agregar al carrito"
          >
            🛍️ Agregar
          </button>
        </div>
      </div>

      <!-- Corazón decorativo -->
      <span class="product-card__heart">♡</span>
    </article>
  `,
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
  },
};

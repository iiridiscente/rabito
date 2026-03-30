// ============================================================
//  Componente: ProductList — Rabito
// ============================================================

const ProductList = {
  props: {
    products: { type: Array, required: true },
  },
  emits: ["add-to-cart", "view-detail"],
  components: { ProductCard },
  template: `
    <div class="product-list">
      <transition-group name="card-fade" tag="div" class="product-list__grid">
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="$emit('add-to-cart', $event)"
          @view-detail="$emit('view-detail', $event)"
        ></product-card>
      </transition-group>
    </div>
  `,
};

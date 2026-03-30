// ============================================================
//  Componente: Navbar — Rabito
// ============================================================

const NavbarComponent = {
  props: {
    cartCount:   { type: Number,  default: 0 },
    cartOpen:    { type: Boolean, default: false },
    searchQuery: { type: String,  default: "" },
  },
  emits: ["toggle-cart", "update-search"],
  template: `
    <nav class="navbar">
      <!-- Logo -->
      <div class="navbar__brand">
        <!-- SVG Conejito rosa con lazo lila -->
        <svg class="navbar__logo-svg" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Rabito">
          <!-- Orejas -->
          <ellipse cx="18" cy="16" rx="7" ry="14" fill="#f9a8d4"/>
          <ellipse cx="18" cy="16" rx="4" ry="10" fill="#fce7f3"/>
          <ellipse cx="42" cy="16" rx="7" ry="14" fill="#f9a8d4"/>
          <ellipse cx="42" cy="16" rx="4" ry="10" fill="#fce7f3"/>
          <!-- Cabeza -->
          <circle cx="30" cy="35" r="19" fill="#fecdd3"/>
          <!-- Cara -->
          <circle cx="24" cy="33" r="2.5" fill="#f43f7a"/>
          <circle cx="36" cy="33" r="2.5" fill="#f43f7a"/>
          <!-- Nariz -->
          <ellipse cx="30" cy="38" rx="2.5" ry="1.8" fill="#f9a8d4"/>
          <!-- Boca -->
          <path d="M27 40.5 Q30 43.5 33 40.5" stroke="#f43f7a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
          <!-- Cachetes -->
          <circle cx="21" cy="38" r="4" fill="#fda4af" opacity="0.5"/>
          <circle cx="39" cy="38" r="4" fill="#fda4af" opacity="0.5"/>
          <!-- Lazo lila sobre cabeza -->
          <ellipse cx="23" cy="24" rx="7" ry="4.5" fill="#c084fc" transform="rotate(-20 23 24)"/>
          <ellipse cx="37" cy="24" rx="7" ry="4.5" fill="#c084fc" transform="rotate(20 37 24)"/>
          <circle cx="30" cy="25" r="3.5" fill="#a855f7"/>
        </svg>
        <span class="navbar__brand-name">Rabito</span>
      </div>

      <!-- Links de navegación -->
      <ul class="navbar__links">
        <li><a href="#" class="navbar__link">Inicio</a></li>
        <li><a href="#catalogo" class="navbar__link">Colección</a></li>
        <li><a href="#" class="navbar__link">Ofertas</a></li>
        <li><a href="#" class="navbar__link">Sobre nosotras</a></li>
      </ul>

      <!-- Carrito -->
      <button class="navbar__cart" @click="$emit('toggle-cart')" :class="{ 'navbar__cart--open': cartOpen }">
        <span class="navbar__cart-emoji">🛍️</span>
        <span v-if="cartCount > 0" class="navbar__cart-badge">{{ cartCount }}</span>
        <span class="navbar__cart-label">Carrito</span>
      </button>
    </nav>
  `,
};

// ============================================================
//  Rabito 🐰 — app.js
//  Tienda kawaii: lógica principal Vue 3
// ============================================================

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      // ------ Catálogo de productos ------
      products: [
        // === FALDAS ===
        {
          id: 1,
          name: "Falda Tulle Negra",
          category: "Faldas",
          price: 24990,
          emoji: null,
          image: "assets/images/image1.avif",
          badge: "NUEVO",
          description: "Falda de tul de múltiples capas en color negro. Perfecta para un look kawaii completo. Talla única ajustable.",
        },
        {
          id: 2,
          name: "Minifalda Cuadros Gris",
          category: "Faldas",
          price: 19990,
          emoji: "🟣",
          image: "assets/images/images2.avif",
          badge: null,
          description: "Minifalda a cuadros en tono gris y blanco. Inspiración japonesa. Con cierre invisible lateral.",
        },
        {
          id: 3,
          name: "Falda Cintas Beige",
          category: "Faldas",
          price: 21990,
          emoji: "🍑",
          image: "assets/images/image3.avif",
          badge: "OFERTA",
          description: "Falda acampanada en color beige suave. Cintura elástica cómoda. Ideal para el día a día kawaii.",
        },
        {
          id: 4,
          name: "Falda Sport con Lazos",
          category: "Faldas",
          price: 23990,
          emoji: "💙",
          image: "assets/images/image4.avif",
          badge: null,
          description: "Falda sport con lazos blancos. Corte A-line. Tela resistente de alta calidad.",
        },

        // === ZAPATOS ===
        {
          id: 5,
          name: "Plataformas Mary Jane Negros",
          category: "Zapatos",
          price: 39990,
          emoji: "👠",
          image: "assets/images/zapatos2.avif",
          badge: "TOP",
          description: "Zapatos Mary Jane con plataforma de 5 cm en color negro. Hebilla dorada con de corazon. El must kawaii de la temporada.",
        },
        {
          id: 6,
          name: "Sneakers Lolita Blancos",
          category: "Zapatos",
          price: 34990,
          emoji: "👟",
          image: "assets/images/zapatos.avif",
          badge: null,
          description: "Sneakers de cuero vegano blanco con detalles de lazos y suela con plataforma de 5 cm.",
        },
        {
          id: 7,
          name: "Botines Perlas Blancos",
          category: "Zapatos",
          price: 42990,
          emoji: "🪄",
          image: "assets/images/botines.avif",
          badge: "NUEVO",
          description: "Botines en tono blanco con perlas decorativas al frente. Cierre lateral. Taco bloque de 4 cm.",
        },

        // === BOLSOS ===
        {
          id: 8,
          name: "Bolso Frill Rosa",
          category: "Bolsos",
          price: 18990,
          emoji: "🐰",
          image: "assets/images/bolso.avif",
          badge: "TOP",
          description: "Bolso con detalles delicados de charm corazon y encaje. Cierre magnético. Correa ajustable.",
        },
        {
          id: 9,
          name: "Mini Bag Corazón",
          category: "Bolsos",
          price: 14990,
          emoji: "🩷",
          image: "assets/images/corazon.avif",
          badge: null,
          description: "Bolso mini con forma de corazón en cuero vegano blanco. Cadena plateada de 45 cm. Capacidad para lo esencial.",
        },
        {
          id: 10,
          name: "Bolso Pochete Kawaii",
          category: "Bolsos",
          price: 27990,
          emoji: "🌸",
          image: "assets/images/afelpado.avif",
          badge: "OFERTA",
          description: "Bolso kawaii afelpado con detalles de perlas. Compartimento principal con cierre dorado.",
        },

        // === JOYERÍA ===
        {
          id: 11,
          name: "Collar Luna Blanco",
          category: "Joyería",
          price: 9990,
          emoji: "⭐",
          image: "assets/images/collar.avif",
          badge: null,
          description: "Collar delicado con colgante de luna en esmalte dorado. 40 cm. Hipoalergénico.",
        },
        {
          id: 12,
          name: "Aretes Luna Corazón",
          category: "Joyería",
          price: 7990,
          emoji: "🍒",
          image: "assets/images/aretes.avif",
          badge: "NUEVO",
          description: "Aretes colgantes con forma de corazón y luna en dorado. Longitud: 4 cm.",
        },
        {
          id: 13,
          name: "Pulsera Charm Negro",
          category: "Joyería",
          price: 8990,
          emoji: "🪷",
          image: "assets/images/pulsera.avif",
          badge: null,
          description: "Pulsera de cuerina negra con charm corazón ajustable. Cierre de hebilla dorada.",
        },
        {
          id: 14,
          name: "Diadema Mariposas Rosa",
          category: "Joyería",
          price: 6990,
          emoji: "🎀",
          image: "assets/images/diadema.avif",
          badge: "TOP",
          description: "Diadema rígida color rosa con detalles de mariposas brillantes. El accesorio definitivo del estilo kawaii. Talla única.",
        },
      ],

      // ------ Carrito ------
      cart: [],

      // ------ Estado UI ------
      cartOpen: false,
      selectedProduct: null,
      activeCategory: "Todos",
      searchQuery: "",
      toastMsg: "",
      _toastTimer: null,
    };
  },

  computed: {
    categories() {
      return ["Todos", "Ofertas", ...new Set(this.products.map((p) => p.category))];
    },

    filteredProducts() {
      let list = this.products;
      if (this.activeCategory === "Ofertas") {
        list = list.filter((p) => p.badge === "OFERTA");
      } else if (this.activeCategory !== "Todos") {
        list = list.filter((p) => p.category === this.activeCategory);
      }
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        list = list.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
      }
      return list;
    },

    totalItems() {
      return this.cart.reduce((s, i) => s + i.quantity, 0);
    },

    totalPrice() {
      return this.cart.reduce((s, i) => s + i.price * i.quantity, 0);
    },
  },

  methods: {
    addToCart(product) {
      const found = this.cart.find((i) => i.id === product.id);
      if (found) {
        found.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.showToast(`¡${product.name} en tu carrito!`);
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((i) => i.id !== id);
    },

    updateQuantity({ id, quantity }) {
      const item = this.cart.find((i) => i.id === id);
      if (!item) return;
      if (quantity <= 0) this.removeFromCart(id);
      else item.quantity = quantity;
    },

    checkout() {
      this.cart = [];
      this.cartOpen = false;
      this.showToast("¡Gracias por tu compra! 🎀 Tu pedido está en camino~");
    },

    viewDetail(product) {
      this.selectedProduct = product;
      this.cartOpen = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    showToast(msg) {
      this.toastMsg = msg;
      clearTimeout(this._toastTimer);
      this._toastTimer = setTimeout(() => (this.toastMsg = ""), 2800);
    },

    scrollToCatalog(filter = null) {
      if (filter === "ofertas") {
        this.activeCategory = "Ofertas";
        this.searchQuery = "";
      } else {
        this.activeCategory = "Todos";
        this.searchQuery = "";
      }
      document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
    },
  },
});

// Registrar componentes
app.component("navbar-component", NavbarComponent);
app.component("hero-section", HeroSection);
app.component("product-list", ProductList);
app.component("product-detail", ProductDetail);
app.component("cart-component", CartComponent);

app.mount("#app");

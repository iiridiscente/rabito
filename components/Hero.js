// ============================================================
//  Componente: Hero — Rabito
// ============================================================

const HeroSection = {
  emits: ["go-catalog"],
  template: `
    <section class="hero">
      <div class="hero__bubbles" aria-hidden="true">
        <span class="hero__bubble hero__bubble--1">🌸</span>
        <span class="hero__bubble hero__bubble--2">🎀</span>
        <span class="hero__bubble hero__bubble--3">⭐</span>
        <span class="hero__bubble hero__bubble--4">🌙</span>
        <span class="hero__bubble hero__bubble--5">🍒</span>
      </div>

      <div class="hero__content">
        <p class="hero__tag">✦ Nueva colección otoño ✦</p>
        <h1 class="hero__title">
          Tu moda<br/>
          <span class="hero__title--pink">kawaii</span>
          <span class="hero__title--lila"> favorita</span>
          <span class="hero__title--deco">🐰</span>
        </h1>
        <p class="hero__sub">Faldas, zapatos, bolsos y joyería para brillar cada día con estilo.</p>
        <div class="hero__actions">
          <button class="btn btn--primary" @click="$emit('go-catalog', 'todos')">
            Ver colección ✦
          </button>
          <button class="btn btn--outline" @click="$emit('go-catalog', 'ofertas')">
            Ofertas 🍒
          </button>
        </div>
      </div>

      <div class="hero__mascot" aria-hidden="true">
        <svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Sombra -->
          <ellipse cx="80" cy="195" rx="45" ry="8" fill="#f9a8d4" opacity="0.3"/>
          <!-- Cuerpo -->
          <ellipse cx="80" cy="145" rx="38" ry="45" fill="#fce7f3"/>
          <!-- Vestido -->
          <path d="M42 155 Q80 185 118 155 L118 195 Q80 210 42 195 Z" fill="#f9a8d4"/>
          <!-- Botones del vestido -->
          <circle cx="80" cy="168" r="3" fill="#c084fc"/>
          <circle cx="80" cy="180" r="3" fill="#c084fc"/>
          <!-- Brazos -->
          <ellipse cx="30" cy="148" rx="10" ry="22" fill="#fce7f3" transform="rotate(-15 30 148)"/>
          <ellipse cx="130" cy="148" rx="10" ry="22" fill="#fce7f3" transform="rotate(15 130 148)"/>
          <!-- Orejas -->
          <ellipse cx="48" cy="38" rx="16" ry="30" fill="#fecdd3"/>
          <ellipse cx="48" cy="38" rx="9" ry="22" fill="#fce7f3"/>
          <ellipse cx="112" cy="38" rx="16" ry="30" fill="#fecdd3"/>
          <ellipse cx="112" cy="38" rx="9" ry="22" fill="#fce7f3"/>
          <!-- Cabeza -->
          <circle cx="80" cy="90" r="52" fill="#fecdd3"/>
          <!-- Ojos -->
          <circle cx="62" cy="84" r="8" fill="#fff"/>
          <circle cx="62" cy="84" r="5" fill="#f43f7a"/>
          <circle cx="60" cy="82" r="2" fill="#fff"/>
          <circle cx="98" cy="84" r="8" fill="#fff"/>
          <circle cx="98" cy="84" r="5" fill="#f43f7a"/>
          <circle cx="96" cy="82" r="2" fill="#fff"/>
          <!-- Nariz -->
          <ellipse cx="80" cy="98" rx="5" ry="4" fill="#f9a8d4"/>
          <!-- Boca -->
          <path d="M73 104 Q80 112 87 104" stroke="#f43f7a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <!-- Cachetes -->
          <circle cx="52" cy="100" r="10" fill="#fda4af" opacity="0.5"/>
          <circle cx="108" cy="100" r="10" fill="#fda4af" opacity="0.5"/>
          <!-- Lazo lila grande -->
          <ellipse cx="56" cy="56" rx="18" ry="11" fill="#c084fc" transform="rotate(-25 56 56)"/>
          <ellipse cx="104" cy="56" rx="18" ry="11" fill="#c084fc" transform="rotate(25 104 56)"/>
          <circle cx="80" cy="60" r="10" fill="#a855f7"/>
          <!-- Bolso mini -->
          <rect x="108" y="150" width="30" height="26" rx="8" fill="#f9a8d4" stroke="#f472b6" stroke-width="1.5"/>
          <path d="M114 150 Q123 140 132 150" stroke="#f472b6" stroke-width="2" fill="none"/>
          <circle cx="123" cy="163" r="3" fill="#c084fc"/>
        </svg>
      </div>
    </section>
  `,
};

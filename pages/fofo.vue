<template>
  <div class="fofo">
    <!-- Full-width header with black background for poster -->
    <a href="#fofo-title">
      <div class="header full-width">
          <img
            :alt="$t('title')"
            src="@/assets/img/fofo/fofo.png"
            srcset="@/assets/img/fofo/fofo@0.25x.png 960w,
                    @/assets/img/fofo/fofo@0.75x.png 2880w,
                    @/assets/img/fofo/fofo@0.5x.png 1920w,
                    @/assets/img/fofo/fofo.png 3840w"
            sizes="(max-width: 960px) auto,
                   (max-width: 1920px) auto,
                   (max-width: 2880px) 2880w,
                   3840px"
            class="responsive-image"
          >
      </div>
    </a>

    <!-- Content container -->
    <div class="content-container">
      <h1 id="fofo-title">{{ $t('title') }}</h1>
      <h2 class="subtitle">{{ $t('subtitle') }}</h2>
      <p class="date-location">{{ $t('dateLocation') }}</p>

      <p class="intro">{{ $t('intro') }}</p>

      <div class="tagline">{{ $t('tagline') }}</div>

      <!-- The Experience -->
      <section class="section-block">
        <h3>{{ $t('experience.title') }}</h3>
        <p>{{ $t('experience.intro') }}</p>
        <ul class="feature-list">
          <li v-for="(item, index) in $t('experience.items')" :key="index">
            <strong>{{ item.title }}:</strong> {{ item.description }}
          </li>
        </ul>
      </section>

      <!-- How It Works -->
      <section class="section-block">
        <h3>{{ $t('howItWorks.title') }}</h3>
        <p>{{ $t('howItWorks.intro') }}</p>
        <ul>
          <li v-for="(item, index) in $t('howItWorks.items')" :key="index">
            {{ item }}
          </li>
        </ul>
        <p>{{ $t('howItWorks.outro') }}</p>
      </section>

      <!-- Activities -->
      <section class="section-block">
        <h3>{{ $t('activities.title') }}</h3>
        <p>{{ $t('activities.intro') }}</p>
        <ul>
          <li v-for="(item, index) in $t('activities.items')" :key="index">
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Who's Welcome -->
      <section class="section-block">
        <h3>{{ $t('whoWelcome.title') }}</h3>
        <p>{{ $t('whoWelcome.intro') }}</p>
        <ul>
          <li v-for="(item, index) in $t('whoWelcome.items')" :key="index">
            {{ item }}
          </li>
        </ul>
      </section>

      <!-- Availability Notice -->
      <section class="availability-notice">
        <h3>{{ $t('availability.title') }}</h3>
        <p>{{ $t('availability.text') }}</p>
      </section>

      <!-- Primary CTA - Telegram -->
      <div class="cta-primary">
        <a href="https://t.me/silverto_forest_focus" class="btn btn-primary">
          <span class="icon">💬</span>
          {{ $t('cta.primary') }}
        </a>
      </div>

      <p class="closing">{{ $t('closing') }}</p>
      <p class="motto"><em>{{ $t('motto') }}</em></p>
    </div>

    <!-- Floating CTA Button (Mobile) -->
    <div class="floating-cta">
      <a href="https://t.me/silverto_forest_focus" class="btn btn-floating">
        {{ $t('cta.join') }} <span class="icon">→</span>
      </a>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  title: "Forest Focus"
  subtitle: "A Forest Coworking Experience"
  dateLocation: "July 1-31, 2025 · Silverto, Northern Portugal"
  intro: "Forest Focus brings together remote workers, creators, and dreamers in the lush forests of Ecoaldeia Silverto. This is not a product, but a canvas for community connection where nature meets productivity, mindfulness, and inspiration."

  tagline: "Nature · Beauty · Calm · Inspiration · Good Food · Fast Wifi"

  experience:
    title: "The Experience"
    intro: "Our 1.5-hectare forest becomes your workspace, sanctuary, and playground with:"
    items:
      - title: "Dedicated Workspaces"
        description: "Desks set up in an army tent and outdoor spots among the trees"
      - title: "Fast Connectivity"
        description: "High-speed internet and electrical power throughout"
      - title: "Community Areas"
        description: "Living/chilling space for conversations and connection"
      - title: "Natural Comfort"
        description: "Forest shower, dry toilet, and spring water access"
      - title: "Mindful Practice"
        description: "Regular yoga sessions on the land"

  howItWorks:
    title: "How It Works"
    intro: "Forest Focus is co-created by all participants. We provide the foundation:"
    items:
      - "Beautiful forest setting being transformed into a diverse agroforestry system"
      - "Basic amenities and infrastructure"
      - "Fast internet and power supply"
    outro: "Together, we share costs, responsibilities, and experiences. We ask for a minimal contribution (around €10) for space and facilities, with other costs shared among participants."

  activities:
    title: "Activities & Possibilities"
    intro: "During your stay, you can:"
    items:
      - "Work individually or collaborate on projects"
      - "Join community-led meals and gatherings"
      - "Participate in yoga, meditation, and breathwork"
      - "Explore nearby hot springs, natural pools, and surf spots"
      - "Contribute to the development of this regenerative space"

  whoWelcome:
    title: "Who's Welcome"
    intro: "Forest Focus is ideal for those who:"
    items:
      - "Seek productivity in natural surroundings"
      - "Value community and collaborative living"
      - "Are open to diverse perspectives and ways of being"
      - "Want to balance digital work with natural connection"
      - "Appreciate both mainstream comforts and radical thinking"

  availability:
    title: "Limited Availability"
    text: "We can accommodate up to 15 people, so reserve your place soon! More information on sign-up will be shared in the Telegram channel."

  cta:
    primary: "Join our Telegram Group"
    join: "Join Now"

  closing: "Whether you can join for a few days or the full month, your presence and participation are what will make this gathering unique."

  motto: "For, not against. Not in protest to what we lose but grateful for what we have."

pt:
  title: "Forest Focus"
  subtitle: "Uma Experiência de Coworking na Floresta"
  dateLocation: "1 a 31 de julho de 2025 · Silverto, Norte de Portugal"
  intro: "O Forest Focus reúne trabalhadores remotos, criadores e sonhadores nas exuberantes florestas da Ecoaldeia Silverto. Não é um produto, mas uma tela para conexão onde a natureza encontra produtividade, mindfulness e inspiração."

  tagline: "Natureza · Beleza · Calma · Inspiração · Boa Comida · WiFi Super Rápido"

  experience:
    title: "A Experiência"
    intro: "O nosso terreno de 1,5 hectares torna-se o teu espaço de trabalho, santuário e recreio com:"
    items:
      - title: "Espaços de Trabalho Dedicados"
        description: "Mesas numa tenda militar e locais ao ar livre entre as árvores"
      - title: "Conectividade Rápida"
        description: "Internet de alta velocidade e energia elétrica em todo o espaço"
      - title: "Áreas Comunitárias"
        description: "Espaço de estar/relaxar para conversas e conexão"
      - title: "Conforto Natural"
        description: "Chuveiro florestal, casa de banho seca e acesso a água de nascente"
      - title: "Prática Consciente"
        description: "Sessões regulares de yoga no terreno"

  howItWorks:
    title: "Como Funciona"
    intro: "O Forest Focus é co-criado por todos os participantes. Nós fornecemos a base:"
    items:
      - "Um belo cenário florestal a ser transformado num sistema agroflorestal diverso"
      - "Comodidades e infraestrutura básicas"
      - "Internet rápida e fornecimento de energia"
    outro: "Juntos, partilhamos custos, responsabilidades e experiências. Pedimos uma contribuição mínima (cerca de €10) para uso do espaço e instalações, com outros custos partilhados entre os participantes."

  activities:
    title: "Atividades & Possibilidades"
    intro: "Durante a tua estadia, podes:"
    items:
      - "Trabalhar individualmente ou colaborar em projetos"
      - "Participar em refeições e encontros comunitários"
      - "Praticar yoga, meditação e exercícios respiratórios"
      - "Explorar fontes termais próximas, piscinas naturais e spots de surf"
      - "Contribuir para o desenvolvimento deste espaço regenerativo"

  whoWelcome:
    title: "Quem é Bem-vindo"
    intro: "O Forest Focus é ideal para quem:"
    items:
      - "Procura produtividade em ambiente natural"
      - "Valoriza comunidade e vida colaborativa"
      - "Está aberto a perspetivas e formas de ser diversas"
      - "Quer equilibrar trabalho digital com conexão à natureza"
      - "Aprecia tanto confortos convencionais como pensamento radical"

  availability:
    title: "Disponibilidade Limitada"
    text: "Podemos acomodar até 15 pessoas, por isso reserva o teu lugar em breve! Mais informações sobre inscrições serão partilhadas no canal do Telegram."

  cta:
    primary: "Junta-te ao Nosso Grupo no Telegram"
    join: "Junta-te Agora"

  closing: "Quer te juntes por alguns dias ou pelo mês inteiro, a tua presença e participação são o que tornarão este encontro único."

  motto: "A favor, não contra. Não em protesto ao que perdemos, mas gratos pelo que temos."
</i18n>

<style lang="scss" scoped>
.fofo {
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling */

  /* Header and image styles for portrait flyer with black bars */
  .header.full-width {
    width: 100vw;
    position: relative;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    margin-bottom: 2rem;
    height: 100vh; /* Make the header exactly full viewport height */
    overflow: hidden; /* Hide any overflow */
    line-height: 0; /* Remove any extra spacing */
  }

  .header.full-width img {
    width: auto;
    max-height: 100%;
    object-fit: contain;
    margin: 0 auto;
    vertical-align: middle; /* Removes bottom gap */
    display: block;
  }

  /* Responsive image behavior */
  .responsive-image {
    max-width: 100%;
    height: auto;
    display: block;
    font-size: 0; /* Remove any font-related spaces */
  }

  /* Reset content flow */
  .content-container {
    width: 90%;
    max-width: 40em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }

  /* Ensure the main element has proper stacking */
  :global(.main) {
    display: block !important;
    padding: 0;
    margin: 0;
  }

  /* Typography */
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  h2.subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0.5rem;
    text-align: center;
    color: #555;
  }

  .date-location {
    font-size: 1.1rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #666;
  }

  .intro {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .tagline {
    font-size: 1.4rem;
    text-align: center;
    margin: 1rem 0 2rem;
    padding: 1rem 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    width: 100%;
    color: #2a7d2e;
  }

  /* Section styling */
  .section-block {
    margin-bottom: 2.5rem;
    width: 100%;
    text-align: left;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2a7d2e;
  }

  p {
    text-align: left;
    margin-bottom: 1.2em;
    line-height: 1.6;
  }

  ul {
    text-align: left;
    padding-left: 2em;
    margin-top: 0.5em;
    margin-bottom: 1.5em;
    width: 100%;
    box-sizing: border-box;

    li {
      margin-bottom: 0.8em;
      position: relative;
      line-height: 1.5;
    }
  }

  .feature-list li {
    margin-bottom: 1.2em;
  }

  /* Availability notice */
  .availability-notice {
    background-color: rgba(42, 125, 46, 0.1);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 2rem 0;
    width: 100%;
  }

  /* Footer elements */
  .closing {
    margin-top: 1.5em;
    font-weight: 500;
  }

  .motto {
    margin-top: 0.5em;
    margin-bottom: 2.5em;
    font-style: italic;
    color: #555;
    text-align: center;
  }

  // CTA Styles
  .cta-primary {
    width: 100%;
    max-width: 400px;
    margin: 2rem 0;
    text-align: center;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9em 1.8em;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;

    .icon {
      margin-right: 0.5em;
      font-size: 1.2em;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .btn-primary {
    @media only screen and (max-width: 768px) {
      display: none;
    }

    background-color: #25D366; // Telegram green
    color: white;

    &:hover {
      background-color: #128C7E;
    }
  }

  // Floating CTA for mobile
  .floating-cta {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 100;

    @media only screen and (max-width: 768px) {
      display: block;
    }

    .btn-floating {
      background-color: #25D366;
      color: white;
      padding: 0.7em 1.4em;
      border-radius: 50px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;

      .icon {
        margin-left: 0.5em;
      }

      &:hover {
        background-color: #128C7E;
      }
    }
  }
}
</style>

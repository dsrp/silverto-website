<template>
  <div class="primavera">
    <h1>{{ $t('title') }}</h1>

    <a class="header" href="https://t.me/+UlePfHcv94JjMjdi">
      <img :alt="$t('description')" src="@/assets/img/primavera.jpg"></img>
    </a>

    <p>
      {{ $t('description') }}
    </p>

    <!-- Primary CTA - Telegram -->
    <div class="cta-primary">
      <a href="https://t.me/+UlePfHcv94JjMjdi" class="btn btn-primary">
        <span class="icon">💬</span>
        {{ $t('cta.primary') }}
      </a>
    </div>

    <h3>{{ $t('event.title') }}</h3>
    <p>{{ $t('event.text') }}</p>

    <h3>{{ $t('participate.title') }}</h3>
    <ul>
      <li>{{ $t('participate.item1') }}</li>
      <li>{{ $t('participate.item2') }}</li>
      <li>{{ $t('participate.item3') }}</li>
      <li>{{ $t('participate.item4') }}</li>
      <li>{{ $t('participate.item5') }}</li>
    </ul>

    <h3>{{ $t('rsvp.title') }}</h3>
    <p>{{ $t('rsvp.text') }}</p>

    <!-- Secondary CTA - HackMD -->
    <div class="cta-secondary">
      <a href="https://hackmd.io/@dokkurbob/S13cCiXbR" class="btn btn-secondary">
        <span class="icon">📝</span>
        {{ $t('cta.secondary') }}
      </a>
    </div>

    <ul class="rsvp-list">
      <li>{{ $t('rsvp.item2') }}</li>
      <li>{{ $t('rsvp.item3') }}</li>
    </ul>

    <h3>{{ $t('connect.title') }}</h3>
    <p>{{ $t('connect.text') }} <a href="https://t.me/+UlePfHcv94JjMjdi">{{ $t('connect.telegram') }}</a></p>

    <p class="closing">{{ $t('closing') }}</p>

    <!-- Floating CTA Button (Mobile) -->
    <div class="floating-cta">
      <a href="https://t.me/+UlePfHcv94JjMjdi" class="btn btn-floating">
        {{ $t('cta.join') }} <span class="icon">→</span>
      </a>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Silverto Spring Party 2025
  description: We're thrilled to announce our annual Spring Party, taking place on Friday, May 3rd, 2025, from the afternoon at 14:00 pm into the evening and through the next morning at Silverto.
  cta:
    primary: Join our Telegram Group
    secondary: RSVP in our Party Document
    join: Join Now
  event:
    title: A Co-Created Event
    text: This year's theme focuses on showcasing and connecting our local Minho residents with itself. We envision a day of sharing talents, skills, products, and experiences that highlight the richness of our region's culture and creativity.
  participate:
    title: How to Participate
    item1: Bring musical instruments for spontaneous jam sessions
    item2: Share your handcrafted products or local goods
    item3: Perform music, dance, or other artistic expressions
    item4: Lead a short workshop on a skill you'd like to share
    item5: Simply come and enjoy the festivities with open-hearted presence
  rsvp:
    title: RSVP & Participation
    text: "To help us prepare, please let us know you're coming:"
    item1: Let us know you're coming by RSVPing in our
    link: party document
    item2: Indicate if you'd like to perform or lead a workshop
    item3: Reach out if you'd like to help organize or assist with the event
  connect:
    title: Connect with Us
    text: "Join our group for party updates and coordination"
    telegram: on telegram
  closing: We look forward to celebrating spring, our region Minho, and new beginnings with you at Silverto!

pt:
  title: Festa da Primavera Silverto 2025
  description: Temos o prazer de anunciar a nossa Festa da Primavera anual, que terá lugar na sexta-feira, 3 de maio de 2025, desde a tarde às 14:00 até à noite e durante a manhã seguinte em Silverto.
  cta:
    primary: Junte-se ao nosso Grupo Telegram
    secondary: Confirme Presença no Documento da Festa
    join: Junte-se Agora
  event:
    title: Um Evento Co-Criado
    text: O tema deste ano centra-se em mostrar e conectar os residentes locais do Minho entre si. Imaginamos um dia de partilha de talentos, habilidades, produtos e experiências que destacam a riqueza da cultura e criatividade da nossa região.
  participate:
    title: Como Participar
    item1: Traga instrumentos musicais para sessões de improvisação espontâneas
    item2: Partilhe os seus produtos artesanais ou produtos locais
    item3: Apresente música, dança ou outras expressões artísticas
    item4: Lidere um pequeno workshop sobre uma habilidade que gostaria de partilhar
    item5: Simplesmente venha e desfrute das festividades com presença de coração aberto
  rsvp:
    title: RSVP e Participação
    text: "Para nos ajudar a preparar, por favor informe-nos que vai comparecer:"
    item1: Informe-nos que vai comparecer respondendo no nosso
    link: documento da festa
    item2: Indique se gostaria de fazer uma apresentação ou liderar um workshop
    item3: Entre em contacto se gostaria de ajudar a organizar ou auxiliar no evento
  connect:
    title: Conecte-se Connosco
    text: "Junte-se ao nosso grupo para atualizações e coordenação da festa"
    telegram: no telegram
  closing: Esperamos celebrar a primavera, a nossa região do Minho e novos começos consigo em Silverto!
</i18n>

<style lang="scss" scoped>
.primavera {
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  padding: 1em;

  > * {
    max-width: 80vw;

    @media only screen and (min-width: 500px) {
      max-width: 40em;
    }
  }

  a > img {
    max-width: 50vw;
  }

  p {
    text-align: left;
    margin-bottom: 1.2em;
  }

  ul {
    text-align: left;
    padding-left: 2em;
    margin-top: 0.5em;
    width: 100%;
    box-sizing: border-box;

    li {
      margin-bottom: 0.5em;
      position: relative;
    }
  }

  .rsvp-list {
    margin-bottom: 1.5em;
  }

  .closing {
    margin-top: 1.5em;
    font-weight: 500;
  }

  // CTA Styles
  .cta-primary, .cta-secondary {
    width: 100%;
    max-width: 400px;
    margin: 1.5em 0;
    text-align: center;
  }

  .cta-primary {
    margin-bottom: 2em;
  }

  .cta-secondary {
    margin-top: 0.5em;
    margin-bottom: 1.5em;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8em 1.5em;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    width: 100%;

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
    background-color: #25D366; // Telegram green
    color: white;

    &:hover {
      background-color: #128C7E;
    }
  }

  .btn-secondary {
    background-color: #5850EC; // HackMD color
    color: white;

    &:hover {
      background-color: #4338CA;
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
      padding: 0.6em 1.2em;
      border-radius: 50px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

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

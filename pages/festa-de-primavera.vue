<template>
  <div class="about">
    <h1>{{ $t('title') }}</h1>
    <p>{{ $t('description') }}</p>
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
    <ul>
      <li>{{ $t('rsvp.item1') }} <a href="https://hackmd.io/@dokkurbob/S13cCiXbR">{{ $t('rsvp.link') }}</a></li>
      <li>{{ $t('rsvp.item2') }}</li>
      <li>{{ $t('rsvp.item3') }}</li>
    </ul>
    <h3>{{ $t('connect.title') }}</h3>
    <p>{{ $t('connect.text') }} <a href="https://t.me/+UlePfHcv94JjMjdi">{{ $t('connect.telegram') }}</a></p>
    <p>{{ $t('closing') }}</p>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Silverto Spring Party 2025
  description: We're thrilled to announce our annual Spring Party, taking place on Friday, May 3rd, 2025, from the afternoon at 14:00 pm into the evening and through the next morning at Silverto.
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
    text: "To help us prepare, please:"
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
    text: "Para nos ajudar a preparar, por favor:"
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
.about {
  display: flex;
  flex-flow: column;
  align-items: center;

  >* {
    max-width: 80vw;

    @media only screen and (min-width: 500px) {
      max-width: 40em;
    }
  }

  padding: 1em;

  p {
    text-align: left;
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
}
</style>

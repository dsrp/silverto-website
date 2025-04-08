<template>
  <div class="volunteering">
    <h1>{{ $t('title') }}</h1>
    <h2>{{ $t('cooperative') }}</h2>
    <h3>{{ $t('subtitle') }}</h3>
    <p>{{ $t('intro') }}</p>

    <h3>{{ $t('how.title') }}</h3>
    <ul>
      <li>🌱 {{ $t('how.step1') }}</li>
      <li>🌿 {{ $t('how.step2') }}</li>
      <li>🌳 {{ $t('how.step3') }}</li>
    </ul>

    <h3>{{ $t('ask.title') }}</h3>
    <ul>
      <li>⏰ {{ $t('ask.time') }}</li>
      <li>🧹 {{ $t('ask.maintain') }}</li>
      <li>💰 {{ $t('ask.expenses') }}</li>
      <li>🗣️ {{ $t('ask.communication') }}</li>
    </ul>

    <h3>{{ $t('opportunities.title') }}</h3>
    <ul>
      <li>{{ $t('opportunities.forest') }}</li>
      <li>{{ $t('opportunities.pruning') }}</li>
      <li>{{ $t('opportunities.weeding') }}</li>
      <li>{{ $t('opportunities.stone') }}</li>
      <li>{{ $t('opportunities.maintenance') }}</li>
      <li>{{ $t('opportunities.animals') }}</li>
    </ul>

    <h3>{{ $t('accommodation.title') }}</h3>
    <ul>
      <li>🏠 {{ $t('accommodation.house') }}</li>
      <li>🚐 {{ $t('accommodation.caravan') }}</li>
      <li>🚙 {{ $t('accommodation.campervan') }}</li>
      <li>🏕️ {{ $t('accommodation.camping') }}</li>
      <li>🚿 {{ $t('accommodation.shower') }}</li>
    </ul>

    <h3>{{ $t('beyond.title') }}</h3>
    <p>{{ $t('beyond.intro') }}</p>
    <ul>
      <li>{{ $t('beyond.yoga') }}</li>
      <li>{{ $t('beyond.gatherings') }}</li>
      <li>{{ $t('beyond.hotsprings') }}</li>
      <li>{{ $t('beyond.knowledge') }}</li>
      <li>{{ $t('beyond.dinners') }}</li>
    </ul>

    <h3>{{ $t('contact.title') }}</h3>
    <p>{{ $t('contact.message') }}</p>
    <p><a href="mailto:volunteering@silverto.pt">volunteering@silverto.pt</a></p>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Volunteering
  cooperative: Ecoaldeia Silverto
  subtitle: From Volunteer to Pioneer
  intro: We're actively seeking enthusiastic individuals to help nurture our growing food forest and co-living project in beautiful North Portugal. Whether you're a digital nomad seeking a nature-connected base, a sustainable living enthusiast, or simply curious about agroforestry, we welcome you to experience Silverto firsthand.
  how:
    title: How It Works
    step1: Begin with a 3-8 week "taster" experience
    step2: If we connect well, return for a 2-3 month deeper experience
    step3: For those aligned with our vision, explore a 9-12 month co-creation period
  ask:
    title: What We Ask
    time: Contribute about 3 hours daily, 5 days a week to our community
    maintain: Help maintain our shared spaces and participate in household tasks
    expenses: Share living expenses equitably or manage your own food supplies
    communication: Practice open, honest communication
  opportunities:
    title: Volunteer Opportunities
    forest: Forest maintenance and management
    pruning: Pruning, wood chipping, and firewood preparation
    weeding: Weeding and land care
    stone: Stone wall pointing with lime mortar
    maintenance: Light maintenance of guest accommodations
    animals: Animal care (including our two cats, one with diabetes)
  accommodation:
    title: Accommodation
    house: Access to our renovated stone house with common areas
    caravan: Comfortable guest caravan with solar power and fast wifi
    campervan: Spaces for campervans with utilities and fiber internet
    camping: Forest camping spots for nature immersion
    shower: Indoor bathroom/shower facilities and also an idyllic forest solar shower
  beyond:
    title: Beyond Work
    intro: "At Silverto, you'll join a small group of 2-6 people, depending on the time, creating a perfect balance of togetherness and personal space. You'll become part of our local network with access to:"
    yoga: Local yoga classes and wellness activities
    gatherings: Neighborhood gatherings and cultural events
    hotsprings: Visits to nearby hot springs and natural wonders
    knowledge: Knowledge exchange on topics ranging from sustainable living to philosophy
    dinners: Creative dinners and social events
  contact:
    title: Interested in joining us?
    message: Please write us a message at volunteering@silverto.pt and start your message with "strawberry".

pt:
  title: Voluntariado
  cooperative: Ecoaldeia Silverto
  subtitle: De Voluntário a Pioneiro
  intro: Estamos ativamente procurando pessoas entusiasmadas para ajudar a nutrir nossa crescente floresta alimentar e projeto de co-habitação no belo Norte de Portugal. Seja você um nômade digital em busca de uma base conectada à natureza, um entusiasta da vida sustentável, ou simplesmente curioso sobre agroflorestação, convidamos você a experimentar Silverto em primeira mão.
  how:
    title: Como Funciona
    step1: Comece com uma experiência "degustação" de 3-8 semanas
    step2: Se nos conectarmos bem, retorne para uma experiência mais profunda de 2-3 meses
    step3: Para aqueles alinhados com nossa visão, explore um período de co-criação de 9-12 meses
  ask:
    title: O Que Pedimos
    time: Contribua cerca de 3 horas diárias, 5 dias por semana para nossa comunidade
    maintain: Ajude a manter nossos espaços compartilhados e participe nas tarefas domésticas
    expenses: Compartilhe despesas de vida equitativamente ou gerencie seu próprio suprimento de alimentos
    communication: Pratique comunicação aberta e honesta
  opportunities:
    title: Oportunidades para Voluntários
    forest: Manutenção e gestão florestal
    pruning: Poda, trituração de madeira e preparação de lenha
    weeding: Capina e cuidado com a terra
    stone: Rejuntamento de muros de pedra com argamassa de cal
    maintenance: Manutenção leve das acomodações para hóspedes
    animals: Cuidado com animais (incluindo nossos dois gatos, um com diabetes)
  accommodation:
    title: Acomodação
    house: Acesso à nossa casa de pedra renovada com áreas comuns
    caravan: Caravana confortável para hóspedes com energia solar e wifi rápido
    campervan: Espaços para autocaravanas com utilidades e internet de fibra
    camping: Locais de campismo na floresta para imersão na natureza
    shower: Instalações de banheiro/chuveiro internos e também um idílico chuveiro solar na floresta
  beyond:
    title: Além do Trabalho
    intro: "Em Silverto, você se juntará a um pequeno grupo de 2-6 pessoas, dependendo da época, criando um equilíbrio perfeito entre convivência e espaço pessoal. Você se tornará parte de nossa rede local com acesso a:"
    yoga: Aulas locais de yoga e atividades de bem-estar
    gatherings: Encontros de vizinhança e eventos culturais
    hotsprings: Visitas a águas termais próximas e maravilhas naturais
    knowledge: Troca de conhecimento sobre tópicos que vão desde vida sustentável até filosofia
    dinners: Jantares criativos e eventos sociais
  contact:
    title: Interessado em se juntar a nós?
    message: Por favor, escreva-nos uma mensagem para volunteering@silverto.pt e comece sua mensagem com "morango".
</i18n>

<style lang="scss" scoped>
.volunteering {
  display: flex;
  flex-flow: column;
  align-items: center;

  > * {
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

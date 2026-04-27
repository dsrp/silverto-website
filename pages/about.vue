<template>
  <div class="about">
    <h1>{{ $t('title') }}</h1>
    <h2>{{ $t('subtitle') }}</h2>
    <p>{{ $t('intro') }}</p>
    <h3>{{ $t('building.title') }}</h3>
    <p>{{ $t('building.text') }}</p>
    <h3>{{ $t('howwework.title') }}</h3>
    <p>{{ $t('howwework.text') }}</p>

    <h3>{{ $t('partners') }}</h3>
    <ul class="inline">
      <li><a href="https://movingcause.org/"><img alt="Moving Cause" src="@/assets/img/logos/movingcause-logo.png"></a>
      </li>
      <li><a href="https://reflorestar-portugal.com"><img alt="Reflorestar Portugal"
            src="@/assets/img/logos/reflorestar-logo.png"></a></li>
      <li><a href="https://dsrp.eu"><img alt="Decentralised Society Research Project"
            src="@/assets/img/logos/dsrp-logo.png"></a></li>
    </ul>

    <h3>{{ $t('talktous') }}</h3>
    <p>{{ $t('happytotalk') }}</p>
    <ul class="inline">
      <li><a href="mailto:info@silverto.pt">info@silverto.pt</a></li>
      <li><a href="https://t.me/ecoaldeia_silverto">Telegram</a></li>
      <li><a href="https://www.linkedin.com/company/silverto/">LinkedIn</a></li>
    </ul>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Silverto
  subtitle: A fusion of regenerative agroforestry and quiet living
  intro: Silverto is 1.5 hectares of land near Paredes de Coura, in the green hills of northern Portugal. Part forest, part food forest in the making, part home — it is a place being shaped with intention, patience, and a deep respect for the landscape that holds it.
  building:
    title: What we are building
    text: The stone house at the centre of Silverto is partly renovated and lived in. The land around it is being managed as a food forest — trees establishing, soil improving, diversity returning. This is not a finished project, and that is precisely the point. We are learning, adjusting, and building something that is meant to last. Beyond the immediate land, Silverto sits within a wider fabric of neighbours and initiatives across northern Portugal who share a similar outlook — people looking for a different relationship with land, with work, and with one another.
  howwework:
    title: How we work
    text: We practise regenerative agroforestry — working with natural systems rather than against them, increasing the diversity and resilience of the land over time. We welcome guests and volunteers who want to learn alongside us, contribute meaningfully, and experience what it feels like to live at the edge of a forest. If you are curious, self-directed, and drawn to this way of living, Silverto may be the right place to spend some time.
  partners: Partners
  talktous: Talk to us
  happytotalk: We are happy to meet you! Send us an email or join our chat to start the conversation!

pt:
  title: Silverto
  subtitle: Uma fusão de agroflorestação regenerativa e vida tranquila
  intro: Silverto são 1,5 hectares de terra perto de Paredes de Coura, nas colinas verdes do norte de Portugal. Parte floresta, parte floresta alimentar em construção, parte lar — é um lugar que está a ser moldado com intenção, paciência e um profundo respeito pela paisagem que o sustenta.
  building:
    title: O que estamos a construir
    text: A casa de pedra no centro de Silverto está parcialmente renovada e habitada. A terra em redor está a ser gerida como uma floresta alimentar — árvores a estabelecer-se, solo a melhorar, diversidade a regressar. Este não é um projeto acabado, e é precisamente esse o ponto. Estamos a aprender, a ajustar e a construir algo que se pretende duradouro. Para além da terra imediata, Silverto insere-se numa tapeçaria mais ampla de vizinhos e iniciativas no norte de Portugal que partilham uma visão semelhante — pessoas que procuram uma relação diferente com a terra, com o trabalho e entre si.
  howwework:
    title: Como trabalhamos
    text: Praticamos agroflorestação regenerativa — trabalhando com os sistemas naturais em vez de contra eles, aumentando a diversidade e resiliência da terra ao longo do tempo. Recebemos hóspedes e voluntários que querem aprender connosco, contribuir de forma significativa e experienciar o que é viver na orla de uma floresta. Se és curioso, autónomo e atraído por esta forma de viver, Silverto pode ser o lugar certo para passar algum tempo.
  partners: Parceiros
  talktous: Fale connosco
  happytotalk: Estamos felizes de te encontrar! Mande-nos um e-mail ou junte-se ao nosso chat para iniciar a conversa!
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

  address,
  p {
    text-align: left;
  }

  ul.inline {
    @media only screen and (min-width: 500px) {
      max-width: 100em;
    }

    list-style-type: none;

    >li {
      display: inline;
      padding: 10pt;

      >h4 {
        display: inline;
      }

      img {
        padding-bottom: 6pt;
        height: 90px;
        max-width: 60vw;
      }

    }
  }
}
</style>

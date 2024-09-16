<template>
  <div class="about">
    <h1>{{ $t('title') }}</h1>
    <h2>{{ $t('cooperative') }}</h2>
    <h3>{{ $t('subtitle') }}</h3>
    <p>{{ $t('synopsis') }}</p>
    <h3>{{ $t('evolution.title') }}</h3>
    <p>{{ $t('evolution.text') }}</p>
    <h3>{{ $t('location.title') }}</h3>
    <iframe
      width="425"
      height="350"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-9.354858398437502%2C41.47360232634395%2C-7.871704101562501%2C42.32301644617188&amp;layer=mapnik&amp;marker=41.899721690058364%2C-8.61328125"
      style="border: 1px solid black"
    /><br><small><a href="https://www.openstreetmap.org/?mlat=41.8997&amp;mlon=-8.6133#map=10/41.8997/-8.6133">{{ $t('location.viewlargermap') }}</a></small>
    <h3>{{ $t('location.address') }}</h3>
    <address>
      Caminho de Moreira nº240<br>
      Lugar do Silverto<br>
      4940-692 Rubiães, Paredes de Coura<br>
      Portugal
    </address>

    <h3>{{ $t('partners') }}</h3>
    <ul class="inline">
      <li><a href="https://movingcause.org/"><img alt="Moving Cause" src="@/assets/img/logos/movingcause-logo.png"></a></li>
      <li><a href="https://dsrp.eu"><img alt="Decentralised Society Research Project" src="@/assets/img/logos/dsrp-logo.png"></a></li>
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
  title: About us
  cooperative: Ecoaldeia Silverto
  subtitle: A fusion of rural co-housing and regenerative agroforestry
  synopsis: Living close to nature with a spirit of modesty and curiosity. Developing a sense of community around to learn and grow together. Helping the land to regenerate by practising more sustainable agriculture and agroforestry, appreciating the unique qualities of the landscape.
  evolution:
    title: Evolution
    text: We have acquired a forest property of 1.5 hectares, part of which is construction land. In 2019, we started renovating the existing country house, which will function as a communal space (co-working, kitchen, guest room). In addition, we have started managing the woodland, taking care of its diversity to turn it into a food forest in the future. We aim to create a small community that cares for the land and each other. Together, we would like to build comfortable and affordable houses with low environmental impact.
  location:
    title: Location
    viewlargermap: View larger map
    address: Address
  partners: Partners
  talktous: Talk to us
  happytotalk: We are happy to meet you! Send us an email or join our chat to start the conversation!

pt:
  title: Sobre nos
  cooperative: Ecoaldeia Silverto
  subtitle: Combina co-habitação rural com agroflorestação regenerativa.
  synopsis: Viver próximo da natureza com um espírito de modéstia e curiosidade. Desenvolver um sentido de comunidade para aprender e crescer em conjunto. Ajudar a terra a regenerar-se, praticando uma agricultura e uma silvicultura mais sustentáveis, apreciando as qualidades únicas da paisagem.
  evolution:
    title: Evolução
    text: Adquirimos uma propriedade florestal de 1,5 hectares, parte da qual é terreno de construção. Em 2019, começámos a renovar a casa de campo existente, que funcionará como um espaço comum (co-working, cozinha, quarto de hóspedes). Além disso, começámos a gerir a floresta, cuidando da sua diversidade para a transformar, no futuro, numa floresta alimentar. Queremos criar uma pequena comunidade que cuide da terra e uns dos outros. Juntos, gostaríamos de construir casas confortáveis e económicas com baixo impacto ambiental.
  location:
    title: Onde estamos
    viewlargermap: Visualizar Mapa em Tamanho Maior
    address: Morada
  partners: Parceiros
  talktous: Fale conosco
  happytotalk: Estamos felizes de te-encontrar! Mande-nos um e-mail ou junte-se ao nosso chat para iniciar a conversa!
</i18n>

<style lang="scss" scoped>
.about {
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

  address, p {
    text-align: left;
  }

  ul.inline {
    @media only screen and (min-width: 500px) {
      max-width: 100em;
    }

    list-style-type: none;

    > li {
      display: inline;
      padding: 10pt;

      > h4 {
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

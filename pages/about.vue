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
      Silverto, Rubiães<br>
      4940-692 Paredes de Coura<br>
      Portugal
    </address>
    <h3>{{ $t('organs.title') }}</h3>
    <ul class="inline">
      <li>
        <h4>{{ $t('organs.administrator') }}</h4>
        Mathijs de Bruin
      </li>
      <li>
        <h4>{{ $t('organs.ga') }}</h4>
        Nuno Reis Pereira
      </li>
      <li>
        <h4>{{ $t('organs.fiscal') }}</h4>
        Diego Reimondez
      </li>
    </ul>

    <h3>{{ $t('partners') }}</h3>
    <ul class="inline">
      <li><a href="https://solnascente.eu/"><img alt="Sol Nascente" src="@/assets/img/logos/solnascente-logo-light-small.svg"></a></li>
      <li><a href="https://movingcause.org/"><img alt="Moving Cause" src="@/assets/img/logos/movingcause-logo.png"></a></li>
      <li><a href="https://reflorestar-portugal.com"><img alt="Reflorestar Portugal" src="@/assets/img/logos/reflorestar-logo.png"></a></li>
      <li><a href="https://dsrp.eu"><img alt="Decentralised Society Research Project" src="@/assets/img/logos/dsrp-logo.png"></a></li>
    </ul>

    <h3>{{ $t('talktous') }}</h3>
    <p>{{ $t('happytotalk') }}</p>
    <p><a href="mailto:info@silverto.pt">info@silverto.pt</a></p>
  </div>
</template>

<i18n lang="yaml">
en:
  title: About us
  cooperative: Cooperative Ecoaldeia Silverto
  subtitle: Combining rural co-housing with regenerative agroforestry.
  synopsis: Living in and with nature, developing local economies and reinvigorating the community. We want to set an example of rural regeneration in the region, demonstrating new practises of land use, revaluing the unique qualities of the countryside.
  evolution:
    title: Evolution
    text: We have acquired a forest property of 1,5 ha, part of which is constructable land. In 2019 we will start the renovation of the existing countryhouse, which will function as a comunual space (co-working, kitchen, guestroom). In addition, we will start the active management of the forest, for it to become comercially viable. By 2022 we aspire to shelter a community of up to 12 people. Together, we wish to (auto-)construct comfortable and affordable houses for up to 5 households, with a low ecological impact.
  location:
    title: Location
    viewlargermap: View larger map
    address: Address
  organs:
    title: Social Organs
    administrator: Sole Administrator
    ga: General Assembly
    fiscal: Sole Auditor
  partners: Partners
  talktous: Talk to us
  happytotalk: We are happy to meet you! Send us an email to start the conversation!

pt:
  title: Sobre nos
  cooperative: Cooperativa Ecoaldeia Silverto
  subtitle: Combina co-habitação rural com agroflorestação regenerativa.
  synopsis: Conviver em e com a natureza, desenvolver a economia rural, revigorar a comunidade. Pretendemos fazer um exemplo de regeneração rural do região, mostrar novas práticas de uso da terra, revalorizar as qualidades únicas do campo.
  evolution:
    title: Evolução
    text: Atualmente estamos comprando um campo de 1,5 ha de floresta com direitos de construção. Em 2019 esperamos renovar a casa existente, que terá uma função comum (co-working, cozinha, alojamento). Também iniciaremos a gestão ativa da floresta no campo, para torná-la comercialmente viável. Até 2022, queremos abrigar uma comunidade de até cinco domicílios, fazendo auto-construção de casas confortáveis e económicas, com baixo impacto ecológico. Estamos visando um máximo total de 12 pessoas.
  location:
    title: Onde estamos
    viewlargermap: Visualizar Mapa em Tamanho Maior
    address: Morada
  organs:
    title: Orgãos Sociais
    administrator: Administrador Único
    ga: Assembleia Geral
    fiscal: Fiscal Único
  partners: Parceiros
  talktous: Fale conosco
  happytotalk: Estamos felizes de te-encontrar! Mande-nos um email para iniciar a conversa!
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

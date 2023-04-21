<template>
  <div class="about">
    <nav class="logo">
      <img alt="Ecoaldeia Silverto" class="logo-silverto" src="@/assets/img/logos/ecoaldeia-logo.png" width="250px">
    </nav>
    <hr>
    <br>
    <h2 class="mb-4">
      {{ $t('cooperative') }}
    </h2>
    <div class="row">
      <div class="col left">
        <h3>{{ $t('subtitle') }}</h3>
        <p>{{ $t('synopsis') }}</p>
      </div>
      <div class="col middle">
        <iframe
          width="425"
          height="350"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-9.354858398437502%2C41.47360232634395%2C-7.871704101562501%2C42.32301644617188&amp;layer=mapnik&amp;marker=41.899721690058364%2C-8.61328125"
          style="border: 1px solid black"
        />
        <button class="primary-button" onclick="window.open('https://www.openstreetmap.org/?mlat=41.8997&amp;mlon=-8.6133#map=10/41.8997/-8.6133', '_blank')">
          {{ $t('location.viewlargermap') }}
        </button>
      </div>
      <div class="col right">
        <h3>{{ $t('talktous') }}</h3>
        <p>{{ $t('happytotalk') }}</p>
        <ul class="inline">
          <li><a href="mailto:info@silverto.pt">info@silverto.pt</a></li>
          <li><a href="https://matrix.to/#/#silverto:matrix.org">Matrix</a></li>
          <li><a href="https://t.me/ecoaldeia_silverto">Telegram</a></li>
        </ul>
        <h3 class="mt-4">
          {{ $t('location.address') }}
        </h3>
        <address>
          Caminho de Moreira nº240<br>
          Lugar do Silverto<br>
          4940-692 Rubiães, Paredes de Coura<br>
          Portugal
        </address>
      </div>
    </div>
    <h3 class="mt-5">
      {{ $t('evolution.title') }}
    </h3>
    <p>{{ $t('evolution.text') }}</p>
    <h3 class="mt-5">
      {{ $t('partners') }}
    </h3>
    <ul class="inline">
      <li><a href="https://movingcause.org/"><img alt="Moving Cause" src="@/assets/img/logos/movingcause-logo.png"></a></li>
      <li><a href="https://reflorestar-portugal.com"><img alt="Reflorestar Portugal" src="@/assets/img/logos/reflorestar-logo.png"></a></li>
      <li><a href="https://dsrp.eu"><img alt="Decentralised Society Research Project" src="@/assets/img/logos/dsrp-logo.png"></a></li>
    </ul>
  </div>
</template>

<i18n lang="yaml">
en:
  title: About us
  cooperative: Ecoaldeia Silverto
  subtitle: A fusion of rural co-housing and regenerative agroforestry
  synopsis: Living close to nature with a spirit of modesty and curiosity. Developing a sense of community around to learn and grow together.
            Helping the land to regenerate by practising more sustainable agriculture and agroforestry, appreciating the unique qualities of the landscape.
            Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped up on goofballs hunt anything that moves sweet beast under the bed  intrigued by the shower swat at dog, make muffins flop over shake treat   intently sniff hand  lick butt all of a sudden go crazy  intently stare at the same spot  rub face on everything inspect anything brought into the house chew ipad power cord ,  rub face on everything shake treat  flop over inspect anything brought into the house give attitude  intently sniff hand   intrigued by the shower behind the couch swat at dog. Give attitude shake treat  attack feet flop over inspect anything brought into the house swat at dog chew ipad power cord  make muffins behind the couch intently stare at the same spot hide when guests come over, hopped up on goofballs  flop over destroy couch sweet beast under the bed hunt anything that moves all of a sudden go crazy lick butt  rub face on everything  intrigued by the shower,  intently sniff hand  hunt anything that moves intently stare at the same spot sweet beast under the bed swat at dog flop over chew ipad power cord  lick butt destroy couch. Hide when guests come over  rub face on everything shake treat  attack feet all of a sudden go crazy lick butt swat at dog make muffins  intently sniff hand  sweet beast under the bed intently stare at the same spot, chew ipad power cord  give attitude  hunt anything that moves flop over behind the couch hopped up on goofballs  intrigued by the shower inspect anything brought into the house. Hunt anything that moves all of a sudden go crazy lick butt make muffins  hide when guests come over flop over  intrigued by the shower, inspect anything brought into the house destroy couch hopped up on goofballs chew ipad power cord  flop over behind the couch  rub face on everything swat at dog, shake treat  intently stare at the same spot  intently sniff hand  give attitude attack feet sweet beast under the bed.
  evolution:
    title: Evolution
    text: We have acquired a forest property of 1.5 hectares, part of which is construction land. In 2019, we started renovating the existing country house, which will function as a communal space (co-working, kitchen, guest room). In addition, we have started managing the woodland, taking care of its diversity to turn it into a food forest in the future. By 2023, we want to create a small community that cares for the land and each other. Together, we would like to build comfortable and affordable houses with low environmental impact.
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
  synopsis: Conviver em e com a natureza, desenvolver a economia rural, revigorar a comunidade. Pretendemos fazer um exemplo de regeneração rural do região, mostrar novas práticas de uso da terra, revalorizar as qualidades únicas do campo.
  evolution:
    title: Evolução
    text: Adquirimos uma propriedade rural de 1,5 ha, parte da qual é terreno para construção. Em 2019 já começámos a renovação da casa de campo existente, que funcionará como espaço comunitário (co-trabalho, cozinha, quarto de hóspedes). Além disso, iniciaremos a gestão activa da floresta, para que esta se torne comercialmente viável. Até 2022 aspiramos a abrigar uma comunidade de até 12 pessoas. Juntos, desejamos construir (auto-)casas confortáveis e acessíveis para um máximo de 5 casas, com um baixo impacto ecológico.
  location:
    title: Onde estamos
    viewlargermap: Visualizar Mapa em Tamanho Maior
    address: Morada
  partners: Parceiros
  talktous: Fale conosco
  happytotalk: Estamos felizes de te-encontrar! Mande-nos um e-mail ou junte-se ao nosso chat para iniciar a conversa!
</i18n>
<script>

export default {
  components: {
  }
}
</script>
<style lang="scss" scoped>
@import "~assets/scss/colors.scss";
.about {
padding: 3em;

h2, h3 {
  text-align: center;
}
  .left, .right, .middle {
   margin-top: 2em;
  }
.logo-silverto {
  width: 100vmin;
}
address, p {
text-align: left;
}
p {
  font-size: 20px;
}
iframe {
border-radius: 3pt;
}
button {
  border-radius: 24pt;
  border: none;
  padding: 1ex 1em 1ex 1em;
  margin: 0.5em 0.5em;
  font-size: 80%;
  font-weight: lighter;
  transition: background-color 0.2s ease-out;
  cursor: pointer;

  &.secondary-button {
    background-color: $dark-green;
    color: $white;

    &:hover {
      background-color: lighten($dark-green, 10%);
    }
  }

  &.primary-button {
    background-color: $medium-green;
    color: $grey;

    &:hover {
      background-color: lighten($medium-green, 10%);
    }

  }
}

ul.inline {
@media only screen and (min-width: 500px) {
max-width: 100em;
}

padding: 0px;
list-style-type: none;

li {
display: inline-block;

img {
padding-bottom: 6pt;
height: 80px;
max-width: 55vw;
}

}
}
}
</style>

<template>
  <div class="about">
    <h1>Sobre nos</h1>
    <h2>Cooperativa Ecoaldeia Silverto</h2>
    <h3>Combina co-habitação rural com agroflorestação regenerativa.</h3>
    <p>Conviver em e com a natureza, desenvolver a economia rural, revigorar a comunidade. Pretendemos fazer um exemplo de regeneração rural do região, mostrar novas práticas de uso da terra, revalorizar as qualidades únicas do campo.</p>
    <h3>Evolução</h3>
    <p>Atualmente estamos comprando um campo de 1,5 ha de floresta com direitos de construção. Em 2019 esperamos renovar a casa existente, que terá uma função comum (co-working, cozinha, guestroom). Também iniciaremos a gestão ativa da floresta no campo, para torná-la comercialmente viável. Até 2022, queremos abrigar uma comunidade de até cinco domicílios, fazendo auto-construção de casas confortáveis e económicas, com baixo impacto ecológico. Estamos visando um máximo total de 12 pessoas.</p>
    <h3>Onde estamos</h3>
    <iframe
      width="425"
      height="350"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-9.354858398437502%2C41.47360232634395%2C-7.871704101562501%2C42.32301644617188&amp;layer=mapnik&amp;marker=41.899721690058364%2C-8.61328125"
      style="border: 1px solid black"
    /><br><small><a href="https://www.openstreetmap.org/?mlat=41.8997&amp;mlon=-8.6133#map=10/41.8997/-8.6133">Visualizar Mapa em Tamanho Maior</a></small>
    <h3>Morada</h3>
    <address>
      Caminho de Moreira nº240<br>
      Silverto, Rubiães<br>
      4940-692 Paredes de Coura<br>
      Portugal
    </address>
    <h3>Orgãos Sociais</h3>
    <ul class="inline">
      <li>
        <h4>Administrador</h4>
        Mathijs de Bruin
      </li>
      <li>
        <h4>Assembleia Geral</h4>
        Nuno Reis Pereira
      </li>
      <li>
        <h4>Fiscalização</h4>
        Diego Reimondez
      </li>
    </ul>

    <h3>Parceiros</h3>
    <ul class="inline">
      <li><a href="https://solnascente.eu/"><img alt="Sol Nascente" src="@/assets/solnascente-logo-light-small.svg"></a></li>
      <li><a href="https://movingcause.org/"><img alt="Moving Cause" src="@/assets/movingcause-logo.png"></a></li>
      <li><a href="https://reflorestar-portugal.com"><img alt="Reflorestar Portugal" src="@/assets/reflorestar-logo.png"></a></li>
      <li><a href="https://dsrp.eu"><img alt="Decentralised Society Research Project" src="@/assets/dsrp-logo.png"></a></li>
    </ul>

    <h3>Fale conosco</h3>
    <p>Estamos felizes de te-encontrar! Mande-nos um email para iniciar a conversa!</p>
    <p><a href="mailto:info@silverto.pt">info@silverto.pt</a></p>
  </div>
</template>

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

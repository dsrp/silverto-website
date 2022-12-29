<template>
  <!-- Begin Mailchimp Signup Form -->
  <div id="mc_embed_signup" class="newsletter">
    <form
      id="mc-embedded-subscribe-form"
      action="https://Solnascente.us20.list-manage.com/subscribe/post?u=4951e3c30865c87767a6a4b0d&amp;id=807bea2a36"
      method="post"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <h2>{{ $t('title') }}</h2>
        <p>{{ $t('synopsis') }}</p>
        <div class="indicates-required">
          <span class="asterisk">*</span> {{ $t('required') }}
        </div>
        <div class="mc-field-group">
          <label for="mce-EMAIL">{{ $t('email') }}<span class="asterisk">*</span>
          </label>
          <input id="mce-EMAIL" type="email" value="" name="EMAIL" class="required email">
        </div>
        <div class="mc-field-group">
          <label for="mce-FNAME">{{ $t('first_name') }}</label>
          <input id="mce-FNAME" type="text" value="" name="FNAME" class="">
        </div>
        <div class="mc-field-group">
          <label for="mce-LNAME">{{ $t('last_name') }}</label>
          <input id="mce-LNAME" type="text" value="" name="LNAME" class="">
        </div>
        <p>
          <a href="https://us20.campaign-archive.com/home/?u=4951e3c30865c87767a6a4b0d&id=807bea2a36" title="View previous campaigns">{{ $t('view_archive') }}</a>
        </p>
        <div id="mce-responses" class="clear">
          <div id="mce-error-response" class="response" style="display:none" />
          <div id="mce-success-response" class="response" style="display:none" />
        </div>

        <!-- Silverto group -->
        <input id="group_8" type="hidden" name="group[4065][8]" value="1">

        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_4951e3c30865c87767a6a4b0d_807bea2a36" tabindex="-1" value="">
        </div>
        <div class="clear">
          <input id="mc-embedded-subscribe" type="submit" :value="$t('subscribe')" name="subscribe" class="button">
        </div>
      </div>
    </form>
  </div>

  <!--End mc_embed_signup-->
</template>

<script>
</script>

<i18n lang="yaml">
en:
  title: Subscribe to our newsletter
  synopsis: Receive updates about Silverto and Sol Nascente at most once every two weeks.
  required: required fields
  email: Email
  first_name: First name
  last_name: Last name
  view_archive: View previous newsletters
  subscribe: Subscribe

pt:
  title: Inscrever a nossa newsletter
  synopsis: Receba notícias sobre Silverto e Sol Nascente no maximo cadas duas semanas.
  required: campos obrigatórios
  email: Email
  first_name: Nome
  last_name: Apelido
  view_archive: Ver notícias anteriores.
  subscribe: Inscrever-me
</i18n>

<style  lang="scss" scoped>
@import '~assets/scss/mailchimp.css';

.newsletter {
  display: flex;
  flex-flow: column;
  align-items: center;

  > * {
    min-width: 40vw;
    max-width: 80vw;

    @media only screen and (min-width: 500px) {
      max-width: 40em;
    }
  }

  padding: 1em;
}

</style>

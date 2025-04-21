<template>
  <div class="fofo">
    <a class="header full-width" href="#fofo-title">
      <img
        :alt="$t('description')"
        src="@/assets/img/fofo/silverto-1.jpg"
        srcset="@/assets/img/fofo/silverto-3@0.25x.jpg 960w,
                @/assets/img/fofo/silverto@0.75x.jpg 2880w,
                @/assets/img/fofo/silverto-2@0.5x.jpg 1920w,
                @/assets/img/fofo/silverto-1.jpg 3840w"
        sizes="(max-width: 960px) 960px,
               (max-width: 1920px) 1920px,
               (max-width: 2880px) 2880w,
               3840px"
        class="responsive-image"
      >
    </a>

    <h1 id="fofo-title">{{ $t('title') }}</h1>

    <p>{{ $t('description') }}</p>

    <!-- Primary CTA - Telegram -->
    <div class="cta-primary">
      <a href="https://t.me/silverto_forest_focus" class="btn btn-primary">
        <span class="icon">💬</span>
        {{ $t('cta.primary') }}
      </a>
    </div>

    <h3>{{ $t('event.title') }}</h3>
    <p>{{ $t('event.text') }}</p>

    <h3>{{ $t('connect.title') }}</h3>
    <p>{{ $t('connect.text') }} <a href="https://t.me/silverto_forest_focus">{{ $t('connect.telegram') }}</a></p>

    <p class="closing">{{ $t('closing') }}</p>

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
  title: Forest Focus
  description: <...>
  cta:
    primary: Join our Telegram Group
    join: Join Now
  event:
    title: <...>
    text: <...>
  connect:
    title: Connect with Us
    text: <...>
    telegram: on telegram
  closing: <...>
pt:
  ...
</i18n>

<style lang="scss" scoped>
.fofo {
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  padding: 1em;
  padding-top: 0;

  > * {
    max-width: 80vw;

    @media only screen and (min-width: 500px) {
      max-width: 40em;
    }
  }

  /* Add this to your existing CSS */
  .header.full-width {
    width: 100%;
    max-width: 100vw;
    position: relative;
  }

  .header.full-width img {
    width: auto;
    max-width: 100vw;
    max-height: 100vh;
    height: auto;
    object-fit: cover;
  }

  .responsive-image {
    max-width: 100%;
    height: auto;
    display: block;
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
    align-items: center;
    justify-content: center;
    padding: 0.8em 1.5em;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    display: block;

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

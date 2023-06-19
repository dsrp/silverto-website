<template>
  <div class="landing">
    <video
      ref="videoPlayer"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="background-video video-js"
      crossorigin="anonymous"
      poster="/background-video/poster.jpg"
    >
      <source src="/background-video/playlist.m3u8" type="application/x-mpegURL">
    </video>

    <header class="header">
      <h1>{{ $t('title') }}</h1>
      <i18n path="description" tag="p">
        <a target="_blank" href="https://www.openstreetmap.org/way/690493715">Silverto, Rubiães, Paredes de Coura</a>
      </i18n>
      <div>
        <nuxt-link :to="localePath('about')">
          <button class="secondary-button">
            {{ $t('learnmore') }}
          </button>
        </nuxt-link>
        <nuxt-link :to="localePath('subscribe')">
          <button class="primary-button">
            {{ $t('subscribeme') }}
          </button>
        </nuxt-link>
      </div>
    </header>
  </div>
</template>

<i18n lang="yaml">
en:
  title: Ecoaldeia Silverto
  description: Nurturing a community rooted in the forest | Northern Portugal.
  learnmore: Learn more
  subscribeme: Subscribe me

pt:
  description: Nutrir uma comunidade enraizada na floresta | Norte de Portugal
  learnmore: Conhecer mais
  subscribeme: Inscrever-me
</i18n>

<script>
import 'video.js/dist/video-js.css'
const VideojsPromise = import('video.js')

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      player: null,
      options: {
        autoplay: 'muted'
      }
    }
  },
  mounted () {
    VideojsPromise.then((module) => {
      this.player = module.default(this.$refs.videoPlayer, this.options, function onPlayerReady () {
        console.log('onPlayerReady', this)
      })
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/colors.scss';

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

.landing {
  display: flex;
  flex: 1;
  flex-direction: column;
  color: white;
  align-items: center;
}

a, a:active, a:hover, a:visited {
  color: $orange;
  text-decoration: none;
}

a:active, a:hover {
  color: $light-green;
}

.logo {
    min-width: 60vw;
    max-width: 80vw;
}

@media only screen and (min-width: 500px) {
  .header {
    font-size: 200%;
    max-width: 60vw;

  }

  .logo {
    height: 72pt;
  }
}

.header {
  flex: 1;

  > p {
    background-color: rgba(black, 0.3);
    border-radius: 24pt;
    padding: 1em;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;

  > * {
    margin: 0.2em;
  }
}

.background-video, .background-video > video {
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  overflow: hidden;
  z-index: -1;
  background-color: $medium-green;
}
</style>

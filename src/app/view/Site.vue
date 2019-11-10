<script>
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export default {
  name: 'Site',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<template lang="pug">
  div#app
    a.skip(href='#content') Skip to content
    site-header
    div.site-content
      a#content
      //router-view
    site-footer
</template>

<style lang="stylus">
  .skip
    position: absolute
    left: -10000px;
    text-align: center
    width: 100%
  .skip:focus, .skip:active
    left: auto
</style>
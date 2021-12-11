<template>
  <div id="app relative">
    <Header class="sticky top-0 z-20"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
     Footer,
  }
}
</script>

<style>
*{
  margin: 0px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
}
</style>

<script >
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import home from './components/Home.vue';

export default{
  name: 'App',
  components: {
  Home : home,
  }
}
</script>

<template>
  <header>

    <home>
      <RouterView></RouterView>
    </home>

  </header>
  
</template>

<style scoped>


</style>


<template>
  <img alt="Vue logo" :src="url">
  <HelloWorld msg="Ура! Вы создали приложение для Твой ФФ!"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    url: `${process.env.VUE_APP_CDN}/app/logo/logo_ff.svg`
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
  
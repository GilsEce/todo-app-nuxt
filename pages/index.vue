<template>
  <div>
      <h1 class="title">My Sample Nuxt</h1>
      <nuxt-link to="/tasks"><li>tasks</li></nuxt-link>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
<style>

.title{
  color: gray;
  font: 800;
  text-align: center;
  font-size: 30px;
}
li{
  text-align: center;
  color: blue;
}


</style>

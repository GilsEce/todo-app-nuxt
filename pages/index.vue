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
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

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

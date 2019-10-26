<template>
  <div class="container">
    <h1>Vue文档精粹</h1>
    <ul>
      <li><router-link to="/examples/1">Computed Caching vs Methods,Watch</router-link></li>
      <li><router-link to="/examples/2">watch's immediate option</router-link></li>
      <li><router-link to="/examples/3">Automatic Global Registration of Base Components</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
<style lang="scss" scoped>
div.container {
  width: 960px;
  margin: 0 auto;
}
</style>

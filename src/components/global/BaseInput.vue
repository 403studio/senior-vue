<template>
  <div>
    <label>{{ label }}:</label><input type="text">
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String
    }
  }
}
</script>

<style>

</style>

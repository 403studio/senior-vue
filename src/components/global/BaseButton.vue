<template>
  <div>
    <button>{{ label }}</button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String
    }
  }
}
</script>

<style>

</style>

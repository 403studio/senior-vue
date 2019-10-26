<template>
  <div>
    <h1>watch's immediate option</h1>
    <div class="block">
      <button @click="changeValue()">Change value</button>
    </div>
    <div class="block">
      <h2>Watch</h2>
      <ul>
        <li><label>Watch's value</label>: {{ watchVal }}</li>
        <li><label>Watch's value</label>: {{ watchVal }}</li>
        <li><label>Watch's value</label>: {{ watchVal }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1,
      watchVal: 0
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function (val) {
        console.log('watch emitted')
        this.watchVal = val + 1
      }
    }
  },
  computed: {
    computedValue () {
      console.log('computed emmited')
      return this.value + 1
    }
  },
  methods: {
    methodValue () {
      console.log('method emmited')
      return this.value + 1
    },
    changeValue () {
      this.value = 2
    }
  }
}
</script>

<style style="scss" scoped>
h1 {
  color: #42b983;
}
</style>

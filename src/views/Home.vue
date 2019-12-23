<template>
  <div>
    <h1>Hola pandoro</h1>
    <h2>La hora es: {{time}}</h2>
    <h3>La fecha es: {{date}}</h3>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  data: () => ({
    time: format(new Date(), 'HH:mm:ss'),
    timeInterval: null,
    date: format(new Date(), 'dd/MM/yy'),
  }),
  methods: {
    getTime () {
      return format(new Date(), 'HH:mm:ss')
    }
  },
  created () {
    this.timeInterval = setInterval(() => {
      this.time = this.getTime()
    }, 1000)
  },
  destroyed () {
    clearInterval(this.timeInterval)
  }
}
</script>
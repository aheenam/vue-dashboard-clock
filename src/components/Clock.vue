<template>
  <div class="clock">
    <div class="date">
      {{ dateTime.format('ddd MM/DD') }}
    </div>
    <div class="time">
      {{ dateTime.format('HH:mm:ss') }}
    </div>
    <div class="timezone">
      {{ timezone.replace('_', ' ').replace('/', ' / ') }}
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  name: 'aheenam-dashboard-clock',
  props: {
    timezone: {
      type: String,
      default: 'Europe/Berlin'
    }
  },
  data () {
    return {
      dateTime: moment().tz(this.timezone)
    }
  },
  created () {
    this.dateTime = moment.tz(this.timezone)
    this.tick()
  },
  methods: {
    tick () {
      setInterval(() => {
        this.dateTime = moment().tz(this.timezone)
      }, 1000)
    }
  }
}
</script>

<style>
.clock {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100%;
}

.timezone {
  display: block;
  font-size: 0.5em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-top: 3em;
}

.date {
  font-size: 1em;
  font-family: monospace;
  text-transform: uppercase;
  margin-bottom: 0.5em;
}

.time {
  font-size: 2em;
  font-family: monospace;
}
</style>

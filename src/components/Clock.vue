<template>
  <div class="clock">
    <div class="date">
      {{ formattedDate }}
    </div>
    <div class="time">
      {{ formattedTime }}
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
    },
    dateFormat: {
      type: String,
      default: 'ddd MM/DD'
    },
    timeFormat: {
      type: String,
      default: 'HH:mm:ss'
    }
  },
  data() {
    return {
      dateTime: moment().tz(this.timezone)
    }
  },
  computed: {
    formattedDate () {
      return this.dateTime.format(this.dateFormat)
    },
    formattedTime () {
      return this.dateTime.format(this.timeFormat)
    }
  },
  created() {
    this.dateTime = moment.tz(this.timezone)
    this.tick()
  },
  methods: {
    tick() {
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

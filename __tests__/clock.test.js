
import { Clock } from '../src/index'
import Vue from 'vue'
import lolex from 'lolex'

describe('dashboard-test', () => {

  let Constructor = Vue.extend(Clock)
  let clock = null

  beforeEach(() => {
    clock = lolex.install({
      now: new Date('2018-01-01 12:00:00')
    })
  })

  it('should match the snapshot', () => {
    let vm = new Constructor().$mount()
    expect(vm.$el).toMatchSnapshot()
  });

  it('should use timestamp if set', () => {

    let vm = new Constructor({
      propsData: {
        timezone: 'AMERICA/LOS_ANGELES'
      }
    }).$mount()

    expect(vm.timezone).toEqual('AMERICA/LOS_ANGELES')
    expect(vm.dateTime.format('HH:mm:ss')).toEqual('03:00:00')

  })

  it('should run time', async () => {

      let vm = new Constructor({
          propsData: {
              timezone: 'AMERICA/LOS_ANGELES'
          }
      }).$mount()

      clock.tick(1000)
      await Vue.nextTick()

      expect(vm.timezone).toEqual('AMERICA/LOS_ANGELES')
      expect(vm.dateTime.format('HH:mm:ss')).toEqual('03:00:01')

  })

})

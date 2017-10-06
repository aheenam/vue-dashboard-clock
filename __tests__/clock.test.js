
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

  it('should use timestamp if set', () => {

    let vm = createVm({
      timezone: 'AMERICA/LOS_ANGELES'
    })

    expect(vm.timezone).toEqual('AMERICA/LOS_ANGELES')
    expect(vm.dateTime.format('HH:mm:ss')).toEqual('03:00:00')

  })

  it('should run time', async () => {

    let vm = createVm({
      timezone: 'AMERICA/LOS_ANGELES'
    })

    clock.tick(1000)
    await Vue.nextTick()

    expect(vm.timezone).toEqual('AMERICA/LOS_ANGELES')
    expect(vm.dateTime.format('HH:mm:ss')).toEqual('03:00:01')

  })

  it('can render formatted date by props', () => {

    let vm = createVm({
      dateFormat: 'DD/MM/YYYY'
    })

    expect(vm.formattedDate).toEqual('01/01/2018')
    expect(vm.$el).toMatchSnapshot()

  })

  it('can render formatted time by props', () => {

    let vm = createVm({
      timeFormat: 'HH:mm'
    })

    expect(vm.formattedTime).toEqual('12:00')
    expect(vm.$el).toMatchSnapshot()

  })

  function createVm(propsData = {}) {

    return new Constructor({
      propsData: propsData
    }).$mount()

  }

})

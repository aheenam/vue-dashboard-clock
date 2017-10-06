
import { Clock } from '../src/index'
import Vue from 'vue'
import MockDate from 'mockdate'

jest.useFakeTimers();

describe('dashboard-test', () => {

    let Constructor = Vue.extend(Clock);

    it('should match the snapshot', () => {
        MockDate.set('1/1/2018 12:00');

        let vm = new Constructor().$mount()
        expect(vm.$el).toMatchSnapshot()
    });

    it('should use timestamp if set', () => {
        MockDate.set('1/1/2018 12:00:00');

        let vm = new Constructor({
            propsData: {
                timezone: 'AMERICA/LOS_ANGELES'
            }
        }).$mount()

        expect(vm.timezone).toEqual('AMERICA/LOS_ANGELES')
        expect(vm.dateTime.format('HH:mm:ss')).toEqual('03:00:00')

    })

    // it('should run time', async () => {
    //     MockDate.set('1/1/2018 12:00:00');

    //     let vm = new Constructor({
    //         propsData: {
    //             timezone: 'AMERICA/LOS_ANGELES'
    //         }
    //     }).$mount()

    //     expect(typeof vm.created).toBe('function')

    //     jest.runTimersToTime(1000);
    //     await Vue.nextTick()

    //     expect(vm.timezone).toEqual('AMERICA/LOS_ANGELES')
    //     expect(vm.dateTime.format('HH:mm:ss')).toEqual('03:00:01')

    // })

    afterEach (() => {
        MockDate.reset()
    })

})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

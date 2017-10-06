import Clock from './components/Clock';

export default {
    install (Vue) {
        Vue.component('clock', Clock);
    }
}

export { Clock };

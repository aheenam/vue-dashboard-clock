**Not finished yet. Do not use in production**

A Vue component that display the current time
===
This package provides a simple Vue component that renders the current date and time of a given timezone.

This package is meant to be used for the [Aheenam Dashboard](https://github.com/Aheenam/vue-dashboard) but you can use this package for your project as well.

Installation
---

Simply add this package using npm/yarn

```bash
# using yarn
yarn add aheenam-dashboard-clock

# using npm
npm i -S aheenam-dashboard-clock
```

Usage
---

This package includes one component `Clock`. You can import it in your application and the add it to the list of components. Now you can use it in your template.

```html
<template>
  <div>
    <clock />
  </div>
</template>

<script>
import { Clock } from 'aheenam-dashboard-clock'

export default {
  // ...
  components: {
    Clock
  }
  // ...
}
</script>
```

### Timezone

By default the component uses `Europe/Berlin` as its timezone. You can change this by providing a `timezone` prop.

```html
<clock timezone="AMERICA/LOS_ANGELES" />
```

### Format Output of Date and Time

You can modify the output of the time and the date by providing the props `dateFormat` and `timeFormat`

By default `dateFormat` is `ddd MM/DD` and `timeFormat` defaults to `HH:mm:ss`

```html
<clock timeFormat="HH:mm" dateFormat="DD.MM.YYYY" />
```

As this packages uses moment.js for handling time and dates, refer to [its documentation](https://momentjs.com/docs/#/displaying/format/) for more details on format values.

Changelog
---
Check [CHANGELOG](CHANGELOG.md) for the changelog

Testing
---
To run tests use

```bash
yarn test
```
    
Contributing
---
*soon*

Security
---
If you discover any security related issues, please email rathes@aheenam.com or use the issue tracker of GitHub.

About Aheenam
---
Aheenam is a small company from NRW, Germany creating custom digital solutions. Visit 
[our website](https://aheenam.com) to find out more about us.

License
---
The MIT License (MIT). Please see [License File](https://github.com/Aheenam/laravel-translatable/blob/master/LICENSE) for more information.


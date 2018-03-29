# Unit Parse 

[![Build Status](https://travis-ci.org/centagon/unit-parse.svg?branch=master)](https://travis-ci.org/centagon/unit-parse)

Given an value, `unit-parse` will be able to parse the following units:
- rem, em, %, px
- vh, vw, vmin, vmax
- cm, mm, in, pt, pc, ch, ex
- s

```js
const parseUnit = require('unit-parse');

console.log(parseUnit('20px')); // { value: '20', unit: 'px' }
console.log(parseUnit('15%')); // { value: '15', unit: '%' }
console.log(parseUnit('-1.5s')); // { value: '-1.5', unit: 's' }
```

## Contributing

Have a bug? Please create an issue here on GitHub that conforms with
[our contributing guidelines](https://github.com/centagon/guidelines/blob/master/contributing.md).
You can also browse the [Help Wanted](https://github.com/centagon/primer/labels/help%20wanted)
tag in our issue tracker to find things to do.

## Security

If you discover a security vulnerability within this package, please send an e-mail directly to the Centagon
Developers at [developers@centagon.com](mailto:developers@centagon.com). All security vulnerabilities will be
promptly addressed.

## License

This package is available under the [MIT license](https://github.com/centagon/unit-parse/blob/master/LICENSE.md).

Copyright (c) 2018 Centagon, B.V.

'use strict';

import Person from './person';
import Greeter from './greeter';

let p = new Person({ name: 'Sent1nel' });
console.log(Greeter.greet(p));
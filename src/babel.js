import { random } from 'lodash';

async function start() {
  return await Promise.resolve('async is working');
}
const unused = 42;
start().then((res) => console.log('res', res));

class Util {
  static id = Date.now();
}

console.log('util id', Util.id);
console.log('unused', unused);

console.log('lodash1', random(0, 42, true));

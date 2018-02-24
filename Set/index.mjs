import Set from './Set';

const set = new Set();
set.add(1);
console.log(set.values); // ["1"]
console.log(set.has(1)); // true
console.log(set.size); // 1
set.add(2);
console.log(set.values); // ["1", "2"]
console.log(set.has(2)); // true
console.log(set.size); // 2
set.remove(1);
console.log(set.values); // ["2"]
set.remove(2);
console.log(set.values); // []

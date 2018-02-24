import HashTable from './HashTable';

const hash = new HashTable();
hash.put('Surmon', 'surmon.me@email.com'); // 19 - Surmon
hash.put('John', 'johnsnow@email.com'); // 29 - John
hash.put('Tyrion', 'tyrion@email.com'); // 16 - Tyrion

// 测试get方法
console.log(hash.get('Surmon')); // surmon.me@email.com
console.log(hash.get('Loiane')); // undefined
console.log(hash);

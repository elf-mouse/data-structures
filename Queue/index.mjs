import Queue from './Queue';

const queue = new Queue();
console.log(queue.isEmpty); // true

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');
console.log(queue.size); // 3
console.log(queue.isEmpty); // false
queue.dequeue();
queue.dequeue();
queue.print(); // 'Camila'

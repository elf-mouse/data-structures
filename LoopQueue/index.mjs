import LoopQueue from './LoopQueue';

const loopQueue = new LoopQueue(['Surmon']);
loopQueue.enqueue('SkyRover');
loopQueue.enqueue('Even');
loopQueue.enqueue('Alice');
console.log(loopQueue.size, loopQueue.isEmpty); // 4 false

console.log(loopQueue.find(26)); // 'Evan'
console.log(loopQueue.find(87651)); // 'Alice'

import PriorityQueue from './PriorityQueue';

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('Jack', 1);
priorityQueue.enqueue('Camila', 1);
priorityQueue.enqueue('Surmon', 3);
priorityQueue.enqueue('skyRover', 2);
priorityQueue.enqueue('司马萌', 1);
priorityQueue.print();

console.log(priorityQueue.isEmpty, priorityQueue.size); // false 6

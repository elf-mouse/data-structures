// node --experimental-modules index.mjs
import Stack from './Stack';

// 实例化一个栈
const stack = new Stack();
console.log(stack.isEmpty); // true

// 添加元素
stack.push(5);
stack.push(8);

// 读取属性再添加
console.log(stack.peek); // 8
stack.push(11);
console.log(stack.size); // 3
console.log(stack.isEmpty); // false

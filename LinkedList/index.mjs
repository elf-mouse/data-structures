import LinkedList from './LinkedList';

const linkedList = new LinkedList();

console.log(linkedList);
linkedList.append(2);
linkedList.append(6);
linkedList.append(24);
linkedList.append(152);

linkedList.insert(3, 18);
console.log(linkedList);
console.log(linkedList.findIndex(24));

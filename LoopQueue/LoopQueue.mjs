import Queue from '../Queue/Queue';

class LoopQueue extends Queue {
  constructor(items) {
    super(items);
  }

  getIndex(index) {
    const length = this.items.length;
    return index > length ? index % length : index;
  }

  find(index) {
    return !this.isEmpty ? this.items[this.getIndex(index)] : null;
  }
}

export default LoopQueue;

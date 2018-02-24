// 线性探查
class HashTable {
  constructor() {
    this.table = [];
  }

  // 散列函数
  static loseloseHashCode(key) {
    let hash = 0;
    for (let codePoint of key) {
      hash += codePoint.charCodeAt();
    }
    return hash % 37;
  }

  put(key, value) {
    const position = HashTable.loseloseHashCode(key);
    if (this.table[position] === undefined) {
      this.table[position] = { key, value };
    } else {
      let index = ++position;
      while (this.table[index] !== undefined) {
        index++;
      }
      this.table[index] = { key, value };
    }
  }

  get(key) {
    const position = HashTable.loseloseHashCode(key);
    const getElementValue = index => {
      if (this.table[index] === undefined) return undefined;
      if (Object.is(this.table[index].key, key)) {
        return this.table[index].value;
      } else {
        return getElementValue(index + 1);
      }
    };
    return getElementValue(position);
  }

  remove(key) {
    const position = HashTable.loseloseHashCode(key);
    const removeElementValue = index => {
      if (this.table[index] === undefined) return false;
      if (Object.is(this.table[index].key, key)) {
        this.table[index] = undefined;
        return true;
      } else {
        return removeElementValue(index + 1);
      }
    };
    return removeElementValue(position);
  }
}

export default HashTable;

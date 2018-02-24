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

  // 修改和增加元素
  put(key, value) {
    const position = HashTable.loseloseHashCode(key);
    console.log(`${position} - ${key}`);
    this.table[position] = value;
  }

  get(key) {
    return this.table[HashTable.loseloseHashCode(key)];
  }

  remove(key) {
    this.table[HashTable.loseloseHashCode(key)] = undefined;
  }
}

export default HashTable;

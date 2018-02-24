import Dictionary from '../Dictionary/Dictionary';

class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  // 添加顶点
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  // 添加线
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  toString() {
    return this.vertices.reduce((r, v, i) => {
      return this.adjList.get(v).reduce((r, w, i) => {
        return r + `${w} `;
      }, `${r}\n${v} => `);
    }, '');
  }
}

export default Graph;

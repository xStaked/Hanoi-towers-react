class Node {
  constructor(value) {
    this.id = `Tile-${value}`;
    this.value = value;
    this.width = 2 * value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;    
    this.size = 0;
  }

  push(value) {    
    const newNode = new Node(value);
    if (!this.top) {
      // cuando la fila esta vacía
      this.top = newNode;
      this.next = newNode;
    } else {
      // cuando la fila tiene elementos
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
    return this;   
  }
  
  peek() {
    // if(!this.top){
    //   return null
    // }
    //   return this.top.value
    return this.top;
  }

  pop() {
    //1. Cuando no nos queden elementos en nuestra estructura de datos
    if (this.length === 0) {
      return null;
    }
    //2. Cuando tengamos elementos en nuestra estructura de datos
    const topNode = this.top;
    this.top = this.top.next;
    this.length--;
    return topNode;
  }

  traverse() {    
    let list = [];
    let currentNode = this.top;
    while (currentNode) {
      list.push(currentNode);
      currentNode = currentNode.next;
    }
    return list;
  }
}

export default Stack;

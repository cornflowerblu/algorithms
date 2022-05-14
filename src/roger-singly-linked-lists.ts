class MyNode {
  val: unknown
  next: unknown
  constructor(val: unknown) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  length: number
  head: null | MyNode
  tail: null | MyNode
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val: unknown) {
    const newNode = new MyNode(val)

    if (!this.tail) return false

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }
  traverse() {
    let current: any = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
}

// let list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("BYEEE");
// list.push("!");

// console.log(list);

class Node {
  constructor(
    public data: number,
    public prev?: Node | null,
    public next?: Node | null
  ) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

class DoubleLinkedList {
  constructor(
    public head: Node | null,
    public tail: Node | null,
    public length: number
  ) {
    this.head = head
    this.tail = tail
    this.length = length
  }
}

let n1 = new Node(13)
let n2 = new Node(15)
let n3 = new Node(21)

n1.next = n2
n2.prev = n1
n2.next = n3
n3.prev = n2

let l1 = new DoubleLinkedList(n1, n3, 3)

export {}

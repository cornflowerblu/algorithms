class ListNode<T> {
  data: T
  next: ListNode<T> | null = null

  constructor(data: T) {
    this.data = data
  }
}

class LinkedList<T> {
  head: ListNode<T> | null
  tail: ListNode<T> | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  prepend(data: T): void {
    const node = new ListNode(data)
    if (!this.head) {
      this.head = new ListNode(data)
    } else {
      node.next = this.head
    }
    this.head = node
  }

  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return currentHead
  }

  push(data: T) {
    const node: ListNode<T> = new ListNode(data)

    if (!this.head) {
      this.head = node
      this.tail = this.head
    } else {
      if (!this.tail) return
      this.tail.next = node
      this.tail = node
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return

    let current = this.head
    let newTail = current

    if (current) {
      while (current.next) {
        newTail = current
        current = current.next
      }

      this.tail = current
      this.tail.next = null
      this.length--
      return current
    }
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let lastNode = this.head
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  clear() {
    this.head = null
  }
}

let listOne = new LinkedList()
listOne.push(5)
listOne.push(10)
listOne.push(23423)

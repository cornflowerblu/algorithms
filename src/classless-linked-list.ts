class ListNode<T> {
  data: T
  next: ListNode<T> | null = null

  constructor(data: T) {
    this.data = data
  }
}

class LinkedList<T> {
  head: ListNode<T> | null

  constructor(head = null) {
    this.head = head
  }

  append(data: T): void {
    if (!this.head) {
      this.head = new ListNode(data)
    } else {
      let current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = new ListNode(data)
    }
  }
}

let myList = new LinkedList()
myList.append(5)
myList.append(23423432)

console.log(myList)

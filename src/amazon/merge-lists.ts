class ListNode {
  data: number
  next: ListNode | null
  constructor(data: number, next?: ListNode | null) {
    this.data = data
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) return l2

  if (l2 === null) return l1

  if (l1.data < l2.data) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

let n3 = new ListNode(45)
let n2 = new ListNode(22, n3)
let n1 = new ListNode(17, n2)

let m3 = new ListNode(59)
let m2 = new ListNode(33, m3)
let m1 = new ListNode(2, m2)

mergeTwoLists(n1, m1)

export {}

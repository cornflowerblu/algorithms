class NewNode {
  data: unknown
  next: any | null

  constructor(data: unknown, next: unknown) {
    this.data = data
    this.next = next
  }
}

function mergeList(L1: any, L2: any) {
  // create new linked list pointer
  let L3 = new NewNode(null, null)
  let current = L3

  // while both linked lists are not empty
  while (L1 !== null && L2 !== null) {
    if (L1.data <= L2.data) {
      current.next = L1
      L1 = L1.next
    } else {
      current.next = L2
      L2 = L2.next
    }
    current = current.next
  }

  // once we reach end of a linked list, append the other
  // list because we know it is already sorted
  if (L1 === null) {
    current.next = L2
  }
  if (L2 === null) {
    current.next = L1
  }

  // return the sorted linked list
  return L3.next
}

// create first linked list: 1 -> 3 -> 10
let n3 = new NewNode(10, null)
let n2 = new NewNode(3, n3)
let n1 = new NewNode(1, n2)
let L1 = n1

// create second linked list: 5 -> 6 -> 9
let n6 = new NewNode(9, null)
let n5 = new NewNode(6, n6)
let n4 = new NewNode(5, n5)
let L2 = n4

mergeList(L1, L2)

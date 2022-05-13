class Student {
  firstName: string;
  lastName: string;
  year: number;
  tardies: number;
  constructor(firstName: string, lastName: string, year: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
  }

  fullname() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    return `${this.firstName} has been late ${this.tardies} times`;
  }
}

let firstStudent = new Student("Peyton", "Manning", 2022);

console.log(firstStudent.markLate());

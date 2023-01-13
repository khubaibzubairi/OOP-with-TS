class Person {
  name: string;
  age: number;
  gender: string;

  walk(): string {
    return this.name + " walks";
  }
}

class Student extends Person {
  course: string;
  marks: number;

  constructor(c: string, m: number) {
    super();
    this.course = c;
    this.marks = m;
  }

  walk(): string {
    // return this.name + " has " + this.marks + " marks and walks!!!!";
    return "";
  }
}

// var s2 = new Person();
// var s3: Person = new Student("oop", 200);

// console.log(s3.walk());

let p1 = new Person();

p1.name = "Nouman";
console.log(p1);

var s1: Person = new Student("OOP", 100);

// s1.name = "khubaib";

console.log(typeof s1.walk());

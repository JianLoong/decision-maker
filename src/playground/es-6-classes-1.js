// Classes to reuse codes.
// It is common to have upperCase
class Person {
  constructor(name = "Anonymous", age = "0") {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}`;
  }

  getDescription() {
    return `'Hi, I am ${this.name}. I am ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, major);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
}

const me = new Student("Jian Liew", 25, "Potato");

const other = new Person();

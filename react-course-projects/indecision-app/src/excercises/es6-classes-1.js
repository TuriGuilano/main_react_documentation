class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  // function body
  getGreeting() {
    return `Hi, I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    // first run the parent's constructor -> Person
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    console.log('..', this.name);
    
    //gives us the return result back from the parents getDescription!
    let description = super.getDescription(this.name, this.age);

    if(this.hasMajor()) {
      description += ``;
    }
  }
}

const me = new Student('Janus', 27, 'Information Studies');
console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());



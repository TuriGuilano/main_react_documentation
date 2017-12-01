# main_react_documentation

## Indecision Application

To run your server, install the live-server module. Lateron we will be using express for a production server. With live-server you can serve up your public directory so: live-server public  It takes the .html file from the public directory automatically.

### Run babel

install babel:
  yarn global add babel-cli@6.24.1

we also need react and env as presets to live in our project so babel cli can use it and can take advantage of it.

```
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
```

start with specifying the path to our code, the code we want to compile, this lives in our src/app.js. Next up we specify the output file in the public scripts folder.
After we have to define our presets that we want to use. react and env

```
babel src/app.js --out-file=public/scripts/app.js --presets=env, react --watch
```

### JSX 

Undefined, null and booleans are ignored by JSX.

### Visibility toggle

See src/excercise/visibility.js 

### es6 classes

We can pass argument default values, if no param is being passed we can set
param equal to a string anonymous. We can also extend a class from an excisting class, this way we inherit all the functionalities and we can also overwrite functionalities if they are missing. 

```
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
    return 'testing';
  }
}

const me = new Student('Janus', 27, 'Information Studies');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
```
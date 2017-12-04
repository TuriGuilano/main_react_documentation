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


### Sending input values from the form to the method

We have to add a handler on the submit of the form and give the input field
a name which we will call inside the method with the event method, see example:

```
class addListItem extends Component {
  addItem(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim;
    if(option) {
      console.log(option);
    }
  }

  render() {
    return (
      <form onSubmit={this.addItem}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    )
  }
}
```

To be efficient in binding functions to the components props we can call the constructor method which is a method that takes props as a param. We have to call props when we overwrite the props. Inside the constructor we call super, again with the props as param. After, inside the constructor we bind all the methods that need to have access to the props, eg:

```
constructor(props) {
  super(props);
  // by binding the addItem method we have now access to all the props.
  this.addItem = this.addItem.bind(this);
}
```

### React State

Component state allows our component to manage data and automatically re-render the component. The component is rendered with the component's state default values.
Our component's state is just a simple object. We can update our component's state by events, fetch API e.g or click functions.

### Passing functions to children

In react you can pass functions to children by passing them as props, e.g:

```
class Parent extends Component {
  functionOne() {
    console.log('im the first function thats being passed down');
  }

  render() {
    return (
      <div>
        <ChildComponent >
      </div>
    )
  }
}

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.functionOne}>Click Me</button>
      </div>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById('app));
```
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

### Passing data upstream

To pass data upstream we need to call the parent its function with the data we from the child component, we can do so by:

```
class Parent extends Component {
  constructor(props) {
    super(props);
    this.getChildData = this.getChildDate.bind(this);
  }

  getChildData(option) {
    console.log('im being called', option);
  }

  render() {
    return (
      <div>
        <ChildComponent getChildData={this.getChildData} />
      </div>
    )
  }
}

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.getChildData this.getChildData.bind(this);
  }

  getChildData(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    
    if(option) {
      this.props.getChildData(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.getChildData}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

```

### Props vs State

Props: 
- An object
- Can be used when rendering
- Changes (from above) cause re-renders
- Comes from above
- Can't be changed by component itself

State:
- An object
- Can be used when rendering
- Changes cause re-renders
- Defined in component itself
- Can be changed by component itself


### Stateless functional components

Alternative to our class based components. Stateless functinal components are pure for presentational purposes.

Advantages:
- SFC are faster, dont come with all the overhead and bage of our class based components
- easy to write
- easy to test

You can access props via a SFC by passing them down inside the component (when its called):

```
const user = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

ReactDOM.render(<User name="Janno" age={27} />, document.getElementById('app));
```

### Default prop values

Default props is an Object which refers to default props when none are given. 
eg:

```
class MainStatefullComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
    }
  }

  render() {
    const { options } = this.state;
    return (
      <div>
        {options && options.map(key => {
          return <span>{key}</span>;
        })}
      </div>
    );
  }
}

const MyComponent = (props) {
  return (
    <div>
      <h1>{props.title}</h1>
      //conditional rendering, only show prop when provided
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

MyComponent.defaultProps = {
  title: 'some default title',
  options: [],
}

MainStateFullComponent.defaultProps = {
  options: ['example one', 'example two']
}

ReactDOM.render(<MainStatefullComponent />, document.getElementById('app));
``` 


### arrow function side note

If we want to implicit return an object inside an array we have to wrap the object inside parantheses, otherwise the arrow function will treat the brackets as the function body, eg:
```
const check = () => ({});
```

### Lifecycle methods

Class based components have acces to lifecycle methods.
Exaples of lifecycle methods are:
- componentDidMount
  will fire after mounting
- componentDidUpdate(prevProps, prevState)
  will fire after state or prop values change.
- componentWillUnmount()
  allow us to add functionality when a component unmounts

### Saving and loading data

Localstorage only works with string data. JSON is a string representation of a javascript object or an array. 
JSON.stringify takes a regular javascript object and get the string representation
JSON.parse takes the string representation and return a true javascript object.

we can call the following functions:
```
// this will add a key value pair to our local storage
- localStorage.setItem('options', 'test');
// here we can call the item that we just placed
- localStorage.getItem('options');
// here we can clear our localstorage
- localStorage.clear();
```

When we want to get a number from our localStorage we need to use the parseInt function on it, otherwise our code will break. e.g:
```
const num = '12';
// this will convert to 12. We take the num var and our base (base 10 system).
parseInt(num, 10); 
// if num were to be a character instead of a number we could use isNaN(num) on it
console.log(isNaN(num));
```

### WebPack

Allows you to organize our javascript. When we run our app through webpack we will get a single file back, this is called our bundle. Is containing everything our app needs to run, code and dependencies!

For example, if we have all our script files in our index.html it will take a long time for our app to run. Webpack allows us to make a single request for a single script file.

Gulp and grunt can also do this, the only thing is that webpack uses a unique way to do so:

Webpack is breaking up all of the files in our application into small islands, these island can then communicate using the es6 import / export methods. In other words, we can import other files, components or helper functions and use them inside the component that imported the file.

Webpack also allows us to grab react from the react npm module e.g

Since clientside javascript is getting more and more essentials to run our websites,
because of our client side javascript and thirth party javascripts tools as webpack are getting more and more popular. Since we are having dosens and dosens clientside files. Webpack makes it more managable!!!

> Try avoiding global modules

Disadvantages of global modules are:
- when someone wants to clone your project and help out, it might miss the dependencies since they were installed globally. So when the user npm or yarn install's it will not work since the global modules are missing.

- when we install a module globally but we want the module to be used in multiple projects, we might run into problems such as versions. In project A we need version 1.15 and in project B we need version 1.16. This causes for conflics.

- if you want to run a global module you need to run the script in the terminal every time you want to run it. Preferably we want to just run eg: babel scripts.

> installing & configuring webpack
Start by creating a webpack.config.js file in the root of your application. This is where webpack will be looking for the script. The file is actually a node script, so we have access to everything we would have access to inside a node.js application.

inside our webpack.config.js file we need to specify a couple of things to get it up and running. We need to specify an entry point, eg: src/app.js and the output file, eg: bundle.js

we do so by:

```
module.exports = {
  // relative path
  entry: './src/app.js,
  output: {
    // absolute path
    path: '',
    filename: 'bundle.js'
  }
};
```
The tricky part is that the path inside the output is an absolute path and is differend on each machine. So the path is from the root directory to this project. You can access the path by running the file (webpack.config.js), you do so via node by

Inside webpack.config:
```
console.log(__dirname);
```
Inside your terminal
```
node webpack.config.js
```
We also need to find the public folder since we want our build to me placed inside the public folder. We can do so by requiring the node module path and specify the public folder. eg:

```
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
```

Our webpack is now running. We removed all of the script tags inside our index.html and just load in the bundle.js that webpack creates for us. The bundle contains all the code needed to run our app. We can add --watch to our webpack script inside package.json so it listens for changes.



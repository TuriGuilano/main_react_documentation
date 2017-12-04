class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubstractOne = this.handleSubstractOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAddOne() {
    let add = this.state.count + 1;
    this.setState({count: add})
  }

  handleSubstractOne() {
    let substract = this.state.count - 1;
    this.setState({count: substract})
  }

  handleReset() {
    this.setState({count: 0});
  }

  render() {
    const { count } = this.state;
    
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleSubstractOne}>-1</button>
        <button onClick={this.handleReset}>Reset count</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
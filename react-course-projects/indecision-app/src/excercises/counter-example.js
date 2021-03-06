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

  componentDidMount() {
    try {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);

      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {
      // do nuttin!
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleSubstractOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
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
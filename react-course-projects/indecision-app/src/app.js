class IndecisisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      title: 'Indecision',
      subtitle: 'Choices bud..',
      options: ['One thing', 'Another thing', 'And yet another thing'],
    }
  };

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  handlePick() {
    console.log('--------', this.state.options.length);
    
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    console.log('randomnum', randomNum);
    
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const { title, subtitle, options } = this.state;

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
        <h1>{title}</h1>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map(option => {
            return <Option key={option} optionText={option} /> 
          })
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>

      </form>
    );
  }
}

ReactDOM.render(<IndecisisionApp />, document.getElementById('app'));

class Visibility extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false,
    }

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  };

  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility,
      }
    });
  }

  render() {
    const { visibility } = this.state;

    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {visibility ? 'hide details' : 'show details'}
        </button>
        {
          visibility && (
            <div>
              <p>
                This is the text that you can now see
              </p>
            </div>
          )
        }
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));
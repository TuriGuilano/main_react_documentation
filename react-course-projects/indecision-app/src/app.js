class Header extends React.Component {
  
  removeAll() {
    alert('remove all');
  }

  render() {
    return (
      <div>
        <button onClick={this.removeAll}>Remove all</button>
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim;

    if(option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  };
};

const jsx = (
  <div>
    <h1>title</h1>
    <Header />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));

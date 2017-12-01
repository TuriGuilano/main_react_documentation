// gets compiled and saved in public, scripts, app.js and gets rendered in index.html
let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>Display the text because we clicked on the show button</div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
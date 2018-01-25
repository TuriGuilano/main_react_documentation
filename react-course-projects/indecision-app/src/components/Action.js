import React from "react";

const Action = props => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      Kies een random Todo voor me
    </button>
  </div>
);

export default Action;

import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget--header">
      <h3 className="widget--header__title">Todolijst</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Verwijder alle todo's
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Je Todo lijst is leeg</p>
    )}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;

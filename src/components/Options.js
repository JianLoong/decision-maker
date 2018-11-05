import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <p>Number of options {props.options.length}</p>
    <button 
      className="button button--link"
      onClick={props.handleDeleteOptions}>Remove all</button>
    {props.options.length == 0 && <p>Please add an option to get started.</p>}
    <ol>
      {props.options.map(option => (
        <Option
          key={option}
          option={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ol>
  </div>
);

export default Options;

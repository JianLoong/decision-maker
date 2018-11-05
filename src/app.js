// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//Default props can be used to achieve more reusable components.
ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById("app"));

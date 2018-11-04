import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }

  //Lifecycle methods. Only in class based components
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
      //Fetching data
      console.log("Did mount");
    } catch (e) {
      // Do nothing if json data is invalid
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //Saving Data
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("Did Update");
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  handleAddOption(option) {
    //Validation
    if (!option) {
      return "Enter valid value to add item";
    }

    if (this.state.options.indexOf(option) > -1) {
      return "There option already";
    }

    //Notice how it is ( then {
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  }

  render() {
    const subtitle = "Put your life in the hands of the computer";

    return (
      <div>
        <Header title={this.props.title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

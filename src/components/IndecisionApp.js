import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    //alert(this.state.options[randomNum]);
    const option = this.state.options[randomNum];
    this.setState(prevState => ({
      //console.log(selectedOption);
      selectedOption: option
    }));
  };

  handleAddOption = option => {
    //Validation
    if (!option) {
      return "Enter valid value to add item";
    }

    if (this.state.options.indexOf(option) > -1) {
      return "The option already exist.";
    }

    //Notice how it is ( then {
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  };

  //Lifecycle methods. Only in class based components
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
      //Fetching data
    } catch (e) {
      // Do nothing if json data is invalid
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //Saving Data
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {}

  render() {
    const title = "Decision Making App";
    const subtitle = "Put your life in the hands of RNG";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
            <OptionModal
              selectedOption={this.state.selectedOption}
              handleClearSelectedOption={this.handleClearSelectedOption}
            />
          </div>
        </div>
      </div>
    );
  }
}

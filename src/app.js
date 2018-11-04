// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

// React components requires "render" method to be defined.
// ReactComponent has generally 3 rules
// Must be upperCase
// Must extends React Component
// Must have a render
class IndecisionApp extends React.Component {
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
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
    
        if (options) {    
          this.setState(() => ({ options }) )
        }
        //Fetching data
        console.log("Did mount");
    
      } catch (e)
      {
        // Do nothing if json data is invalid
      }    
  
    }
  
    componentDidUpdate(prevProps, prevState) {
      //Saving Data
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log("Did Update");
      }
    }
  
    componentWillUnmount(){
      console.log("Component will unmount");
    }
  
    handleDeleteOptions() {
      this.setState(() => ({ options: [] }));
    }
  
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => 
          optionToRemove !== option
        )
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
          <AddOptions handleAddOption={this.handleAddOption} />
        </div>
      );
    }
  }
  
  const Header = props => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    );
  };
  
  Header.defaultProps = {
    title: "Indecision"
  };
  
  IndecisionApp.defaultProps = {
    options: []
  };
  
  const Action = props => {
    return (
      <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}>
          What should I do?
        </button>
      </div>
    );
  };
  
  const Options = (props) => {
    return (
      <div>
        <p>Number of options {props.options.length}</p>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {props.options.length == 0 && <p>Please add an option to get started.</p>}
        <ol>
          {
            props.options.map(option => (
              <Option 
                key={option} 
                option={option}
                handleDeleteOption={props.handleDeleteOption} 
              />
            ))
          }
        </ol>
      </div>
    );
  };
  
  const Option = (props) => {
    return (
      <div>
      {props.option}
      <button onClick={(e) => {
        props.handleDeleteOption(props.option)
      }}>
       Delete
      </button>
      </div>
    )
  };
  
  class AddOptions extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
  
    handleAddOption(e) {
      e.preventDefault();
      const option = e.target.elements.option.value;
      const error = this.props.handleAddOption(option);
  
      this.setState(() => ({ error }));
  
      if (!error) {
        e.target.elements.option.value = "";
      }
    }
  
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button type="submit">Add Option</button>
          </form>
        </div>
      );
    }
  }
  
  //Stateless Functional Component
  
  const User = () => {
    return (
      <div>
        <p>Name: </p>
        <p>Age: </p>
      </div>
    );
  };
  
  //Default props can be used to achieve more reusable components.
  ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById("app"));
  
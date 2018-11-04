class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }))
    }
    console.log("Did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count != this.state.count) {
      //const json = JSON.stringify(this.state.count);
      localStorage.setItem("count", this.state.count);
      console.log("Did Update");
    }
  }

  componentWillUnmount() {

  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState( (prevState) => ({
      count: prevState.count - 1
    }));
  }

  handleReset() {
    //Calls to setState are async
    //ES6 notice that it is => ()
    this.setState( () => ({
      count: 0
    }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

//Always fall back to a default number
// Counter.defaultProps = {
//   count: 0
//}

ReactDOM.render(<Counter count={10}/>, document.getElementById("app"));
// let count = 0;
// //It must be className instead of class.
// //Inside JSX it becomes camelCase
// //JSX does not have built in data binding
// const addOne = () => {
//   console.log("addOne");
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
//   console.log("minusOne");
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log("reset");
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       {/* You can put an onClick function directly*/}
//       <button onClick={addOne} className="button">
//         +1
//       </button>
//       <button onClick={minusOne} className="button">
//         -1
//       </button>
//       <button onClick={reset} className="button">
//         Reset
//       </button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

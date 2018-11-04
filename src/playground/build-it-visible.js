class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleVisibilityToggle() {
    this.setState(prevState => {
      console.log(prevState.visibility);
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toogle</h1>
        <button onClick={this.handleVisibilityToggle}>
            {this.state.visibility? "Hide Details": "Show Details"}
        </button>
        {this.state.visibility && <div><p>Details are shown here.</p></div>}
      </div>
    );
  }
}

// const appRoot = document.getElementById("app");

// let app = false;

// const showDetails = () => {
//   console.log("Show Details selected");
//   app = !app;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toogle</h1>
//       <button onClick={showDetails}>
//         {app ? "Hide Details" : "Show Details"}
//       </button>
//       {app && <div>These are some details</div>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

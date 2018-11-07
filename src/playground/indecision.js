const app = {
  title: "My Indecision App",
  subtitle: "This is the subtitle",
  options: []
};

const removeAll = () => {
  app.options = [];
  renderTemplate();
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderTemplate();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

// JSX - JavaScript XML (JavaScript syntax extension)

const appRoot = document.getElementById("app");

const numbers = [1, 3, 4, 5, 6];

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? "Here are your options"
          : "No Options : "}
      </p>
      <button
        disabled={app.options.length === 0 ? true : false}
        onClick={onMakeDecision}
      >
        What should I do?
      </button>
      <p>{app.options.length}</p>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      {/*
        numbers.map((number) => {
          return <p key={number}>Number : {number}</p>
        })
      */}
      {/* onSubmit is a reference not method*/}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
        <button onClick={removeAll}>Remove all</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();

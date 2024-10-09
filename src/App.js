import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="body">
        <header className="contacts">
          <a>Github</a>
          <a>Email</a>
          <a>Linkedin</a>
        </header>
        <div className="main-content-container">
          <div>
            <h1>Front-end-developer</h1>
            <h2>HTML - CSS - Javascript - React</h2>
          </div>
          <div className="content-list">
            <h3>Find out more</h3>
            <ul>
              <li>About Me</li>
              <li>Skills</li>
              <li>Projects</li>
              <ul>
                <li>Project A</li>
                <li>Project B</li>
                <li>Project C</li>{" "}
              </ul>
            </ul>
          </div>
        </div>
        <footer>&copy; susanna2024</footer>
      </div>
    </div>
  );
}

export default App;

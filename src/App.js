import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">DICTIONARY APP</header>
        <main>
          <Dictionary defaultKeyword="sakura" />
        </main>
        <br />
        <br />
        <footer className="App-footer">
          <a
            href="https://github.com/ariel-land/dictionary-react-ariel"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Ariel Lee{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This Project was Coded by {""}
            <a
              href="https://serene-payne-47c9ff.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Motahare Shokri {""}
            </a>
            and is{" "}
            <a
              href="https://github.com/motishokri/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-Sourced On GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

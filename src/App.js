import "./App.css";
import Dictionary from "./Dictionary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="Footer">
          <span>
            Coded by{" "}
            <a
              href="https://github.com/motishokri/dictionary-project"
              rel="noreferrer"
              target="_blank"
            >
              Motahare Shokri
            </a>
          </span>
          <span>
            <a
              href="https://github.com/motishokri"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>

            <a
              href="https://www.linkedin.com/in/motahare-shokri/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <a
                href="mailto:motahare.shokri99@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://www.instagram.com/motishokri/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}

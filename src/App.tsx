import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LandingPage></LandingPage>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

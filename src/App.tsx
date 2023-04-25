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
      <header className="App-header">
        <LandingPage></LandingPage>
      </header>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;

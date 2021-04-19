import "./App.css";
import Header from "components/Header/Header";
import Cover from "./components/Cover/Cover";
import Statistics from "./components/Statistics/Statistics";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "components/Skills/Skills";

export default function App() {
  return (
    <div>
      <div className="root-container">
        <Header />
        <Cover />
        <Statistics />
        <About />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

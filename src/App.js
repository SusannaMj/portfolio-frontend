import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../src/Content/Home";
import About from "../src/Content/About";
import Skills from "../src/Content/Skills";
import ProjectA from "../src/Content/ProjectA";
import ProjectB from "../src/Content/ProjectB";
import ProjectC from "../src/Content/ProjectC";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="project1" element={<ProjectA />} />
          <Route path="project2" element={<ProjectB />} />
          <Route path="project3" element={<ProjectC />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

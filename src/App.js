import Navbar from "./components/navbar/Navbar";
import Courses from "./components/courses/Courses";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Section1 from "./components/section1/Section1";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Section1/>
    <Courses />
    
  </BrowserRouter>
    
  );
};

export default App;

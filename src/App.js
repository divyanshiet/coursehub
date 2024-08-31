import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import ApiState from "./context/ApiState";

const App = () => {
  return (
    <>
    
    <ApiState>
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/dashboard/*" Component={Dashboard}/>
    </Routes>
    </BrowserRouter>
    </ApiState>
    </>
    
  );
};

export default App;

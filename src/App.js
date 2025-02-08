import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";

const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" Component={Home}/>
    <Route path="/dashboard/*" Component={Dashboard}/>
    <Route path="/login" Component={Login}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
};

export default App;
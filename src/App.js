import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Search from "./components/Search";
import ContextProvider from "./Context";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;

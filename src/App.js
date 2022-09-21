import { Route, Routes } from "react-router-dom";
import { HomePage }from "./pages/home-page";
import { Header } from './components/header'


function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        
      </Routes>
    </div>
  );
}

export default App;

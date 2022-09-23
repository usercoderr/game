import { Route, Routes } from "react-router-dom";
import { HomePage }from "./pages/home-page";
import { Header } from './components/header'
import { Provider } from "react-redux";
import { store } from "./redux";


function App() {
  return (
    <Provider store={store}>

    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        
      </Routes>
    </div>
    </Provider>
  );
}

export default App;

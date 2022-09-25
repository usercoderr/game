import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { Header } from "./components/header";
import { Provider } from "react-redux";
import { store } from "./redux";
import { OrderPage } from "./pages/order-page";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/app/:title" element={<GamePage />} />
          <Route exact path="/order" element={<OrderPage/>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

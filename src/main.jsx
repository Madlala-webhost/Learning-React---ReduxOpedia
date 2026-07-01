import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DestinationList from "./components/DestinationList";
import DestinationFact from "./components/DestinationFact";
import ResetApp from "./components/ResetApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <div className="col-12 pt-4">
            <ResetApp />
            <Counter />
            <div className="p-4 m-4 border">
              <h4 className="text-success pb-4 text-center">
                Destination List
              </h4>
              <DestinationList />
              <DestinationFact />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Provider>
  </StrictMode>,
);

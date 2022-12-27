import "./App.css";
import Header from "./components/Header/Header";
import Routers from "./Routers";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
        <>
            <BrowserRouter>
                <Header/>
                <Routers/>
                <Footer/>
            </BrowserRouter>
        </>
  )
}

export default App;

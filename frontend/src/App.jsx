import { useState } from "react";
import HomePage from "./components/landing-page/HomePage";
import SuccessPage from "./components/success-page/SuccessPage";
import Navbar from "./components/landing-page/Navbar";
import "./index.css";

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <div className="App">
            <Navbar />
            {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
            {currentPage === "success" && <SuccessPage setCurrentPage={setCurrentPage} />}
        </div>
    );
}

export default App;
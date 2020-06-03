import React from "react";
import "./App.css";
import Header from "./components/navbar/navbar";
import Main from "./components/body/main_content";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/">
                    <Header />
                    <Main />
                    <Footer />
                </Route>
            </Router>
        </div>
    );
}

export default App;

import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../css/App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <Main />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

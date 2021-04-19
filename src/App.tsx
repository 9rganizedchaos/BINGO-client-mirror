import React, { useState, useEffect } from "react";
import { BrowserRouter as Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import GuidePage from "./pages/GuidePage";
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import ContentPage from "./pages/ContentPage";
import MyPage from "./pages/MyPage";
import PayPage from "./pages/PayPage";
import TestPage from "./pages/TestPage";
import axios from "axios";
import store from "./store";

function App() {

  return (
    <div className='App'>
      <Switch>
        <Route path='/'>
          <GuidePage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/test'>
          <TestPage />
        </Route>
        <Route path='/list'>
          <ListPage />
        </Route>
        <Route path='/content'>
          <ContentPage />
        </Route>
        <Route path='/mypage'>
          <MyPage />
        </Route>
        <Route path='/pay'>
          <PayPage />
        </Route>
      </Switch>
      <script src="../src/main.js"></script>
    </div>
  );
}

export default App;

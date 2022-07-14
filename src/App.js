import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { RootReducer } from "./reducers";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import thunk from "redux-thunk";
import Search from './components/Search'
import Login from "./components/Login";
import PageNotFound from './components/PageNotFound'
import ErrorBoundary from './components/ErrorBoundary'
import './main.css'

import ImageList from "./components/ImageList";
const App=()=>{
    return (
        <ErrorBoundary >
    <Provider store={createStore(RootReducer,applyMiddleware(thunk))} >
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
 
        </Routes>
        </BrowserRouter>
        
    </Provider>
    </ErrorBoundary>
        
    )
}

export default App;
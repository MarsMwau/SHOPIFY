import React from "react";
import './App.css';
import NavBar from './NavBar';
import Home from "./Home"
import ProductList from "./ProductList";
import {Switch, Route} from "react-router-dom"
function App(){
    return(
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={ProductList} />
            </Switch>
        </div>
    );
}
export default App;
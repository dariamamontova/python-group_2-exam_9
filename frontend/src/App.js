import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import './App.css';
import {connect} from "react-redux";
import Layout from "./components/Layout/Layout"
import ProductList from "./containers/ProductList/ProductList"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path="/" component={ProductList}/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
        );
    }
}

export default App;

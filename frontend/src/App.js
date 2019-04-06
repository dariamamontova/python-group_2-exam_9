import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import './App.css';
import {connect} from "react-redux";
import Layout from "./components/Layout/Layout"
import ProductList from "./containers/ProductList/ProductList";
import ProductDetail from "./containers/ProductDetail/ProductDetail"
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import {tokenLogin} from "./store/actions/token-login";
import Basket from "./containers/Basket/Basket"

class App extends Component {

    componentDidMount() {
        this.props.tokenLogin();
    }

    render() {
        return (
            <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path="/basket" component={Basket}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/logout" component={Logout}/>
                            <Route path="/products/:id" component={ProductDetail}/>
                            <Route path="/" component={ProductList}/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
        );
    }
}

const mapStateToProps = state => state.app;
const mapDispatchToProps = dispatch => ({
    tokenLogin: () => dispatch(tokenLogin())
});



export default connect(mapStateToProps, mapDispatchToProps)(App);

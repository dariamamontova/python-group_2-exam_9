import React, {Component, Fragment} from 'react'
import MenuItem from "./MenuItem/MenuItem";
import {connect} from "react-redux";
import Layout from "../../Layout/Layout";


class Menu extends Component {
    state = {
        collapse: true
    };

    toggle = () => {
        this.setState({collapse: !this.state.collapse});
    };

    render() {
        const {username, is_admin, user_id} = this.props.auth;
        return <Fragment>
            <button onClick={this.toggle}
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={(this.state.collapse ? "collapse" : "") + " navbar-collapse"}
                 id="navbarNav">
                <ul className="navbar-nav">
                    <MenuItem to="/">Товары</MenuItem>
                    {user_id ?
                    <MenuItem to="/basket">Корзина</MenuItem> : null}
                </ul>
                <ul className="navbar-nav ml-auto">
                    {user_id ? [
                        <li><span className="navbar-text">Привет, {username}!</span></li>,
                        <MenuItem to="/logout" key="logout">Выйти</MenuItem>
                    ] : [
                        <MenuItem to="/login" key="login">Войти</MenuItem>,
                    ]}
                </ul>
            </div>
        </Fragment>
    }
}


const mapStateToProps = state => ({auth: state.auth});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

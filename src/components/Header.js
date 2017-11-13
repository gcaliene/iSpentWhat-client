import React from 'react';
import {NavLink} from 'react-router-dom';



class Header extends React.Component {
    render() {
        return(
            <header>
                <NavLink exact to='/' activeClassName='is-active'>
                    <h1>iSpentWhat</h1>
                </NavLink>
                <NavLink to='/dashboard/create' activeClassName='is-active'>Add expense </NavLink>
                <NavLink exact to='/dashboard' activeClassName='is-active'>Dashboard </NavLink>
            </header>
        )
    }
}

export default Header;


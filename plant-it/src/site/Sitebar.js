import React from 'react';
import { Nav, Navbar, NavLink, NavbarBrand } from 'reactstrap';
import Logout from '../components/logout/Logout.js';

const Sitebar = (props) => {
    return(
        <div>
            <Nav>
                <Navbar className='sitebar'>
                <NavLink href="/" style={{color: 'white', textDecoration: 'none'}}>Home</NavLink>
                <NavLink href="/" style={{color: 'white', textDecoration: 'none'}}>My Garden</NavLink>
                        <NavbarBrand href='/'>
                            <Logout clearSession={props.clearSession}/>
                        </NavbarBrand>
                </Navbar>
            </Nav>
        </div>    
    );
};

export default Sitebar;
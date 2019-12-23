import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./navbar.css"
 export const Pnavbar = (props:any) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Reimbursement</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/login/">login</NavLink>
            </NavItem>
            <NavItem>
            
               <Link to='/user/display'>users</Link> 
            </NavItem>
            <NavItem>
               <Link to='/reimbursements/status/'>Reimbursement Status</Link> 
            </NavItem>
            <NavItem>
               <Link to='/reimbursements/user/'>Reimbursement User</Link> 
            </NavItem>
            <NavItem>
               <Link to='/user/display/id/'>Users ID</Link> 
            </NavItem>
            <NavItem>
              <Link to='/user/update/form'>Update User</Link>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Pnavbar;

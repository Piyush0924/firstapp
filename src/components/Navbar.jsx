// NavbarComponent.jsx
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';

function NavbarComponent() {
  const reduxData=useSelector(state=>state);
  // Log reduxData to see if it's defined
  // console.log('reduxData:', reduxData);
// const [cart,setCart]=React.useState([]);
// React.useEffect(()=>{
//   if(reduxData.cart){
//     setCart(reduxData.cart.length);
//   }
// },[reduxData]);

  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <Link to={"/"} >Home</Link>
             </Nav.Link>

             <Nav.Link >
              <Link to={"/Products/12"} >Products</Link>
             </Nav.Link>

             <Nav.Link >
              <Link to={"/Helps"} >Helps</Link>
             </Nav.Link>

             <Nav.Link >
              <Link to={"/Contactus"} >Contactus</Link>
             </Nav.Link>
             <Nav.Link>
  <Link>Cart({reduxData.cart.length}) </Link>
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;

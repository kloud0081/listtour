import { Link } from 'react-router-dom';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap'
 function Nav1 ({setSearch}){
    return (
      <Navbar bg="light" expand="lg" className="nav">
      
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0 navlink"
          style={{ maxHeight: '100px' }}
          navbarScroll>
            <div><span>
          <Link className="li" to="/" style={{textDecoration:"none"}}>Home</Link></span>
          <span> <Link className="li" to="/tour"style={{textDecoration:"none"}}>Our Tour</Link></span>
          <span> <Link to="/addnewtourbar" style={{textDecoration:"none"}}>Add new Tourbar</Link></span>
          </div>  </Nav>
        <Form className="serarch d-flex" >
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search" onChange={e => setSearch(e.target.value)}/></Form>
      </Navbar.Collapse>
    </Navbar>
    )
}
export default Nav1

/* <Link to="/">Home</Link>
          <Link to="/ourtour">Our Tour</Link>
          <Link to="/addnewtourbar">Add new Tourbar</Link>  */
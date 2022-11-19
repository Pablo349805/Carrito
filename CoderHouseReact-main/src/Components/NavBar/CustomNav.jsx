import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"

const {Item} = Nav

const CustomNav = () => {
    return ( 
        <Nav>
            <Item className="d-flex justify-content-end">
                <Link exact to="/productos/electronics" className="mx-3 text-muted text-decoration-none">electronics</Link>
                <Link exact to="/productos/jewelery" className="mx-3 text-muted text-decoration-none">jewelery</Link>
                <Link exact to="/productos/women's clothing" className="mx-3 text-muted text-decoration-none">women's clothing</Link>
                <Link exact to="/productos/men's clothing" className="mx-3 text-muted text-decoration-none">men's clothing</Link>
            </Item>
        </Nav>
     );
}
 
export default CustomNav;
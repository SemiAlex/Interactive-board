import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
    return <div className='d-flex justify-content-start align-items-end header'>
        <Link to="" className='link-none display-4 mx-4'>KanBoard</Link>
        <Link to="" className='link-none display-6 mx-4'>Home</Link>
        <Link to="board" className='link-none display-6 mx-4'>Board</Link>
    </div>
    ;
}

export default Header
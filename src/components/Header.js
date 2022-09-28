import { Link } from 'react-router-dom';

function Header() {
    return <div className='d-flex justify-content-start align-items-end header'>
        <Link to="" className='link-none display-4 mx-4'>KanBoard</Link>
        <Link to="" className='link-none display-6 mx-4'>Home</Link>
        <Link to="boards" className='link-none display-6 mx-4'>Boards</Link>
        <Link to="registration" className='link-none display-6 mx-4'>Profile</Link>
        <Link to="about" className='link-none display-6 mx-4'>About</Link>
    </div>
        ;
}

export default Header
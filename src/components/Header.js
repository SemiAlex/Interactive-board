import { Link } from 'react-router-dom';

function Header() {
    return <div className='d-flex justify-content-start align-items-end header'>
        <div className='hover-shadow'>
            <Link to="" className='link-none display-4 mx-4'>KanBoard</Link>
        </div>
        <div className='hover-shadow'>
            <Link to="" className='link-none display-6 mx-4 h-100'>Home</Link>
        </div>
        <div className='hover-shadow'>
            <Link to="boards" className='link-none display-6 mx-4'>Boards</Link>
        </div>
        <div className='hover-shadow'>
            <Link to="registration" className='link-none display-6 mx-4'>Profile</Link>
        </div>
        <div className='hover-shadow'>
            <Link to="about" className='link-none display-6 mx-4'>About</Link>
        </div>
    </div>;
}

export default Header
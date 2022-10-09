import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function Header() {

    return <div className='d-flex align-items-end header blue px-3'>
        <Link to="" className='link-none'>
            <div className='hover-shadow p-2 header-text'>
                <span className='header-margin'>
                <FontAwesomeIcon icon={faHouse} />
                </span>
            </div>
        </Link>
        <Link to="boards" className='link-none'>
            <div className='hover-shadow p-2 header-text'>
                <span className='header-margin'>Boards</span>
            </div>
        </Link>
        <Link to="registration" className='link-none'>
            <div className='hover-shadow p-2 header-text'>
                <span className='header-margin'>Profile</span>
            </div>
        </Link>
        <Link to="about" className='link-none'>
            <div className='hover-shadow p-2 header-text'>
                <span className='header-margin'>About</span>
            </div>
        </Link>
    </div>;
}

export default Header
import '../App.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';

function Home() {

    const { profile } = useContext(ThemeContext)

    return <div className='d-flex justify-content-center align-items-center h-100 w-100 text-center'>
        <div>
            <h1 className='display-1'>Welcome!</h1>
            <Link to={profile.email ? 'boards' : 'registration'} className='display-6 link-none text-nowrap hover-shadow px-2'>
                Get started
            </Link>
        </div>
    </div>
}

export default Home
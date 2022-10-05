import '../App.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';

function Home() {

    const { profile } = useContext(ThemeContext)

    return <>
        <div className='placeholder' />
        <div className='d-flex justify-content-center align-items-center  w-100 text-center'>
            <div>
                <h1 className='display-1'>Welcome to interactive board!</h1>
                <Link to={profile.email ? 'boards' : 'registration'} className='display-5 link-none text-nowrap hover-shadow px-2'>
                    Get started
                </Link>
            </div>
        </div>
    </>
}

export default Home
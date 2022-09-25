import '../App.css'
import { Link } from 'react-router-dom';

function Home() {
    return <div className='d-flex justify-content-center align-items-center h-100'>
        <div className='w-25 text-center'>
            <h1 className='display-1'>Welcome!</h1>
            <div className='d-flex justify-content-between align-items-center text-nowrap'>
                <Link to="board" className='display-6 link-none'>Get started</Link>
                <Link to="" className='display-6 link-none'>Register</Link>
            </div>
        </div>
    </div>
}

export default Home
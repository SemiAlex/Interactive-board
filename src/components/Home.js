import '../App.css'
import { Link } from 'react-router-dom';

function Home() {
    return <div className='d-flex justify-content-center align-items-center h-100 w-100 text-center'>
        <div>
            <h1 className='display-1'>Welcome!</h1>
            <Link to="boards" className='display-6 link-none text-nowrap'>Get started</Link>
        </div>
    </div>
}

export default Home
import '../App.css';
import { useContext, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import ThemeContext from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function Registration() {
    
    const { profile, setProfile, boards } = useContext(ThemeContext)
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
    }

    function saveProfile() {
        const newProfile = { name: nameRef.current.value, email: emailRef.current.value, password: passwordRef.current.value }
        if (newProfile.email && newProfile.password) {
            setProfile(newProfile)
            localStorage.setItem(`profile`, JSON.stringify(newProfile));
        }
    }

    return <>
        <div className='placeholder-profile' />
        {profile.email ?
            <div className='d-flex justify-content-center align-items-center'>
                <div className='blue p-4 rounded'>
                    <p className='display-6'>Welcome, {`${profile.name}`}</p>
                    <p>
                        You can view your existing boards or create new ones.
                    </p>
                    <p>
                        Try it now.
                    </p>
                    <div className='text-center'>
                        <Link to='../boards' className='h5 link-none text-nowrap'>
                            <span className='transparent border border-white text-white hover-shadow p-2'>
                                {`Show your ${boards.length > 1 ? boards.length + ' boards' : 'board'}`}
                            </span>
                        </Link>
                    </div>
                </div>
            </div> :
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="nameForm">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter your name" ref={nameRef} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="emailForm">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="passwordForm">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" ref={passwordRef} />
                        </Form.Group>
                        <button className='blue border-0 rounded thick px-3 py-1' type="submit" onClick={() => saveProfile()}>
                            Submit
                        </button>
                    </Form>
                </div>
            </div>
        }
    </>;
}

export default Registration
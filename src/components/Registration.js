import { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ThemeContext from '../context/ThemeContext';

function Registration() {
    const { profile, setProfile } = useContext(ThemeContext)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
    }

    function saveProfile() {
        const newProfile = { email: emailRef.current.value, password: passwordRef.current.value }
        if (newProfile.email && newProfile.password) {
            setProfile(newProfile)
            localStorage.setItem(`profile`, JSON.stringify(newProfile));
        }
    }

    return ( profile.email ? <div className='d-flex justify-content-center align-items-center h-100'><p className='display-6'>Welcome, {`${profile.email}`}</p></div> :
        <div className='d-flex justify-content-center align-items-center h-100'>
            <div>
            <Form onSubmit={handleSubmit} className="">
                <Form.Group className="mb-3" controlId="emailForm">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordForm">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="rememberMe">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => saveProfile()}>
                    Submit
                </Button>
            </Form>
            </div>
        </div>
    );
}

export default Registration
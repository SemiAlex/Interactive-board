import { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ThemeContext from '../context/ThemeContext';

function Registration() {
    const {profile, setProfile} = useContext(ThemeContext)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function saveProfile(event) {
    event.target.preventDefault();
    setProfile({email: emailRef.current.value, password: emailRef.current.value})
    }

    return (
        <div className='d-flex justify-content-center align-items-center h-100'>
            <div>
            <Form>
                <Form.Group className="mb-3" controlId="emailForm">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordForm">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="rememberMe">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit" onSubmit={saveProfile}>
                    Submit
                </Button>
                {JSON.stringify(profile)}
            </Form>
            </div>
        </div>
    );
}

export default Registration
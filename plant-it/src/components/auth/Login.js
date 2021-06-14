import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = (props) => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/', {
            method: 'POST',
            body: JSON.stringify(
                {user:{emailAddress: emailAddress, password: password}}
            ),
            headers: new Headers ({
                'Content-Type': 'application/json/'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    return (
        <div className='Login'>
            <h2>Login/Register</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='emailAddress'>Email</Label>
                    <Input onChange={(e) => setEmailAddress(e.target.value)} name='emailAddress' value={ emailAddress } />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' value={ password } />
                </FormGroup>
                <br></br>
                <Button type='submit' style={{textAlign: 'center'}}>Login</Button>
                <p className='register'>Don't have an account? Register now to start adding to your garden!</p>
                <Button type='submit'>Register</Button>
            </Form>
        </div>
    )
};

export default Login;
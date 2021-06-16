import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


/** */

const Login = (props) => {
    console.log(props);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://wd85-plant-it2.herokuapp.com/user/login', {
            method: 'POST',
            body: JSON.stringify(
                {user:{emailAddress: emailAddress, password: password}}
            ),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
        .catch(err => console.log(err))
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
            </Form>
        </div>
    )
};

export default Login;
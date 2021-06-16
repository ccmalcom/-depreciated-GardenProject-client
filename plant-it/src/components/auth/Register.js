import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Register = (props) => {
    const [firstName, setFirstName] = useState('');
    
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        fetch('https://wd85-plant-it2.herokuapp.com/user/register', {
            method: 'POST',
            body: JSON.stringify({user:{firstName: firstName, lastName: lastName, emailAddress: emailAddress, password: password, zipCode: zipCode}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
        
    }

    return (
        <div className='Register'>
            <h1>Register</h1>
            <Form onSubmit={ handleSubmit }>
                <FormGroup>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} name='firstName' value={firstName} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} name='lastName' value={lastName} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='emailAddress'>Email</Label>
                    <Input onChange={(e) => setEmailAddress(e.target.value)} name='emailAddress' value={emailAddress} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name='password' value={password} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='zipCode'>Zipcode</Label>
                    <Input onChange={(e) => setZipCode(e.target.value)} name='zipCode' value={zipCode} />
                </FormGroup>
                <br></br>
                <Button type='submit'>Sign Up</Button>
            </Form>
        </div>
    )

}

export default Register;
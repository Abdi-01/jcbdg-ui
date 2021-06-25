import React, { Component } from 'react';
import { FormGroup, Label, Button, Input } from 'reactstrap';

class AuthPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{ margin: "20px" }} >
                <div style={{ textAlign: "center" }}>
                    <h1>Authentication Page</h1>
                </div>
                <h2>Login</h2>
                <>
                    <FormGroup>
                        <Label for="textEmail">Email</Label>
                        <Input/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="textPassword">Password</Label>
                        <Input type="password" />
                    </FormGroup>
                    <Button size="lg" style={{ width: '100%', backgroundColor: '#0058AB', margin: "20px 0" }}>Login</Button>
                </>
                <h2>Register</h2>
                <>
                    <FormGroup>
                        <Label for="textEmail">Email</Label>
                        <Input/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="textPassword">Password</Label>
                        <Input type="password"/>
                    </FormGroup>
                    <Button size="lg" style={{ width: '100%', backgroundColor: '#0058AB', margin: "20px 0" }}>Register</Button>
                </>
            </div>
         );
    }
}
 
export default AuthPage;

import React, { Component } from 'react';
import axios                from 'axios';
import {
    Form,
    Input,
    Button,
    Icon
}                           from 'semantic-ui-react';
import './Register.scss';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username       : '',
            password       : '',
            confirmPassword: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // state = {
    //     username       : '',
    //     password       : '',
    //     confirmPassword: ''
    // };

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event) {
        let data = {
            username       : this.state.username,
            password       : this.state.password,
            confirmPassword: this.state.confirmPassword
        };
        console.log(data);
        axios({
            method: 'post',
            url: '/',
            data: data
        });
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={ this.onSubmit }>
                <Form.Field>
                    <label htmlFor="">Username</label>
                    <Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        type="text"
                        placeholder="Pick a username"
                        name="username"
                        value={ this.state.username }
                        onChange={ this.onChange }/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="">Password</label>
                    <Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        type="password"
                        placeholder="Pick a password"
                        name="password"
                        value={ this.state.password }
                        onChange={ this.onChange }/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="">Confirm password</label>
                    <Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={ this.state.confirmPassword }
                        onChange={ this.onChange }/>
                </Form.Field>
                <Form.Field>
                    <Button fluid color="green" type="submit">
                        <Icon name="privacy"/>Register
                    </Button>
                </Form.Field>
            </Form>
        );
    }

}

export default Register;

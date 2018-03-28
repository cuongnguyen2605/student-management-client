import React, {Component} from 'react';
import axios              from 'axios';
import {
    Form,
    Input,
    Button,
    Checkbox,
    Icon
}                         from 'semantic-ui-react';
import './Login.scss';

class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        let data = {
            username: this.state.username,
            password: this.state.password
        };
        console.log(data);
        axios({
            method: 'post',
            url   : '/',
            data  : data
        });
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit.bind(this)}>
                <Form.Field>
                    <label htmlFor="">Username</label>
                    <Input
                        fluid
                        type="text"
                        icon="user"
                        iconPosition="left"
                        placeholder="Pick a username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange.bind(this)}/>
                </Form.Field>
                <Form.Field>
                    <label htmlFor="">Password</label>
                    <Input
                        fluid
                        type="password"
                        icon="lock"
                        iconPosition="left"
                        placeholder="Create a password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange.bind(this)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label="Remember"/>
                </Form.Field>
                <Button fluid color="green" type="submit">
                    <Icon name="privacy"/>Log in
                </Button>
            </Form>
        );
    }

}

export default Login;

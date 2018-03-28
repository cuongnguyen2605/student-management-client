import React, {Component} from 'react';
import {
    Menu,
    Button
}                         from 'semantic-ui-react';
import './Header.scss';

class Header extends Component {

    state = {
        activeItem: 'home'
    };

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    };

    render() {
        const {activeItem} = this.state;

        return (
            <Menu>
                <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick}/>
                <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick}/>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button primary>
                            Sign up
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button>
                            Log in
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;

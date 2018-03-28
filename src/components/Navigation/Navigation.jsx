import React, {Component} from 'react';
import {
    Menu
}                         from 'semantic-ui-react';
import './Navigation.scss';

class Navigation extends Component {

    state = {};

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
    };

    render() {
        const {activeItem} = this.state;

        return (
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>Navigation</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="item 1" active={activeItem === ''} onClick={this.handleItemClick}/>
                        <Menu.Item name="item 2" active={activeItem === ''} onClick={this.handleItemClick}/>
                        <Menu.Item name="item 3" active={activeItem === ''} onClick={this.handleItemClick}/>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Navigation</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="item 4" active={activeItem === ''} onClick={this.handleItemClick}/>
                        <Menu.Item name="item 5" active={activeItem === ''} onClick={this.handleItemClick}/>
                        <Menu.Item name="item 6" active={activeItem === ''} onClick={this.handleItemClick}/>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Navigation</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="item 7" active={activeItem === ''} onClick={this.handleItemClick}/>
                        <Menu.Item name="item 8" active={activeItem === ''} onClick={this.handleItemClick}/>
                        <Menu.Item name="item 9" active={activeItem === ''} onClick={this.handleItemClick}/>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        );
    }

}

export default Navigation;

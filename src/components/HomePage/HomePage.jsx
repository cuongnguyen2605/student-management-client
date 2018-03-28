import React, {Component} from 'react';
import {
    Table
}                         from 'semantic-ui-react';
import './HomePage.scss';

class HomePage extends Component {
    render() {
        return (
            <Table striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Date Joined</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Called</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Diamond</Table.Cell>
                        <Table.Cell>01/01/2018</Table.Cell>
                        <Table.Cell>diamond@gmail.com</Table.Cell>
                        <Table.Cell>Diamonds</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Diamond</Table.Cell>
                        <Table.Cell>01/01/2018</Table.Cell>
                        <Table.Cell>diamond@gmail.com</Table.Cell>
                        <Table.Cell>Diamonds</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Diamond</Table.Cell>
                        <Table.Cell>01/01/2018</Table.Cell>
                        <Table.Cell>diamond@gmail.com</Table.Cell>
                        <Table.Cell>Diamonds</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Diamond</Table.Cell>
                        <Table.Cell>01/01/2018</Table.Cell>
                        <Table.Cell>diamond@gmail.com</Table.Cell>
                        <Table.Cell>Diamonds</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Diamond</Table.Cell>
                        <Table.Cell>01/01/2018</Table.Cell>
                        <Table.Cell>diamond@gmail.com</Table.Cell>
                        <Table.Cell>Diamonds</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Diamond</Table.Cell>
                        <Table.Cell>01/01/2018</Table.Cell>
                        <Table.Cell>diamond@gmail.com</Table.Cell>
                        <Table.Cell>Diamonds</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Diamond</Table.Cell>
                        <Table.Cell>01/01/2018</Table.Cell>
                        <Table.Cell>diamond@gmail.com</Table.Cell>
                        <Table.Cell>Diamonds</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Diamond</Table.Cell>
                        <Table.Cell>01/01/2018</Table.Cell>
                        <Table.Cell>diamond@gmail.com</Table.Cell>
                        <Table.Cell>Diamonds</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Diamond</Table.Cell>
                        <Table.Cell>01/01/2018</Table.Cell>
                        <Table.Cell>diamond@gmail.com</Table.Cell>
                        <Table.Cell>Diamonds</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Diamond</Table.Cell>
                        <Table.Cell>01/01/2018</Table.Cell>
                        <Table.Cell>diamond@gmail.com</Table.Cell>
                        <Table.Cell>Diamonds</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
}

export default HomePage;

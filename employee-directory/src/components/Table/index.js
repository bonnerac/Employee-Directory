import React from 'react';
import './style.css';
import API from '../../utils/API'
import Employee from '../Employee/index'


class Table extends React.Component {
    state = {
        result: {}

    }


    searchEmployees = () => {
        API.randomEmployee()
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.searchEmployees()

    }

    render() {
        return (
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <Employee
                        Picture={this.state.result.Picture}
                        First={this.state.result.First}
                        Last={this.state.result.Last}
                        Phone={this.state.result.Phone}
                        Email={this.state.result.Email}>
                    </Employee>
                </tbody>
            </table>
        );
    }


}




export default Table;


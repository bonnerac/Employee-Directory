import React from 'react';
import './style.css';
import API from '../../utils/API'
// import Employee from '../Employee/index'


class Table extends React.Component {
    state = {
        result: []

    }

    searchEmployees = () => {
        API.randomEmployee()
            .then(res => {
                console.log(res.data.results);
                this.setState({ result: res.data.results });
                console.log(this.state.result)
            })
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
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.result.map(result => (
                        <h1 key={result}>
                            {result.name}
                        </h1>
                    ))}

                </tbody>
            </table>
        );
    }


}

{/* <Employee
    Picture={this.state.result.Picture}
    First={this.state.result.First}
    Last={this.state.result.Last}
    Phone={this.state.result.Phone}
    Email={this.state.result.Email}>
</Employee> */}




export default Table;


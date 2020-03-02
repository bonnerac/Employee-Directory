import React from 'react';
import './style.css';
import API from '../../utils/API'
// import Employee from '../Employee/index'


class Table extends React.Component {
    state = {
        results: []

    }

    searchEmployees = () => {
        API.randomEmployee()
            .then(res => {
                console.log(res.data.results);
                this.setState({ results: res.data.results });
                console.log(this.state.results)
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.searchEmployees()
    }

    onSort(event, sortKey) {

        const data = this.state.results[0].name.first;
        console.log(data)
        // data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
        // this.setState({ data })
    }

    render() {
        return (
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col" onClick={e => this.onSort(e, 'firstname')}>First Name</th>
                        <th scope="col" onClick={e => this.onSort(e, 'lastname')}>Last Name</th>
                        <th scope="col" onClick={e => this.onSort(e, 'phone')}>Phone</th>
                        <th scope="col" onClick={e => this.onSort(e, 'email')}>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.results.map(result => (
                        <tr>

                            <td><img src={result.picture.thumbnail}></img></td>
                            <td>{result.name.first}</td>
                            <td>{result.name.last}</td>
                            <td>{result.phone}</td>
                            <td>{result.email}</td>
                        </tr>
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


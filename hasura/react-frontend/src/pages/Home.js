import React from 'react';
import axios from 'axios';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            myEmployees: []
        }
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    handleBtnClick() {
        window.location.replace('/create')
    }

    componentWillMount() {
        // Development environment
        // let Url = 'http://127.0.0.1:5050/employees';
        // Production environment
        let Url = 'https://fredproject.herokuapp.com/employees'
        console.log('I am in componentWillMount function')
        axios.get(Url).then(response => {
            this.setState({
                myEmployees: [...response.data]
            })
        })
    }


    render() {
        return <div className="container">
            <div className="row">
                <div className="col-4 d-flex flex-column">
                    <div className="row mt-5">
                        <p className="h2">Employee Info Dashboard</p>
                    </div>
                    <button className="btn btn-success mt-5" onClick={() => this.handleBtnClick()}>Add a new Employee</button>
                </div>
                <div className="col-8">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.myEmployees.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.employee_id}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.phone_number}</td>
                                        <td>{item.salary}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    }
}

export default Home;
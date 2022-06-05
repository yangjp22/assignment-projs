import React from 'react';
import axios from 'axios'

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            phone:'',
            salary: ''
        }

        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleSalary = this.handleSalary.bind(this)
    }

    handleFirstName(event) {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastName(event) {
        this.setState({
            lastname: event.target.value
        })
    }

    handlePhone(event) {
        this.setState({
            phone: event.target.value
        })
    }

    handleSalary(event) {
        this.setState({
            salary: event.target.value
        })
    }

    handleBtnClick(event) {
        event.preventDefault();
        // development environment
        // let url = 'http://localhost:5050/newemployee'
        // production environment
        let url = 'https://fredproject.herokuapp.com/newemployee'
        let params = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone: this.state.phone,
            salary: this.state.salary
        }
        axios.post(url, params).then(response => {
            // console.log(response.data)
            window.location.replace('/home')
        })
    }

    render() {
        return <div className="container">
            <div className="row mt-5 d-flex flex-column align-items-center">
                <div>
                    <p className="h2">Create a new Employee</p>
                </div>
                <form className="mt-3 col-8" onSubmit={(event) => this.handleBtnClick(event) }>
                    <div className="form-group">
                        <label >First Name: </label>
                        <input type="text" className="form-control" onChange={(event) => this.handleFirstName(event)} />
                    </div>
                    <div className="form-group">
                        <label >Last Name: </label>
                        <input type="text" className="form-control" onChange={(event) => this.handleLastName(event)} />
                    </div>

                    <div className="form-group">
                        <label >Phone: </label>
                        <input type="text" className="form-control" onChange={(event) => this.handlePhone(event)}/>
                    </div>
                    <div className="form-group">
                        <label >Salary: </label>
                        <input type="text" className="form-control" onChange={(event) => this.handleSalary(event)} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
        </div>
    }
}

export default Home;
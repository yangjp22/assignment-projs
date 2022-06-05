import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      url: 'http://127.0.0.1:8000/get_customer_data/',
      array: []
    }
  }

  async componentWillMount(){
    await fetch(this.state.url, {
      method: 'GET',
    }).then(response => response.json())
      .then(response => this.setState({array: response}))
      .catch(error => console.log(error))
  }


  render() {
    return <div className="container">
      <div className="row">
      <table className="table mt-5 offset-md-2 col-md-8">
          <thead className="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Address</th>
              <th scope="col">Zipcode</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.array.map(item => {
                return <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.address}</td>
                  <td>{item.postcode}</td>
                </tr>
              })
            }
          </tbody>
        </table>
    
      </div>
     </div>
  }
}

export default App;

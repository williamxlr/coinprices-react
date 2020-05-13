import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class NavBar extends React.Component {
    render() {
      return(
        <>
        <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="#home">WARA </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
             Data Division
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <br />
        </>
      );
   }
  }

class FetchExample extends Component {
    state = { bpi: {}}

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(res => res.json())
          .then(data => {
             const { bpi } = data
             this.setState({ bpi })
          })    
    }
 
    _renderCurrencies () {
      const { bpi } = this.state
      const currencies = Object.keys(bpi) //['EUR', 'GBP', 'USD']
      console.log("bpi: ",bpi)
       return currencies.map(currency => (
        <div key={currency}>
        <Card  border="danger" size="sm" >
        <Card.Header>  {currency} </Card.Header>
       <ListGroup variant="flush">
        1 BTC is {bpi[currency].rate}
        </ListGroup>
        <ListGroup>
        {bpi[currency].description}
        </ListGroup>
        </Card>
        </div>
         
         ) 
      )
    }
    render () {
        return (
            <div>
                <NavBar />
                <h4>Bitcoin Price Index</h4>
                <div>
                    <Card className="search"   size="sm" >
                   
                    <ListGroup variant="flush">
                    {this._renderCurrencies()}
                    </ListGroup>
                    </Card>
                   
                
                </div>
                
            </div>
        )
    }
}

export default FetchExample
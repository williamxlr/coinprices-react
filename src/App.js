import React, { Component } from 'react';
import FetchExample from './sections/fetch-example';

import Carlist from './sections/cars';


class App extends Component {
  render () {

    return (
      <div className="App">
        <FetchExample />
        
        {/* <Carlist /> */}
      </div>
    );
  }
}
export default App;

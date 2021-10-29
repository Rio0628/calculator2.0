import React from 'react';
import Button from './components/Button';
import Result from './components/Result';
import IndHistCalc from './components/IndHistCalc';


class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Result /> 
        <div className='buttonsContainer'>
          <Button />
        </div>
        
        <IndHistCalc />
      </div>
    );
  }
}

export default App;

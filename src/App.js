import React from 'react';
import Button from './components/Button';
import Result from './components/Result';
import IndHistCalc from './components/IndHistCalc';


class App extends React.Component {
  render () {
    

    return (
      <div className="container">
        <div className='historyBtn'>History</div>
        <Result /> 
        <div className='buttonsContainer'>
          <div className='indRowBtns one'>
            <Button className='button'/>
            <Button className='button'/>
            <Button className='button'/>
            <Button className='button'/>
          </div>
          <div className='indRowBtns two'>
            <Button className='button'/>
            <Button className='button'/>
            <Button className='button'/>
            <Button className='button'/>
          </div>
          <div className='indRowBtns three'>
            <Button className='button'/>
            <Button className='button'/>
            <Button className='button'/>
            <Button className='button'/>
          </div>
          <div className='indRowBtns four'>
            <Button className='button'/>
            <Button className='button'/>
            <Button className='button'/>
            <Button className='button'/>
          </div>
          <div className='indRowBtns five'>
            <Button className='button dot'/>
            <Button className='button zero'/>
            <Button className='button plusMns'/>
            <Button className='button equals'/>
          </div>
        </div>
        
        {/* <IndHistCalc /> */}
      </div>
    );
  }
}

export default App;

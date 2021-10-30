import React from 'react';
import Button from './components/Button';
import Result from './components/Result';
import IndHistCalc from './components/IndHistCalc';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHistoryOpen: false,
      result: '',
      indCalculations: [],
    }
  }

  render () {
    let indCalcContainer = [];
  
    const onClick = (e) => { 
      console.log(e.target)
      const value = e.target.getAttribute('value');

      if (e.target.className === 'historyBtn' || e.target.className === 'backBtn') {
        this.setState({ isHistoryOpen: !this.state.isHistoryOpen});
      }
    }
    
    for (let i = 0; i < 290; i++) {
      indCalcContainer.push( <IndHistCalc key={'calculation' + i} /> );
    }
    
    return (
      <div className="container">
        <div className='calcContainer'>
          <div className='historyBtn' onClick={onClick}>History</div>
          <Result /> 
          <div className='buttonsContainer'>
            <div className='indRowBtns one'>
              <Button className='button clear' value='C' onClick={onClick}/>
              <Button className='button parenthesis' value='( ) ' onClick={onClick}/>
              <Button className='button percent' value='%' onClick={onClick}/>
              <Button className='button divide' value='÷' onClick={onClick}/>
            </div>
            <div className='indRowBtns two'>
              <Button className='button' value='7' onClick={onClick}/>
              <Button className='button' value='8' onClick={onClick}/>
              <Button className='button' value='9' onClick={onClick}/>
              <Button className='button plus' value='+' onClick={onClick}/>
            </div>
            <div className='indRowBtns three'>
              <Button className='button' value='4' onClick={onClick}/>
              <Button className='button' value='5' onClick={onClick}/>
              <Button className='button' value='6' onClick={onClick}/>
              <Button className='button minus' value='-' onClick={onClick}/>
            </div>
            <div className='indRowBtns four'>
              <Button className='button' value='1' onClick={onClick}/>
              <Button className='button' value='2' onClick={onClick}/>
              <Button className='button' value='3' onClick={onClick}/>
              <Button className='button times' value='*' onClick={onClick}/>
            </div>
            <div className='indRowBtns five'>
              <Button className='button dot' value='.' onClick={onClick}/>
              <Button className='button zero' value='0' onClick={onClick}/>
              <Button className='button plusMns' value='+/-' onClick={onClick}/>
              <Button className='button equals' value='=' onClick={onClick}/>
            </div>
          </div>
        </div>
        
        <div className='historyCalcsCntr'>
          <div className='backBtn' onClick={onClick}>Back</div>
          <h3 className='historyHeading'>History</h3>
          <div className='indCalcContr'>
            {indCalcContainer}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

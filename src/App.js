import React from 'react';
import Button from './components/Button';
import Result from './components/Result';
import IndHistCalc from './components/IndHistCalc';


class App extends React.Component {
  render () {
    let indCalcContainer = [];

    for (let i = 0; i < 1; i++) {
      indCalcContainer.push( <IndHistCalc key={'calculation' + i} /> );
    }
    
    return (
      <div className="container">
        <div className='calcContainer'>
          <div className='historyBtn'>History</div>
          <Result /> 
          <div className='buttonsContainer'>
            <div className='indRowBtns one'>
              <Button className='button clear' value='C'/>
              <Button className='button parenthesis' value='( )'/>
              <Button className='button percent' value='%'/>
              <Button className='button divide' value='÷'/>
            </div>
            <div className='indRowBtns two'>
              <Button className='button' value='7'/>
              <Button className='button' value='8'/>
              <Button className='button' value='9'/>
              <Button className='button plus' value='+'/>
            </div>
            <div className='indRowBtns three'>
              <Button className='button' value='4'/>
              <Button className='button' value='5'/>
              <Button className='button' value='6'/>
              <Button className='button minus' value='-'/>
            </div>
            <div className='indRowBtns four'>
              <Button className='button' value='1'/>
              <Button className='button' value='2'/>
              <Button className='button' value='3'/>
              <Button className='button times' value='*'/>
            </div>
            <div className='indRowBtns five'>
              <Button className='button dot' value='.'/>
              <Button className='button zero' value='0'/>
              <Button className='button plusMns' value='+/-'/>
              <Button className='button equals' value='='/>
            </div>
          </div>
        </div>
        
        <div className='historyCalcsCntr'>
          <div className='backBtn'>Back</div>
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

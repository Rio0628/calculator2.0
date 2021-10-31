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
    
    const changeHstrState = () => {
      // Change the state between showing the history container or not
      this.setState({ isHistoryOpen: !this.state.isHistoryOpen});
    }

    const onClick = async (e) => { 
      console.log(e.target)
      const value = e.target.getAttribute('value');

      if (this.state.calculationDone) {
        // Set the result state to an empty array after a calculation is made
        await this.setState({ result: '' });
        this.setState({ calculationDone: false });
      }

      if (e.target.className === 'button clear') {
        // Set the result state to clear
        this.setState({ result: ''});
      }
      else if (e.target.className === 'button parenthesis') {
        // Set the state result in a parenthesis 
        this.setState({ result: `(${this.state.result})`});
      }
      else if (e.target.className === 'button percent') {
        // Divides the result by 100
        this.setState({ result: (this.state.result / 100) });
      }
      else if (e.target.className === 'button sqrt') {
        // Squares roots the result state 
        this.setState({ result: Math.sqrt(this.state.result) });
      }
      else if (e.target.className === 'button equals') {
        // Main eval function that will yield the result of the calculation
        try {
          const result = this.state.result;
         
          // eslint-disable-next-line
          await this.setState({ result: (eval(this.state.result) || '' ) + '' });
          this.setState({ calculationDone: true });
          
          // Place the result and answer variable within an object that will be placed within the indCalculations state
          const answer = this.state.result;
          const obj = {calc: result, answer: answer};
          this.setState(prevState => (({ indCalculations: [...prevState.indCalculations, obj]})));

        } catch (e) {
          this.setState({ result: 'Error '});
          this.setState({ calculationDone: true });
        }
      }
      else if (e.target.className === 'indCalculation') {
        this.setState({ result: e.target.getAttribute('calculation') });
        console.log('mariop')
      }
      else {
        this.setState({ result: this.state.result + value });
      }
      
    }
  
    // Main function for creating all of the history calculation components 
    for (let i = 0; i < this.state.indCalculations.length ; i++) {
      indCalcContainer.push( <IndHistCalc key={'calculation' + i} info={this.state.indCalculations[i]} onClick={onClick}/> );
    }
    
      return (
      <div className="container">
        <div className='calcContainer'>
          {!this.state.isHistoryOpen ? <div className='historyBtn' onClick={changeHstrState}>History</div> : <div className='historyBtnOpen'></div>}
          <Result result={this.state.result} /> 
          <div className='buttonsContainer'>
            <div className='indRowBtns one'>
              <Button className='button clear' value='C' onClick={onClick}/>
              <Button className='button parenthesis' value='( ) ' onClick={onClick}/>
              <Button className='button percent' value='%' onClick={onClick}/>
              <Button className='button divide' value='/' onClick={onClick}/>
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
              <Button className='button sqrt' value='√' onClick={onClick}/>
              <Button className='button equals' value='=' onClick={onClick}/>
            </div>
          </div>
        </div>
        
        {this.state.isHistoryOpen ? 
          <div className='historyCalcsCntr'>
            <div className='backBtn' onClick={changeHstrState}>Back</div>
            <h3 className='historyHeading'>History</h3>
            <div className='indCalcContr'>
              {indCalcContainer}
            </div>
          </div>
        : null }
      </div>
    );
  }
}

export default App;

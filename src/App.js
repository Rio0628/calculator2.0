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
      this.setState({ isHistoryOpen: !this.state.isHistoryOpen});
    }

    const onClick = async (e) => { 
      console.log(e.target)
      const value = e.target.getAttribute('value');

      if (this.state.calculationDone) {
        await this.setState({ result: '' });
        this.setState({ calculationDone: false });
      }

      if (e.target.className === 'button clear') {
        this.setState({ result: ''});
      }
      else if (e.target.className === 'button parenthesis') {
        this.setState({ result: `(${this.state.result})`});
      }
      else if (e.target.className === 'button percent') {
        this.setState({ result: (this.state.result / 100) });
      }
      else if (e.target.className === 'button sqrt') {
        this.setState({ result: Math.sqrt(this.state.result) });
        // this.setState({ result: (-1 * parseFloat(this.state.result).toString()) });
      }
      else if (e.target.className === 'button equals') {
        try {
          const result = this.state.result;
         
          // eslint-disable-next-line
          await this.setState({ result: (eval(this.state.result) || '' ) + '' });
          this.setState({ calculationDone: true });
          const answer = this.state.result;
          const obj = {calc: result, answer: answer};
          console.log(answer)
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
    console.log(this.state.indCalculations)
    console.log(this.state.result)
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

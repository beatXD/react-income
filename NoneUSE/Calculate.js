import React from 'react'
import CalculateOutput from './CalOutput'

class Incomeing extends React.Component {
  state = {
    sum : 0,
    input : 0,
  }

  onInput = (event) => {
    this.setState({ input: event.target.value })
  }

  onPlus = (event) => {
    event.preventDefault()
    this.setState({ sum: this.state.sum + (+this.state.input)})
  }

  onMinus = (event) => {
    event.preventDefault()
    this.setState({ sum: this.state.sum - (+this.state.input)})
  }

  render() {
    return (
      <div>
      Amount : <input type="number" onChange={this.onInput} />
                <button onClick={this.onPlus}>รายรับ</button>
                <button onClick={this.onMinus}>รายจ่าย</button>
        <CalculateOutput sum = {this.state.sum}/>
      </div>
    )
  }
}


export default Incomeing
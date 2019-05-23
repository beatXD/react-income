import React, { Component } from 'react'
import OutputList from './OutputList'
import OutputMoney from './OutputMoney'


class Income extends Component {
    state = {
      list : [],
      money : 0,
      inputlist : '',
    }
  
    onInputList = (event) => {
      this.setState({ inputlist: event.target.value })
    }

    onInputMoney = (event) => {
      this.setState({ inputmoney: event.target.value })
    }

    onIncome = () => {
      this.setState({ money: this.state.money + (+this.state.inputmoney)})
    }
  
    onExpense = () => {
      this.setState({ money: this.state.money - (+this.state.inputmoney)})
    }

    onAddList = () => {
      const newList = [...this.state.list ,this.state.inputlist]
      this.setState({ list: newList, input: '' })
    }

  render() {
    return (
      <div>
         รายการ : <input type="text"  onChange={this.onInputList} />
         จำนวนเงิน : <input type="number" onChange={this.onInputMoney} />
        <button onClick={this.onIncome}>รายรับ</button>
        <button onClick={this.onExpense}>รายจ่าย</button>
        <div>
          <OutputList list = {this.state.list}/>
          <OutputMoney money = {this.state.money}/>
        </div>
      </div>
    )
  }
}
export default Income
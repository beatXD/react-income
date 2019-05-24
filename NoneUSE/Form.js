import React, { Component } from 'react'
// import Table from '../components/Table'
import OutputList from '../src/components/OutputList'
import OutputMoney from '../src/components/OutputMoney'
import '../css/Table.css'

class Form extends Component {
  state = {
    list: [],
    incomemoney:0,
    expensemoney:0,
    balance:0,
    inputlist: '',
    inputmoney: '',
  }

  onInputList = (event) => {
    this.setState({ inputlist: event.target.value })
  }

  onInputMoney = (event) => {
    this.setState({ inputmoney: event.target.value })
  }
  
  Income = () => {
    this.setState({ list: this.state.inputlist })
    this.setState({ incomemoney: this.state.incomemoney + (+this.state.inputmoney) })
    this.setState({ balance: this.state.incomemoney + (+this.state.balance) })
    this.AddIncome()
    console.log(this.state)
  }

  Expense = () => {
    this.setState({ list: this.state.inputlist })
    this.setState({ expensemoney: this.state.expensemoney - (+this.state.inputmoney) })
    this.setState({ balance: this.state.expensemoney - (+this.state.balance) })
    this.AddExpense()
    console.log(this.state)
  }

  AddIncome = () => {
    const newList = [...this.state.list, this.state.inputlist]
    this.setState({ list: newList })

    const newMoney = [...this.state.incomemoney, this.state.inputmoney]
    this.setState({ incomemoney: newMoney })
  }

  AddExpense = () => {
    const newList = [...this.state.list, this.state.inputlist]
    this.setState({ list: newList })

    const newMoney = [...this.state.expensemoney, this.state.inputmoney]
    this.setState({ expensemoney: newMoney })
  }

  render() {
    return (
      <div>
        รายการ : <input type="text" onChange={this.onInputList} />
        จำนวนเงิน : <input type="number" onChange={this.onInputMoney} />
        <button onClick={this.Income} >รายรับ</button>
        <button onClick={this.Expense}>รายจ่าย</button>
        <table>
      <thead>
        <tr>
          <th> รายการ </th>
          <th> รายรับ </th>
          <th> รายจ่าย </th>
          <th> คงเหลือ </th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td> 
             {this.state.list.map((list, index) => {
                return <OutputList key={index} list={list} />
              })}
          </td>
          <td>  
            {this.state.incomemoney.map((money, index) => {
                return <OutputMoney key={index} money={money} />
              })}
          </td>
          <td>  
            {this.state.expensemoney.map((money, index) => {
              return <OutputMoney key={index} money={money} />
            })}
          </td>
      </tr>
      </tbody>
    </table> 
      </div>
    )
  }
}
export default Form

  // Income = async () => {
  //   // await this.setState({ incomemoney: this.state.incomemoney + (+ this.state.inputmoney)})
  //   // await this.setState({ list: this.state.inputlist })
  //   await this.AddIncome()
  //   //await this.setState({ balance: })
  //   console.log(this.state)
  // }

  //Expense = async () => {
    // await this.setState({ expensemoney: this.state.expensemoney - (+ this.state.inputmoney) })
    // await this.setState({ list: this.state.inputlist })
    //await this.AddExpense()
    //await this.setState({ balance: })
    //console.log(this.state)
  //}

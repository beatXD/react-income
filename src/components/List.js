import React, { Component } from 'react'
import OutputList from './OutputList'
import OutputMoney from './OutputMoney'
import Balance from './OutputBalance'
import '../css/Table.css'

class List extends Component {
  state = {
    list: [],
    incomemoney:[],
    expensemoney:[],
    balance:0,
    inputlist: 'ชื่อรายการ',
    inputmoney:0,
  }

  onInputList = (event) => {
    this.setState({ inputlist: event.target.value })
  }

  onInputMoney = (event) => {
    this.setState({ inputmoney: event.target.value })
  }

  calCulatePlus = () => {
    return (this.state.incomemoney.reduce(
      (Sum, user) => 
      Sum + (+ user),0))
  }

  calCulateMinus = () => {
    return (this.state.expensemoney.reduce(
      (Sum, user) => 
      Sum - (+ user),0))
      
  }

  AddIncome = async () => {
    const newList = [...this.state.list, this.state.inputlist]
    const newMoney = [...this.state.incomemoney, this.state.inputmoney]
    const zero = [...this.state.expensemoney, "0"]
    await this.setState({list: newList, incomemoney: newMoney, expensemoney: zero, balance: this.calCulatePlus() })
    console.log(this.state)
  }

  AddExpense = async () => {
    const newList = [...this.state.list, this.state.inputlist]
    const newMoney = [...this.state.expensemoney, this.state.inputmoney]
    const zero = [...this.state.incomemoney, "0"]
    await this.setState({ list: newList, expensemoney: newMoney, incomemoney: zero, balance: this.calCulateMinus() })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        รายการ : <input type="text" onChange={this.onInputList} />
        จำนวนเงิน : <input type="number" onChange={this.onInputMoney} />
        <button onClick={this.AddIncome} >รายรับ</button>
        <button onClick={this.AddExpense}>รายจ่าย</button>
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
          <td>  
           <Balance balance = {this.state.balance} />
          </td>
      </tr>
      </tbody>
    </table> 
      </div>
    )
  }
}
export default List
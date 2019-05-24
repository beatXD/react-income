import React, { Component } from 'react'
import OutputList from './OutputList'
// import OutputMoney from './OutputMoney'
import Balance from './OutputBalance'
import '../css/Table.css'

class Table extends Component {
  
  render() {
    const data = this.props.data
    return (
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
             {this.state.map((list, index) => {
                return <OutputList key={index} list={list} />
              })}
          </td>
          <td>  
           <Balance balance = {this.state.balance} />
          </td>
      </tr>
      </tbody>
    </table> 
    )
  }
}
export default Table
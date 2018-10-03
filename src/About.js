import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {

  render() {
    let stocks = this.props.stocks.map((stock, index) => {
      let pathname = `/stocks/${stock.symbol}`
      return 
        <li key={index}>
          {stock.name} <Link to={pathname}>Go to Stock Page</Link>
        </li>
        console.log('stocks',stocks)
    })
    return (
      <div>
      <h1>Stocks</h1>
      <div>
        <ul>
        {stocks}
        </ul>
      </div>
      </div>
    )
  }
}
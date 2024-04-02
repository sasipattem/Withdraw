// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}
  changeAomunt = value => {
    const {amount} = this.state
    if (amount > 0) {
      this.setState(prevvalue => ({amount: prevvalue.amount - value}))
    } else {
      this.setState({amount: 0})
    }
  }
  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="container">
          <div className="profile-container">
            <p className="profile">S</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="amount-Withdraw">
            <p className="Withdraw">Withdraw</p>
            <p className="in-rupees">CHOOSE SUM (IN RUPEES)</p>
          </div>

          <ul className="btn-container">
            {denominationsList.map(each => (
              <DenominationItem
                denominationsDetials={each}
                key={each.id}
                changeAomunt={this.changeAomunt}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

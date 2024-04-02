// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationsDetials, changeAomunt} = props
  const {value} = denominationsDetials
  const onChangeAmount = () => {
    changeAomunt(value)
  }
  return (
    <li className="list">
      <dutton type="button" onClick={onChangeAmount} className="btn">
        {value}
      </dutton>
    </li>
  )
}
export default DenominationItem

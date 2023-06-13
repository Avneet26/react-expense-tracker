const HistoryList = ({expense}) => {
  return (
    <li className="history-list-item">
      <p>{expense.name}</p>
      <p>{expense.amount}</p>
    </li>
  )
}

export default HistoryList

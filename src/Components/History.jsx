import HistoryList from "./HistoryList";

const History = ({ expenses }) => {
  return (
    <div className="history-wrapper">
      <h5>Transaction History</h5>
      {expenses.map((list) => (<HistoryList key={list.id} expense={list}/>))}
    </div>
  );
};

export default History;

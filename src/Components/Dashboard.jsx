import DashBox from "./DashBox"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3 className="dash-header">Balance Amount</h3>
      <p className="dash-amount">$ 230.45</p>
      <DashBox />
    </div>
  )
}

export default Dashboard

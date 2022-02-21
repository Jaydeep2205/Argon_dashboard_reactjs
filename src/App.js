import "./App.css";
import Navbar from "./Components/Navbar.js";
import Chart from "./Components/Chart";
import Chartbar from "./Components/Chartbar";
// import Chart2 from './Components/Chart2';
import BasicTable from "./Components/List";
import DataTable from "./Components/List2";
import Header from "./Components/Header";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Card3 from "./Components/Card3";
import Card4 from "./Components/Card4";

function App() {
  return (
    <div className="App">
      
      <div className="Header">
        <Header />
      </div>
      <div className="Navbar">
        <Navbar />
      </div>
    
        <div className="Cards">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
        <div className="Chartbars">
          <div className="tab">
            <h2 className="h2"> Sales Value </h2>
            
            <div className="Chart">
              <Chart />
            </div>
          </div>
          <div className="Container">
            <h2> Total Order</h2>
            <div className="Chartbar">
              <Chartbar />
            </div>
          </div>
        </div>

        <div className="Lists">
          <div className="List">
            <BasicTable />
          </div>
          <div className="List2">
            <DataTable />
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./helper/data"

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="main">
        {data.map((data, index) => <Main data={data} />)}
      </div>


    </div>
  );
}

export default App;

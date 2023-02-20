import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import data from "./data";
import Picture from "./components/picture/Picture";

function App() {
  console.log(data);
  return (
    <div >
      <Navbar />

      <Header />
      <div className="App">  
         {data.map((item, index) => (
        <Picture
          key={index}
          photographer={item.photographer}
          src={item.src.large}
        />
      ))}
      </div>

    
    </div>
  );
}

export default App;

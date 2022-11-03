import Navbar from "./components/Navbar";


function App() {
  let arr = [];
  for (let i = 0; i < 2000; i++) {
    arr.push("<p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>");
  };
  console.log(arr);
  return (
    <div>
      <Navbar/>
      {[...arr]}
      
    </div>
  );
}

export default App;

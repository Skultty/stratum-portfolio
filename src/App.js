import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";


function App() {
  let arr = [];
  for (let i = 0; i < 2000; i++) {
    arr.push("<p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>");
  };
  console.log(arr);
  return (
    <main>
      <Navbar/>
      <About/>
      <Portfolio/>
    </main>
  );
}

export default App;

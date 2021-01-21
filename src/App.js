
import Navbar from './navbar';
import Home from './Home';

function App() {
  // const title = 'welcomee ';
  // const likes = 50;
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        {/* <h1>{title}</h1>
        <p>liked {likes}</p> */}
      </div>
    </div>
  );
}

export default App;

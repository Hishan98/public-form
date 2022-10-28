import Home from './pages/home/home';
import UserGen from './hooks/userGen';

function App() {

  UserGen();
  return (
    <div className="App">
      <Home />
      <p></p>
    </div>
  );
}

export default App;

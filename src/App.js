import './App.css';
import Todo from './components/todo';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Todo/>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;

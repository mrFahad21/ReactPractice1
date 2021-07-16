//import logo from './logo.svg';
//import './App.css';
import FunctionalComp from './Components/FunctionalComp';
import {ClassComp, ClassComp1} from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>This is fahad</h1>
      <FunctionalComp></FunctionalComp>
      <ClassComp></ClassComp>
      <ClassComp1></ClassComp1>
      <Click />
      <Counter />
    </div>
  );
}

export default App;

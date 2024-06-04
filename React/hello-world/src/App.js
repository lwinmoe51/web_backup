import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Hello from './component/Hello';
import Message from './component/Message'
import Counter from './component/Counter';
import Welcome from './component/Welcome';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBinding from './component/EventBinding';
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruse" heroName="Batman">
        <p>This is Burse children paragraph</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="Wonder Woman"/> */}
      {/* <Welcome name="Clark" heroName="Superman" /> */}
      {/* <Hello /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      <EventBinding />
    </div>
  );
}

export default App;

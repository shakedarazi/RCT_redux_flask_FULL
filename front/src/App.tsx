import './App.css';
import Filterstudent from './features/Student/Filterstudent';
import Showstudents from './features/Student/Showstudents';
import Student from './features/Student/Student';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Product></Product> */}
        <Student></Student>
        <Filterstudent></Filterstudent>
        <Showstudents></Showstudents>
      </header>
    </div>
  );
}

export default App;

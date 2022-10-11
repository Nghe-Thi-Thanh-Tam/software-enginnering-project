import './App.css';
import Header from './component/header'

import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid'>
      <header>                
        <h1 className="title">Software Engineering project</h1>
      </header>
    </div>
  );
}

export default App;

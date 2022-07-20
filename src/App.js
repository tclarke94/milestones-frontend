import { Route, Routes } from 'react-router-dom';
import "./App.css";

import Homepage from './components/Homepage';
import Checklist from './components/Checklist';
import AddChild from './components/AddChild';
import EditChild from './components/EditChild';
import ShowChild from './components/ShowChild';
function App() {
  return (
    <div className='App'>

      <Routes >
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path ='/list' element ={<Checklist/>}/>
      <Route exact path ='/add' element ={<AddChild/>}/>
      <Route exact path ='/edit' element ={<EditChild/>}/>
      <Route exact path ='/show' element ={<ShowChild/>}/>





      </Routes>

    </div>
  );
}

export default App;

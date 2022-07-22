import { Route, Routes } from 'react-router-dom';
import "./App.css";

import Homepage from './components/Homepage';
import Checklist from './components/Checklist';
import AddChild from './components/AddChild';
import EditChild from './components/EditChild';
import ShowChildren from './components/ShowChildren';
import ShowChild from './components/ShowChild';
import DeleteChild from './components/DeleteChild';
function App() {
  return (
    <div className='App'>

      <Routes >
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path ='/list' element ={<Checklist/>}/>
      <Route exact path ='/add' element ={<AddChild/>}/>
      <Route exact path ='/baby' element ={<ShowChildren/>}/>
      <Route exact path ='/baby/:id' element ={<ShowChild/>}/>
      <Route exact path ='/baby/:id/edit' element ={<EditChild/>}/>
      <Route exact path ='/baby/:id/delete' element ={<DeleteChild/>}/>






      </Routes>

    </div>
  );
}

export default App;

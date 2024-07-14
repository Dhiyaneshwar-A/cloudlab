import { React } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AddMember from './AddMember';
import ViewMember from './ViewMember';
import UpdateMember from './UpdateMember';
function App() {

  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/addMember' element={<AddMember />} />
          <Route exact path='/viewMembers' element={<ViewMember />} />
          <Route exact path='/updateMember' element={<UpdateMember/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

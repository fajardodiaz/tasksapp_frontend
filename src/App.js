import { ShowTasks } from './tasks/ShowTasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateTask } from './tasks/CreateTask';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <ShowTasks/> }  />
            <Route path='/create' element={ <CreateTask/> }  />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

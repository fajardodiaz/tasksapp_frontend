import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/tasks';

export const ShowTasks = () => {
  const [tasks, setTask] = useState([]);
  useEffect(()=>{
    getTasks();
  },[]);

  //Show the Tasks
  const getTasks = async () =>{
    const result = await axios.get(URI);
    setTask(result.data);
  }

  // Delete Task
  const deleteTask = async (id) =>{
    await axios.delete(`${URI}${id}`);
    getTasks();
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <Link to={"/create"} className="btn btn-dark mt-2 mb-2"><i class="fa-solid fa-plus"></i></Link>
                <table className='table table-light table-striped'>
                    <thead className='table-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tasks.map((task)=>(
                            <tr key={task.id}>
                                <th className='align-middle'>{task.id}</th>
                                <th className='align-middle'>{task.title}</th>
                                <th className='align-middle'>{task.description}</th>
                                <th>
                                    {/* <Link to={`/edit/${task.id}`} className="btn btn-warning"/> */}
                                    <button className='btn btn-warning mx-1'><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button className='btn btn-danger mx-1' onClick={()=> deleteTask()}><i class="fa-solid fa-trash"></i></button>
                                </th>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
};
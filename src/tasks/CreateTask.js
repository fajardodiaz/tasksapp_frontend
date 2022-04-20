import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const URI = 'http://localhost:8000/tasks';

export const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const saveTask = async (e) =>{  
        e.preventDefault()
        await axios.post(URI,{title: title, description:description})
        navigate('/')
    }


    return (
        <div className='container'>
            <h2>Create Task</h2>
            <form onSubmit={saveTask}>
                <label className='form-label'>Title</label>
                <input
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value) }
                    type='text'
                    className='form-control'
                />

                <label className='form-label'>Description</label>
                <textarea
                    value={description}
                    onChange={ (e)=> setDescription(e.target.value) }
                    type='text'
                    className='form-control'
                />

                <button type='submit' className='btn btn-dark mt-2 mb-2'>Create</button>

            </form>
        </div>
  )
}

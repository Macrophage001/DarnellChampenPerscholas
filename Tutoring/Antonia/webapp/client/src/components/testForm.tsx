import React, { useState } from 'react';
import axios from 'axios';

/**
 * Created 7/18/2022
 * 
 * @description Antonia and I found out that state variables were not necessary when
 * we were trying to create a form and send its data to the backend. We can just send e.currentTarget
 * which is the form, into the FormData object, and it will parsed automatically.
 * @returns {JSX.Element}
 */
const TestForm = () => {
    const sendFormData = async (e: React.FormEvent<HTMLFormElement>) => {
        const newFormData = new FormData(e.currentTarget);
        const response = await axios.post('/api/account/test', newFormData);
        console.log(response.data);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendFormData(e);
    }

    return (
        <form onSubmit={handleSubmit} method='post' encType='multipart/form-data'>
            <label>Title</label>
            <input className='text-input' type='text' name='title' />
            <label>Description</label>
            <input className='text-input' type='password' name='description' />
            <label>Profile Picture</label>
            <input className='text-input' type='file' name='avatar' />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default TestForm;
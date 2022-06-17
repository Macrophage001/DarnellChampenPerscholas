import React, { useState } from 'react'

const Form = props => {
    const [form, setForm] = useState({
        name: '',
        age: 0
    });

    const handleChange = ev => {
        setForm({ ...form, [ev.target.name]: ev.target.value });
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        console.log(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={form.name}
                onChange={handleChange}
                name="name"
                placeholder='Write Name Here' />
            <input
                type="text"
                value={form.age}
                onChange={handleChange}
                name="age"
                placeholder='Write Age Here' />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form;
import React, { useState, useEffect } from 'react'
import { tryAxiosGet } from '../utils/utils';

import '../styles/user.css';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        tryAxiosGet('https://jsonplaceholder.typicode.com/users', data => setUsers(data));
        tryAxiosGet('https://jsonplaceholder.typicode.com/posts', data => setPosts(data));
    }, [])

    return (
        <div>
            <h1>Users Component</h1>
            <ul>
                {users && users.map(u => (
                    <li>
                        <div className='ui'>
                            <div>
                                <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" alt="test_image" />
                            </div>
                            <div className="header">
                                <h3>{u.name}</h3>
                            </div>
                            <div className='subtitle'>
                                <h4>Joined in 1913</h4>
                            </div>
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis, ad possimus id autem voluptatem labore laboriosam esse nulla necessitatibus aliquid earum reprehenderit minus suscipit quos blanditiis quas rerum. Enim.</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <hr />
            <ul>
                {posts && posts.map(p => <li>{p.title}</li>)}
            </ul>
        </div>
    )
}

export default Users
import React from 'react'

import {users} from '../dataDummy'

import {Link} from 'react-router-dom'

function Users() {

    console.log(users);
  return (
    <div>
        <h2>Data User</h2>

        {users.map((item, index) => (
            <div key={index}>
                <ul>
                    
                    <Link to={`/detail-user/${index}`}><li className='text-danger'>{item.nama}</li></Link>

                </ul>
            </div>
        ))}
    </div>
  )
}

export default Users
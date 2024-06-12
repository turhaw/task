import React, { useEffect, useState } from "react";
import { addUser, getPosts, deleteUser } from "../api/fakeApi";

const Main = () => {

    const [users, setUsers] = useState([])
    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newWebsite, setNewWebsite] = useState("")


    useEffect(() => {
        getPosts().then((res) => {
            setUsers(res)
        })
    },[])

    const handleAddUser = () => {
        if (newName && newEmail && newWebsite) {
            addUser({newName,newEmail, newWebsite}).then((res) => {
                setUsers([...users, res])
                 setNewName("")
                 setNewEmail("")
                 setNewWebsite("")
             })
        }
    } 

    const handleDelete = (id: number) => {
        deleteUser(id).then(() => {
            setUsers(values => {
                return values.filter(item => item.id !== id)
              })
        })
    }

    return (    
     <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                &nbsp;
                <button onClick={() => handleDelete(user.id)} >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                value={newName}
                onChange={e => setNewName(e.target.value)}
                placeholder="Add name here..."
              />
            </td>
            <td>
              <input
                placeholder="Add email here..."
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
              />
            </td>
            <td>
              <input
                placeholder="Add website here..."
                value={newWebsite}
                onChange={e => setNewWebsite(e.target.value)}
              />
            </td>
            <td>
              <button onClick={handleAddUser}>
                Add user
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    )
}

export default Main;
import React from 'react'
import './styles/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, setIsDisable }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        setIsDisable(false)
    }

  return (
    <article className='user__container'>
        <h3 className='user__name'>{user.first_name} {user.last_name}</h3>
        <ul className='user__datos'>
            <li><span>Email</span><span>{user.email}</span></li>
            <li><span>Birthday</span><span>{user.birthday}</span></li>
        </ul>
        <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button onClick={handleEdit}><i className='bx bx-edit' ></i></button>
    </article>
  )
}

export default UserCard
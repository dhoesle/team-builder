import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import axios from 'axios';


const initialTeamMemberList = [
  {
    id: uuid(),
    username: 'dhoesle',
    email: 'dhoesle@dhoesle.com',
    role: 'Student'
  },
  {
    id: uuid(),
    username: '1dhoesle',
    email: '1dhoesle@dhoesle.com',
    role: 'Student'
  },
  {
    id: uuid(),
    username: '2dhoesle',
    email: '2dhoesle@dhoesle.com',
    role: 'Student'
  },
  {
    id: uuid(),
    username: '3dhoesle',
    email: '3dhoesle@dhoesle.com',
    role: 'Student'
  },
  {
    id: uuid(),
    username: '4dhoesle',
    email: '4dhoesle@dhoesle.com',
    role: 'Student'
  },
  {
    id: uuid(),
    username: '5dhoesle',
    email: '5dhoesle@dhoesle.com',
    role: 'Student'
  },
]

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}



function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMemberList)
  const [error, setError] = useState('')

  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    const { name, value } = evt.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    if (!formValues.username || !formValues.email || !formValues.role) {
      setError('MUST FILL OUT INFO')
      return
    }

    const newTeamMember = {
      id: uuid(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    console.log(teamMembers)

    axios.post('url',)

    setTeamMembers(teamMembers => [newTeamMember, ...teamMembers])

    setFormValues(initialFormValues)

  }






  return (
    <div className="App">
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      <span style={{ color: 'red' }}>{error}</span>

      {
        teamMembers.map(teamMember => {
          return (
            <ul>
              <li>{teamMember.username}</li>
            </ul>

          )
        })
      }

    </div>
  );
}

export default App;

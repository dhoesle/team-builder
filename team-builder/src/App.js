import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';
import Form from './Form'

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

  }

  const onSubmit = evt => {

  }



  console.log(initialTeamMemberList)
  return (
    <div className="App">
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      

    </div>
  );
}

export default App;

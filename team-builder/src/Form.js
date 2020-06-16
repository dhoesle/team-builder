import React from 'react'

export default function Form(props){
    const { values, onInputChange, onSubmit } = props

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <h1>User Input Here</h1>

                <label>Username:&nbsp;
                    <input
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onInputChange}
                        maxLength='100'
                    />
                </label>

                <label htmlFor='emailInput'>Email:&nbsp;
                    <input
                        id='emailInput'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>

                <label>Role:&nbsp;
                    <select
                        name="role"
                        value={values.role}
                        onChange={onInputChange}
                    >
                        <option value=''>-- Select a Role --</option>
                        <option value='Instructor'>Instructor</option>
                        <option value='Student'>Student</option>
                        <option value='Team Lead'>TL</option>
                    </select>
                </label>
            </div>

            <div className='form-group submit'>
                <h2>Add Team Member</h2>
                <button>submit</button>
            </div>

        </form>
    )


}
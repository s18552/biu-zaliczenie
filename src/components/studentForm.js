import React, { useState } from 'react'

const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  return (
    <div
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit({ name, age })
      }}
    >
      <h1>Student form</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default StudentForm
